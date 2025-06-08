import { type Ref,ref } from "vue"

import { getKeyboardLayoutMap } from "../../helpers/getKeyboardLayoutMap.js"
import { labelWithKeyboardMap } from "../../helpers/labelWithKeyboardMap.js"
import { onKeyboardLayoutChange } from "../../helpers/onKeyboardLayoutChange.js"
import type { Manager } from "../../types/manager.js"

/**
 * Sets up {@link getKeyboardLayoutMap} and {@link onKeyboardLayoutChange} to use {@link labelWithKeyboardMap}.
 *
 * Returns a ref of the latest key labels to have been set.
 */
export function useLabeledByKeyboardLayoutMap(manager: Manager): Ref<ReturnType<typeof labelWithKeyboardMap> | undefined> {
	const labeledByMap = ref<ReturnType<typeof labelWithKeyboardMap>>()

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
