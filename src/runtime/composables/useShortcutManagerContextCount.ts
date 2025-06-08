import { keys } from "@alanscodelog/utils/keys.js"
import { unreachable } from "@alanscodelog/utils/unreachable.js"
import { extractTokens } from "@witchcraft/expressit/utils/extractTokens.js"
import { type ComputedRef, type Ref, watch } from "vue"

import type { Manager } from "../../types/manager.js"
import type { ContextInfo } from "../types.js"

/**
 * Updates the count of the ctx variables depending on how many shortcuts are using the variable. Requires shortcuts use the expressit library to set the ast property of conditions.
 *
 * Useful to know if we can delete a ctx.
 */
export function useShortcutManagerContextCount(manager: Ref<Manager> | ComputedRef<Manager>, context: Ref<ContextInfo>): {
	addContext(ctx: string): void
	removeContext(ctx: string): void
	activateContext(ctx: string): void
	deactivateContext(ctx: string): void
} {
	watch(() => manager.value.shortcuts.entries, newShortcuts => {
		const rc: Record<string, number> = {}
		for (const shortcut of newShortcuts) {
			if (!("ast" in shortcut.condition)) continue
			const c = shortcut.condition.ast
			if (c) {
				const tokens = extractTokens(c as any) // todo
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
		for (const ctx of keys(context.value)) {
			context.value.count[ctx] = rc[ctx] ?? 0
		}
		for (const ctx of keys(rc)) {
			if (!context.value.isActive[ctx]) {
				context.value.isActive[ctx] = false
				context.value.count[ctx] = rc[ctx]
			}
		}
	}, { deep: true, immediate: true })
	// we're using unreachable, because the checks should already be in the ui
	
	function addContext(ctx: string): void {
		if (!context.value.isActive[ctx]) {
			context.value.isActive[ctx] = true
			context.value.count[ctx] = 0
		} else {
			unreachable()
		}
	}

	function removeContext(ctx: string): void {
		if (context.value.count[ctx] === 0) {
			delete context.value.isActive[ctx]
			delete context.value.count[ctx]
		} else {
			unreachable()
		}
	}

	function activateContext(ctx: string): void {
		context.value.isActive[ctx] ||= true
	}

	function deactivateContext(ctx: string): void {
		context.value.isActive[ctx] &&= false
	}

	return {
		addContext,
		removeContext,
		activateContext,
		deactivateContext,
	}
}
