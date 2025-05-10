<template>
<WRoot
	id="spellcraft-app"
	class="dark:bg-neutral-900 dark:text-white gap-2 p-4"
	:is-client-side="isClientSide"
>
	<div class="
		grid grid-cols-3 grid-rows-1 gap-4
	"
	>
		<div class="col-start-2">
			<a :href="githubLink"
				class="
			hover:text-accent-600
			focus:text-accent-600
		"
			>
				<div class="text-xl text-center">Shortcut Manager Demo</div>
			</a>
			<KHelp/>
		</div>
		<div class="flex flex-wrap gap-2 items-center justify-end">
			<KManagerImportExport
				:managers="managerNames"
				@export-all="exportManagers($event)"
				@import="importManagers($event)"
			/>
			<WDarkModeSwitcher
				class="mr-8"
				:auto-label="false"
			/>
		</div>
	</div>
	<GithubCorner :href="githubLink"/>
	<KManagerPicker
		:can-save="true"
		:managers="managerNames"
		:active-manager="activeManager.name"
		@add="changeManager($event, {force:true})"
		@activate="changeManager($event)"
		@remove="deleteManager($event)"
		@rename="renameManager($event)"
		@duplicate="duplicateManager($event.oldName, $event.newName)"
		@export="exportManagers([$event])"
	/>
	<KManager
		:context="context"
		:add-context="addContext"
		:remove-context="removeContext"
		:activate-context="activateContext"
		:deactivate-context="deactivateContext"
		:virtually-pressed-keys="virtuallyPressedKeys"
		:manager="activeManager"
		:trigger-state="triggerState"
		@add-example-data="addExampleData(activeManager)"
	/>
</WRoot>
</template>

<script setup lang="ts">
import {
	addCommand,
	addShortcut,
	type CommandExecute,
	createCommand,
	createShortcut,
	type Manager,
	// setManagerProp,
} from "@witchcraft/spellcraft"
import { safeSetManagerChain } from "@witchcraft/spellcraft/helpers/safeSetManagerChain.js"
import { ref } from "vue"

import { clearVirtuallyPressed } from "./common/clearVirtuallyPressed.js"
import { notifyIfError } from "./common/notifyIfError.js"
import GithubCorner from "./components/GithubCorner.vue"
import KHelp from "./components/Help.vue"
import KManager from "./components/Manager.vue"
import KManagerImportExport from "./components/ManagerImportExport.vue"
import KManagerPicker from "./components/ManagerPicker.vue"
import { useMultipleManagers } from "./composables/useMultipleManagers.js"

import { repository as githubLink } from "../../package.json"

const isClientSide = import.meta.client

const triggerState = ref(false)

const {
	deleteManager,
	changeManager,
	renameManager,
	activeManager,
	duplicateManager,
	exportManagers,
	importManagers,
	managerNames,
	virtuallyPressedKeys,
	context,
	addContext,
	removeContext,
	activateContext,
	deactivateContext,
 
} = useMultipleManagers(notifyIfError, defaultCommandExec)

 
function defaultCommandExec({ isKeydown }: Parameters<CommandExecute>[0]): ReturnType<CommandExecute> {
	if (isKeydown) return
	// setManagerProp(activeManager.value, "state.chain", [])
	safeSetManagerChain(activeManager.value, [])
	clearVirtuallyPressed(virtuallyPressedKeys.value, activeManager.value)
	triggerState.value = true
	setTimeout(() => {
		triggerState.value = false
	}, 500)
}


function addExampleData(manager: Manager) {
	const k = manager.keys.entries
	const m = {
		ctrl: k.VirtualControlLeft!,
		alt: k.VirtualAltLeft!,
		shift: k.VirtualShiftLeft!,
	}
	const c1 = createCommand("Command", { execute: defaultCommandExec })
	const c2 = createCommand("Command w Mod", { execute: defaultCommandExec })
	const c3 = createCommand("Command in Chain", { execute: defaultCommandExec })
	for (const c of [c1, c2, c3]) {
		addCommand(c, manager)
	}
	const s1 = createShortcut({ chain: [[k.KeyB!.id]], command: c1 }, manager).unwrap()
	const s2 = createShortcut({ chain: [[m.ctrl!.id, k.KeyB.id]], command: c2 }, manager).unwrap()
	const s3 = createShortcut({ chain: [[k.KeyV.id], [k.KeyB.id]], command: c3 }, manager).unwrap()
	for (const s of [s1, s2, s3]) {
		addShortcut(s, manager)
	}
}


</script>
<style>
body {
	overscroll-behavior: none;
}
</style>
