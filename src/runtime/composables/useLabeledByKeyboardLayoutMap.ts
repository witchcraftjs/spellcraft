import { getKeyboardLayoutMap } from "@witchcraft/shortcuts-manager/helpers/getKeyboardLayoutMap.js"
import { labelWithKeyboardMap } from "@witchcraft/shortcuts-manager/helpers/labelWithKeyboardMap.js"
import { onKeyboardLayoutChange } from "@witchcraft/shortcuts-manager/helpers/onKeyboardLayoutChange.js"
import type { Manager } from "@witchcraft/shortcuts-manager/types/manager.js"
import { ref } from "vue"

/**
 * Sets up {@link getKeyboardLayoutMap} and {@link onKeyboardLayoutChange} to use {@link labelWithKeyboardMap}.
 *
 * Returns a ref of the latest key labels to have been set.
 */
export function useLabeledByKeyboardLayoutMap(manager: Manager) {
	const labeledByMap = ref<string[]>([])

	void getKeyboardLayoutMap().then(map => {
		if (map) {
			labeledByMap.value = labelWithKeyboardMap(manager, { map })
		}
	})
	void onKeyboardLayoutChange(async () => {
		const map = await getKeyboardLayoutMap()
		if (map) {
			labeledByMap.value = labelWithKeyboardMap(manager, { map })
		}
	})
	return labeledByMap
}
