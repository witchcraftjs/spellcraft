import { Err,Ok, type Result } from "@alanscodelog/utils/Result"

import { KnownError } from "../helpers/KnownError.js"
import { type Key, type MultipleErrors, type RawKey,SHORTCUT_ERROR } from "../types/index.js"


/**
 * Creates a key.
 *
 * @template TId **@internal** See {@link ./README.md Collection Entries}
 * @param id See {@link Key.id}
 * @param opts Set {@link Key}.
 */

export function createKey<
TId extends string = string,
TKey extends RawKey<TId> = RawKey<TId>,
>(
	id: TId,
	rawKey: Omit<TKey, "id"> = {} as any,
): Result<
		Key<TId>,
		MultipleErrors<
		| typeof SHORTCUT_ERROR.INVALID_VARIANT
		>
	> {
	const k = rawKey
	const key: Key<TId> = {
		type: "key",
		id,
		label: k.label ?? id,
		classes: [...(k.classes as any ?? [])],
		x: k.x ?? 0,
		y: k.y ?? 0,
		width: k.width ?? 0,
		height: k.height ?? 0,
		enabled: k.enabled ?? true,
		pressed: false,
		isModifier: k.isModifier ?? false,
		isToggle: (k.isToggle ?? false) satisfies Key["isToggle"] as false,
		...(k.isToggle ? {
			toggleOnId: `${id}On`,
			toggleOffId: `${id}Off`,
			toggleOnPressed: false,
			toggleOffPressed: false,
		} satisfies Partial<Key<string>> : {}) as any,
		variants: k.variants ?? [],
		render: k.render ?? true,
		updateStateOnAllEvents: k.updateStateOnAllEvents ?? true,
	}
	if (key.variants?.includes(key.id)) {
		return Err(
			new KnownError(SHORTCUT_ERROR.INVALID_VARIANT, `A key variant cannot be the key id itself. Attempted to use "${key.id}" in variants:[ ${key.variants.join(",")} ]`, { variants: key.variants as any /* todo*/, id: key.id })
		)
	}
	return Ok(key)
}
