import { isArray } from "@alanscodelog/utils/isArray"
import { Err, Ok, type Result } from "@alanscodelog/utils/Result"

import { KnownError } from "./KnownError.js"

import { type Key, type Keys, SHORTCUT_ERROR } from "../types/index.js"


export function getKeyFromIdOrVariant(
	id: string,
	keys: Keys
): Result<Key[], KnownError<typeof SHORTCUT_ERROR.UNKNOWN_KEY_ID>> {
	let k: Key | Key[] = keys.entries[id] ?? keys.toggles[id]
	if (k === undefined) {
		if (keys.variants[id]) {
			const variants = []
			for (const variant of keys.variants[id]) {
				const v = keys.entries[variant] ?? keys.toggles[variant]
				if (v !== undefined) variants.push(v)
			}
			if (variants.length > 0) k = variants
		}
	}
	if (!isArray(k) && k !== undefined) k = [k]
	if (k === undefined) {
		return Err(new KnownError(
			SHORTCUT_ERROR.UNKNOWN_KEY_ID,
			`Tried to get unknown key (${id}).`,
			{ id }
		))
	}
	return Ok(k)
}
