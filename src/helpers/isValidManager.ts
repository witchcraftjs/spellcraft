import { Err,Ok, type Result } from "@alanscodelog/utils/Result.js"

import { isValidShortcut } from "./isValidShortcut.js"

import type { ChainError, Manager, MultipleErrors,SHORTCUT_ERROR } from "../types/index.js"


export function isValidManager(manager: Manager): Result< true, MultipleErrors<
| ChainError
| typeof SHORTCUT_ERROR.UNKNOWN_COMMAND
>> {
	let res
	for (const shortcut of manager.shortcuts.entries) {
		res = isValidShortcut(shortcut, manager)
		if (res.isError) return res
	}

	return Ok(true)
}
