import type { PickManager } from "../../types/general.js"
import type { Manager } from "../../types/manager.js"
import type { Shortcut } from "../../types/shortcuts.js"

/** Turns a shortcut into an id to use in a v-for loop. */
export const shortcutToId = (
	shortcut: Shortcut,
	manager: PickManager<"options", "stringifier"> & Pick<Manager, "keys" >
): string => [
	shortcut.enabled,
	manager.options.stringifier.stringify(shortcut.chain, manager),
	shortcut.command ?? "",
	shortcut.condition.text,
].join("--")
