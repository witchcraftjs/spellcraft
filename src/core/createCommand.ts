import type { Command, CommandExecute, RawCommand } from "../types/index.js"


export function createCommand<
	TName extends string = string,
	TCommand extends RawCommand<TName> = RawCommand<TName>,
>(
	name: TName,
	// we only type the execute here so the user gets type safety but doesn't
	// pay the price of Command being too strictly typed
	rawCommand: Omit<TCommand, "name" | "execute"> & { execute: CommandExecute<TName> } = {} as any
// TName is not passed on purpose! making the command so strictly types is annoying
// since typescript will complain the command returned does not satisfy the base command (due to execute)
): Command {
	const command: Command = {
		type: "command",
		name,
		execute: rawCommand.execute as any,
		description: rawCommand.description ?? "",
		condition: rawCommand.condition ?? { type: "condition", text: "" },
	}
	return command as any
}
