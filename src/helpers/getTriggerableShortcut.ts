import { crop } from "@alanscodelog/utils/crop.js"
import { indent } from "@alanscodelog/utils/indent.js"
import { Err,Ok, type Result } from "@alanscodelog/utils/Result.js"

import { KnownError } from "./KnownError.js"
import { shortcutIsTriggerableBy } from "./shortcutIsTriggerableBy.js"

import type { Manager, PickManager, TriggerableShortcut } from "../types/index.js"
import { SHORTCUT_ERROR } from "../types/index.js"


/** Gets all triggerable shortcuts in a manager. */
export function getTriggerableShortcut(
	manager: Pick<Manager, "shortcuts" | "keys" | "context" | "commands">
	& PickManager<"options", "stringifier" | "evaluateCondition">
	& PickManager<"state", "chain" | "isRecording">
): Result<false | TriggerableShortcut, KnownError<typeof SHORTCUT_ERROR.MULTIPLE_MATCHING_SHORTCUTS>> {
	const s = manager.options.stringifier

	if (manager.state.isRecording) return Ok(false)
		
	const shortcuts = manager.shortcuts.entries.filter(shortcut => shortcutIsTriggerableBy(manager.state.chain, shortcut, manager))

	if (shortcuts.length === 0) return Ok(false)
	if (shortcuts.length > 1) {
		return Err(new KnownError(SHORTCUT_ERROR.MULTIPLE_MATCHING_SHORTCUTS,
			crop`
				Multiple commands are assigned to the key combination ${s.stringify(manager.state.chain, manager)}:

				${indent(s.stringifyList("shortcuts", shortcuts, manager), 4)}
			`,
			{ shortcuts }))
	} else {
		return Ok(shortcuts[0] as TriggerableShortcut)
	}
}

