import { getKeyFromIdOrVariant } from "../helpers/getKeyFromIdOrVariant.js"
import type { Keys } from "../types/index.js"

/**
 * Returns whether the key (b) passed is equal to key (a).
 *
 * To return true, their ids must be equal.
 *
 * There is an `allowVariants` option that is true by default that allows the keyB to be equal if any of their variants match.
 *
 */

export function equalsKey(
	keyIdA: string,
	keyIdB: string,
	keys: Keys,
	{ allowVariants = true }: { allowVariants?: boolean } = {}
): boolean {
	const idsEqual = keyIdA === keyIdB

	const keyA = getKeyFromIdOrVariant(keyIdA, keys).unwrap()[0]
	const keyB = getKeyFromIdOrVariant(keyIdB, keys).unwrap()[0]

	if (!idsEqual && allowVariants && keyA.variants && keyB.variants) {
		for (const variant of keyA.variants) {
			if (keyB.variants.includes(variant)) return true
		}
		return false
	}
	return idsEqual
}

