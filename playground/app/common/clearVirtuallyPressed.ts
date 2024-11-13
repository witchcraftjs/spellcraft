import type { Manager } from "@witchcraft/shortcuts-manager"
import { virtualRelease } from "@witchcraft/shortcuts-manager/helpers/virtualRelease.js"


export function clearVirtuallyPressed(
	virtuallyPressedKeys: Record<string, boolean>,
	manager: Manager
): void {
	for (const key of Object.keys(virtuallyPressedKeys)) {
		virtualRelease(manager, key)
	}
}
