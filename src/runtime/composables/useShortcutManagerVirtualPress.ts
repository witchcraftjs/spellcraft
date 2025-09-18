import { type Ref, ref } from "vue"

import type { ManagerListener } from "../../types/index.js"

export function useShortcutManagerVirtualPress(): {
	virtuallyPressedKeys: Ref<Record<string, boolean>>
	updateVirtuallyPressed: ManagerListener
} {
	const virtuallyPressedKeys = ref<Record<string, boolean>>({})
	function updateVirtuallyPressed(arg: Parameters<ManagerListener>[0]): void {
		const { event, keys, isKeydown } = arg
		if (!event) {
			for (const key of keys) {
				if (isKeydown) {
					virtuallyPressedKeys.value[key] = true
				} else {
					delete virtuallyPressedKeys.value[key]
				}
			}
		} else {
			for (const key of keys) {
				delete virtuallyPressedKeys.value[key]
			}
		}
	}
	return {
		virtuallyPressedKeys,
		updateVirtuallyPressed
	}
}
