/**
 * Given an list of keys, returns an array of deduped key codes.
 *
 * Useful for when the codes must be passed to a third-party library (for example, a dragging library that takes a list modifiers).
 *
 * This properly takes a look at the key and all it's variants.
 *
 * `skipIdIfHasVariants` is true by default and will skip adding the key's id if it has variants as it's assumed the id is not a valid name.
 */

import type { Key } from "../types/keys.js"

export function getKeyCodesFromKeys(keys: Key[], { skipIdIfHasVariants = true}: { skipIdIfHasVariants?: boolean } = {}): string[] {
	const res = new Set<string>()
	for (const key of keys) {
		if (key.variants) {
			if (!skipIdIfHasVariants) {
				res.add(key.id)
			}
			for (const variant of key.variants) {
				res.add(variant)
			}
		} else {
			res.add(key.id)
		}
	}
	return Array.from(res)
}
