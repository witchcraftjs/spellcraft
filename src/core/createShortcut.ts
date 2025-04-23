import { Err,Ok, type Result } from "@alanscodelog/utils/Result.js"

import { getKeyFromIdOrVariant } from "../helpers/getKeyFromIdOrVariant.js"
import { isValidShortcut } from "../helpers/isValidShortcut.js"
import type { ChainError, Command, Condition, Manager, MultipleErrors, PickManager, RawShortcut, Shortcut,SHORTCUT_ERROR } from "../types/index.js"


/**
 * Creates a {@link Shortcut} object from a {@link RawShortcut}.
 *
 * If the raw shortcut has no condition, a new blank empty condition is created. If you will be following the suggestion of not having any conditions equal eachother (see {@link ConditionComparer}), you can fallback to passing the same instance of an empty condition without issues.
 */
export function createShortcut <
TRawCommand extends Command["name"] | Command = Command["name"] | Command,
	TCommand extends TRawCommand extends string ? Command<TRawCommand> : TRawCommand = TRawCommand extends string ? Command<TRawCommand> : TRawCommand,
	TCondition extends Condition = Condition,

>(
	rawShortcut: RawShortcut<TRawCommand, TCommand, TCondition>,
	manager: Pick<Manager, "keys" | "commands">
	& PickManager<"options", "stringifier" | "sorter">,
): Result< Shortcut<TCommand["name"], TCondition>, MultipleErrors<
| ChainError
| typeof SHORTCUT_ERROR.UNKNOWN_COMMAND
	>> {
	const sorter = manager.options.sorter

	const finalChain = []
	for (const chord of rawShortcut.chain) {
		const stringChord = chord.map(key => typeof key === "object" ? key.id : key)
		sorter.sort(stringChord, manager.keys)
		finalChain.push(stringChord)
	}
	const command = typeof rawShortcut.command === "string" ? rawShortcut.command : rawShortcut.command?.name

	const shortcut: Shortcut = {
		...rawShortcut as any,
		type: "shortcut",
		enabled: rawShortcut.enabled ?? true,
		command,
		chain: finalChain,
		condition: rawShortcut.condition ?? { type: "condition", text: "" },
		forceUnequal: false,
	}
	const res = isValidShortcut(shortcut, manager)
	if (res.isError) return res
	

	return Ok(shortcut satisfies Shortcut as any)
}
