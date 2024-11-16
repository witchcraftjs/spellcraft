import { keys } from "@alanscodelog/utils/keys.js"
import { unreachable } from "@alanscodelog/utils/unreachable.js"
import { extractTokens } from "@witchcraft/expressit/utils/extractTokens.js"
import type { Manager } from "@witchcraft/shortcuts-manager/types/index.js"
import { type Ref, watch } from "vue"

import type { Manager } from "../../types/manager.js"
import type { ContextInfo } from "../types.js"

/**
 * Updates the count of the context variables depending on how many shortcuts are using the variable. Requires shortcuts use the expressit library to set the ast property of conditions.
 *
 * Useful to know if we can delete a context.
 */
export function useShortcutManagerContextCount(manager: Ref<Manager>, contexts: Ref<ContextInfo>): {
	addContext(context: string): void
	removeContext(context: string): void
	activateContext(context: string): void
	deactivateContext(context: string): void
} {
	watch(() => manager.value.shortcuts.entries, newShortcuts => {
		const rc: Record<string, number> = {}
		for (const shortcut of newShortcuts) {
			if (!("ast" in shortcut.condition)) continue
			const c = shortcut.condition.ast
			if (c) {
				const tokens = extractTokens(c)
				const seen: string[] = []
				for (const token of tokens) {
					if (token.type === "VALUE") {
						if (seen.includes(token.value)) continue
						seen.push(token.value)
						rc[token.value] = rc[token.value] ? rc[token.value] + 1 : 1
					}
				}
			}
		}
		for (const context of keys(contexts.value)) {
			contexts.value.count[context] = rc[context] ?? 0
		}
		for (const context of keys(rc)) {
			if (!contexts.value.isActive[context]) {
				contexts.value.isActive[context] = false
				contexts.value.count[context] = rc[context]
			}
		}
	}, { deep: true, immediate: true })
	// we're using unreachable, because the checks should already be in the ui
	
	function addContext(context: string): void {
		if (!contexts.value.isActive[context]) {
			contexts.value.isActive[context] = true
			contexts.value.count[context] = 0
		} else {
			unreachable()
		}
	}

	function removeContext(context: string): void {
		if (contexts.value.count[context] === 0) {
			delete contexts.value.isActive[context]
			delete contexts.value.count[context]
		} else {
			unreachable()
		}
	}

	function activateContext(context: string): void {
		contexts.value.isActive[context] ||= true
	}

	function deactivateContext(context: string): void {
		contexts.value.isActive[context] &&= false
	}

	return {
		addContext,
		removeContext,
		activateContext,
		deactivateContext,
	}
}
