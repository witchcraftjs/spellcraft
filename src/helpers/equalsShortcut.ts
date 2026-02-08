import { equalsCommand } from "./equalsCommand.js"

import type { Manager, PickManager, Shortcut } from "../types/index.js"
import { equalsKeys } from "../utils/equalsKeys.js"

/**
 * Returns whether the shortcut passed is equal to shortcutA one.
 *
 * To return true, their keys, conditions, and commands (depends on the configured `manager.options.shortcutEqualityStrategy`) must be equal.
 *
 * See {@link Manager.options.shortcutEqualityStrategy} for details.
 *
 * You can temporarily override the strategy witht the third parameter.
 */
export function equalsShortcut<TShortcut extends Shortcut>(
	shortcutA: TShortcut,
	shortcutB: Shortcut,
	manager: Pick<Manager, "keys" | "commands"> & PickManager<"options", | "evaluateCondition" | "conditionEquals" | "shortcutEqualityStrategy">,
	overrides?: PickManager<"options", "shortcutEqualityStrategy">["options"]
): shortcutB is TShortcut {
	if (shortcutA.forceUnequal || shortcutB.forceUnequal) return false
	if (shortcutA === shortcutB) return true
	const commandA = shortcutA.command ? manager.commands.entries[shortcutA.command] : undefined
	const commandB = shortcutB.command ? manager.commands.entries[shortcutB.command] : undefined
	const shortcutEqualityStrategy = overrides?.shortcutEqualityStrategy ?? manager.options.shortcutEqualityStrategy
	return (
		equalsKeys(shortcutA.chain, shortcutB.chain, manager.keys, undefined, { allowVariants: true })
		&& manager.options.conditionEquals(shortcutA.condition, shortcutB.condition, "shortcut")
		&& (shortcutEqualityStrategy === "ignoreCommand"
			|| (
				shortcutEqualityStrategy === "ignoreCommandWithDifferentCondition"
				&& commandA?.condition && commandB?.condition
				&& manager.options.conditionEquals(commandA.condition, commandB.condition, "command")
			)
			|| (
				shortcutA.command === shortcutB.command
				&& shortcutA.command === undefined
			)
			|| (shortcutA.command !== undefined
				&& shortcutB.command !== undefined
				&& equalsCommand(manager.commands.entries[shortcutA.command], manager.commands.entries[shortcutB.command], manager)
			)
		)
	)
}

