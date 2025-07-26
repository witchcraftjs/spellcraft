import { Err, Ok, type Result } from "@alanscodelog/utils/Result.js"

import { isValidShortcut } from "./isValidShortcut.js"
import { KnownError } from "./KnownError.js"

import { type ChainError, type Manager, type MultipleErrors,SHORTCUT_ERROR } from "../types/index.js"


export function isValidManager(manager: Manager): Result< true, MultipleErrors<
| ChainError
| typeof SHORTCUT_ERROR.INVALID_MANAGER
| typeof SHORTCUT_ERROR.UNKNOWN_COMMAND
>> {
	const required = ["shortcuts", "keys", "commands"] as const
	if (required.some(key => manager[key] === undefined)) {
		return Err(new KnownError(
			SHORTCUT_ERROR.INVALID_MANAGER,
			"Manager is missing required properties.",
			{ keys: Object.keys(manager) }
		))
	}
	let res
	for (const shortcut of manager.shortcuts.entries) {
		res = isValidShortcut(shortcut, manager)
		if (res.isError) return res
	}

	return Ok(true)
}
