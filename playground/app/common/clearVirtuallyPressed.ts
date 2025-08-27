import type { Manager } from "@witchcraft/spellcraft"
import { virtualRelease } from "@witchcraft/spellcraft/helpers/virtualRelease"


export function clearVirtuallyPressed(
	virtuallyPressedKeys: Record<string, boolean>,
	manager: Manager
): void {
	for (const key of Object.keys(virtuallyPressedKeys)) {
		virtualRelease(manager, key)
	}
}
