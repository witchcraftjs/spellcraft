import { browserSaveFile } from "@alanscodelog/utils/browserSaveFile.js"
import { keys as objectKeys } from "@alanscodelog/utils/keys.js"
import { type Result, Ok, Err } from "@alanscodelog/utils/Result.js"
import { setReadOnly } from "@alanscodelog/utils/setReadOnly.js"
import {
	type Command,
	type CommandExecute,
	type Context,
	type Manager,
} from "@witchcraft/spellcraft"
import { createContext , ShortcutManagerManager } from "@witchcraft/spellcraft"
import { computed, ref, watch } from "vue"

import type { ContextInfo } from "#witchcraft-spellcraft/types.js"

import { conditionParser } from "../common/conditionParser.js"
import { createDefaultManager } from "../common/createDefaultManager.js"


const VERSION = "0.0.1"

export function useMultipleManagers(
	notifyIfError: <T extends Result<any, Error>>(res: T) => T,
	commandExec: CommandExecute
	
) {
	const managerNames = ref<string[]>([])
	const managers = ref<Record<string, Manager>>({})
	const activeManagerName = ref("default")
	/** We need to keep track of them to be able to clear them properly. */
	const { virtuallyPressedKeys, updateVirtuallyPressed } = useShortcutManagerVirtualPress()

	const managerManager = new ShortcutManagerManager(
		raw => createDefaultManager(raw, { __version: VERSION }),
		{
			onError: notifyIfError,
			onParse: (parsed: any) => {
				if (!("__version" in parsed) || !(parsed.__version as string).match(/^([0-9]+)\.([0-9]+)\.([0-9]+)$/)) {
					// we should not actually return here as we can still import the manager
					notifyIfError(Err(`Parsed manager "${parsed.name}"'s __version property is not defined or does not match the version format. The manager will be imported anyways, but it might not function correctly.`))
					;(parsed as any).__version = VERSION
				}
				// set the execute function to the global/default command exec
				// this is the only connection that needs to be made manually
				// to avoid the danger of parsing a malicious function
				for (const commandName of objectKeys(parsed.commands.entries)) {
					const command: Command = parsed.commands.entries[commandName]
					setReadOnly(command, "execute", commandExec)
				}
				return parsed
			},
			onSave: (clone: any) => {
				for (const shortcut of clone.shortcuts.entries) {
					delete shortcut.condition.ast
				}
				(clone as any).__version = VERSION
			},
			onExport(res: object) {
				browserSaveFile(`${managerNames.value.join("--")}.shortcuts.json`, JSON.stringify(res))
			},
			onSetActiveManager: (managerName: string) => {
				activeManagerName.value = managerName
			},
			onSetManagerNames: (names: string[]) => {
				managerNames.value = names
			},
			onSetManager: (name: string, manager: Manager) => {
				managers.value[name] = manager
			}
		}
	)
	managerManager.init()
	
	const debouncedSave = managerManager.debouncedSave
	const duplicateManager = managerManager.duplicateManager.bind(managerManager)
	const deleteManager = managerManager.deleteManager.bind(managerManager)
	const exportManagers = managerManager.exportManagers.bind(managerManager)
	const importManagers = managerManager.importManagers.bind(managerManager)
	const load = managerManager.load.bind(managerManager)
	const renameManager = managerManager.renameManager.bind(managerManager)
	const save = managerManager.save.bind(managerManager)
	const changeManager = managerManager.changeManager.bind(managerManager)


	const contexts = ref<ContextInfo>({
		count: {},
		isActive: {},
	})
	
	const activeManager = computed<Manager>(() => {
		const m = managers.value[activeManagerName.value]!
		const managerOverlay: Manager = {
			...m,
			context: createContext<Context<ContextInfo>>(contexts.value),
			listener: arg => {
				updateVirtuallyPressed(arg)
				m.listener!(arg)
			},
			hooks: {
				...m.hooks,
				onSetShortcutsProp(...args) {
					m.hooks?.onSetShortcutsProp?.(...args)
					debouncedSave(activeManagerName.value)
				},
				onSetShortcutProp(...args) {
					m.hooks?.onSetShortcutProp?.(...args)
					debouncedSave(activeManagerName.value)
				},
				onSetCommandsProp(...args) {
					m.hooks?.onSetCommandsProp?.(...args)
					debouncedSave(activeManagerName.value)
				},
				onSetCommandProp(...args) {
					m.hooks?.onSetCommandProp?.(...args)
					debouncedSave(activeManagerName.value)
				},
			},
		}
		return managerOverlay
	})
	const {
		addContext,
		removeContext,
		activateContext,
		deactivateContext,
	} = useShortcutManagerContextCount(activeManager, contexts)
	
	watch(() => activeManager.value.context.value, () => {
		conditionParser.setContext(activeManager.value.context.value)
	})
	
	
	return {
		duplicateManager,
		managers,
		activeManager,
		save,
		load,
		debouncedSave,
		changeManager,
		deleteManager,
		renameManager,
		managerNames,
		exportManagers,
		importManagers,
		virtuallyPressedKeys,
		contexts,
		addContext,
		removeContext,
		activateContext,
		deactivateContext,
	}
}

