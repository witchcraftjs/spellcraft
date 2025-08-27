import { Ok, type Result } from "@alanscodelog/utils/Result"

import { addShortcut } from "./addShortcut.js"

import type { CanHookErrors, Manager, MultipleErrors, PickManager, Shortcut, Shortcuts, ShortcutsSetEntries } from "../types/index.js"

/**
 * # Shortcut
 *
 * Creates a set of shortcuts.
 *
 */
export function createShortcuts<
	THooks extends Manager["hooks"],
	TRawShortcuts extends Shortcut[] ,
	TCheck extends boolean | "only" = true,
>(
	shortcutsList: TRawShortcuts,
	manager: Pick<Manager, "keys" | "commands">
	& PickManager<"options", | "evaluateCondition" | "conditionEquals" | "stringifier" | "sorter">
	& { hooks?: THooks },
	opts?: Partial<Pick<Shortcuts, "ignoreModifierConflicts" | "ignoreChainConflicts" >>,
	{
		check = true as TCheck,
	}: { check?: boolean | "only" } = {}
): Result<
		TCheck extends "only" ? true : Shortcuts,
		MultipleErrors<
			ShortcutsSetEntries["entries@add"]["error"]
		> | CanHookErrors<THooks extends never ? never : THooks, "canSetShortcutsProp">
	>
{
	const shortcuts: Shortcuts = {
		entries: [],
		ignoreModifierConflicts: opts?.ignoreModifierConflicts ?? false,
		ignoreChainConflicts: opts?.ignoreChainConflicts ?? false,
		
	}
	const managerClone = { ...manager, shortcuts }
	if (check) {
		for (const shortcut of shortcutsList) {
			// we check all first to avoid erroring mid-way through
			const res = addShortcut(shortcut, managerClone)
			if (res.isError) return res
		}
	}
	if (check === "only") return Ok(true) satisfies Result<true, never> as any

	
	return Ok(shortcuts) satisfies Result<Shortcuts, never> as any
}

