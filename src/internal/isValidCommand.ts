import { crop } from "@alanscodelog/utils/crop"
import { indent } from "@alanscodelog/utils/indent"
import { Err, Ok, type Result } from "@alanscodelog/utils/Result"

import { KnownError } from "../helpers/KnownError.js"
import type { Manager, MultipleErrors, PickManager, Shortcut } from "../types/index.js"
import { SHORTCUT_ERROR } from "../types/index.js"

/**
 * @internal
 */

export function isValidCommand(
	commandName: string | undefined,
	manager: Pick<Manager, "commands"> & Partial<Pick<Manager, "keys">> & PickManager<"options", "stringifier">,
	/**
	 * Shortcut will only be added to error if the manager contains keys.
	 * Otherwise it will be ignored.
	 */
	shortcut?: Shortcut
): Result<true, MultipleErrors<typeof SHORTCUT_ERROR.UNKNOWN_COMMAND>> {
	const commands = manager.commands
	const s = manager.options.stringifier
	if (commandName === undefined) return Ok(true)
	const command = commands.entries[commandName]
	if (command === undefined) {
		const shortcutString = shortcut && "keys" in manager ? ` in shortcut ${s.stringify(shortcut, manager as Pick<Manager, "commands" | "keys">)}` : ""
		return Err(new KnownError(SHORTCUT_ERROR.UNKNOWN_COMMAND, crop`
			Unknown command: ${commandName}${shortcutString}. Cannot find in:

			${indent(s.stringifyList("commands", Object.values(commands.entries)), 3)}
			`, { command: commandName, commands, shortcut }))
	}
	return Ok(true)
}
