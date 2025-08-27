import { Ok, type Result } from "@alanscodelog/utils/Result"

import { isValidChain } from "../internal/isValidChain.js"
import { isValidCommand } from "../internal/isValidCommand.js"
import type { ChainError, Manager, MultipleErrors, PickManager, Shortcut,SHORTCUT_ERROR } from "../types/index.js"


export function isValidShortcut(
	shortcut: Shortcut,
	manager: Pick<Manager, "keys" | "commands"> & PickManager<"options", "stringifier" | "sorter">,
): Result< true, MultipleErrors<
| ChainError
| typeof SHORTCUT_ERROR.UNKNOWN_COMMAND
	>> {
	const resCommandsValid = isValidCommand(shortcut.command, manager, shortcut)
	if (resCommandsValid.isError) return resCommandsValid
	const resChainValid = isValidChain(shortcut.chain, manager)
	if (resChainValid.isError) return resChainValid
	return Ok(true)
}
