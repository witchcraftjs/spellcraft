import { getKeyCodesFromKeys } from "./getKeyCodesFromKeys.js"
import { getKeyFromIdOrVariant } from "./getKeyFromIdOrVariant.js"

import type { Keys } from "../types/keys.js"

/**
 * Given an list of key ids, returns an array of deduped key codes. If you have a list of `Key`s instead use {@link getKeyCodesFromKeys}.
 *
 * Useful for when the codes must be passed to a third-party library (for example, a dragging library that takes a list modifiers).
 *
 * This properly takes a look at the key and all it's variants.
 *
 * `skipIdIfHasVariants` is true by default and will skip adding the key's id if it has variants as it's assumed the id is not a valid name.
 */


export function getKeyCodesFromKeyIds(keyIds: string[], keys: Keys, opts: Parameters<typeof getKeyCodesFromKeys>[1]): string[] {
	const keysList = keyIds.flatMap(id => getKeyFromIdOrVariant(id, keys).unwrap())
	return getKeyCodesFromKeys(keysList, opts)
}
