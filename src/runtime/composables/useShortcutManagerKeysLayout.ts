import { useGlobalResizeObserver } from "@witchcraft/ui/composables/useGlobalResizeObserver"
import { computed, reactive, type Ref, ref, watch } from "vue"

import type { Keys } from "../../types/keys.js"

/**
 * Watches Keys.layout.x/y and listens to resize changes on the element containing the keys to update what the pixel height of the element should be and what the pixel keyWidth.
 *
 * While it also returns the width and the ratio, you should not set the element to them.
 *
 */
export const useShortcutManagerKeysLayout = (keys: Keys, keyboardEl: Ref<HTMLElement | null>): {
	width: Ref<number>
	height: Ref<number>
	ratio: Ref<number>
	keyWidth: Ref<number>
	layout: {
		x: number
		y: number
	}
} => {
	const layout = reactive({ x: keys.layout.x, y: keys.layout.y })
	watch([() => keys.layout.x, () => keys.layout.y], ([x, y]) => {
		layout.x = x
		layout.y = y
	})

	const width = ref(0)
	const keyWidth = computed(() => {
		const val = width.value / layout.x
		return Number.isNaN(val) ? 1 : val
	})
	const ratio = computed(() => layout.x / layout.y)
	const height = computed(() => width.value / ratio.value)
	useGlobalResizeObserver(keyboardEl, function updateSize() {
		if (keyboardEl.value) {
			width.value = Math.max(keyboardEl.value.offsetWidth, 1000)
		}
	})
	return { width, height, ratio, keyWidth, layout }
}

