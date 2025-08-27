import { keys } from "@alanscodelog/utils/keys"
import type { AnyFunction } from "@alanscodelog/utils/types"

import type { AttachTarget, EventTypes } from "../types/index.js"
/**
 * Attach the event listeners created by {@link createManagerEventListeners} to an element or {@link Emulator} so the manager can listen to the needed event hooks.
 *
 * They can be removed with {@link detach} or by aborting the controller returned by the function.
 */
export function attach(
	el: AttachTarget,
	listeners: Record<EventTypes, AnyFunction>,
	/** Add options to some listeners. An abort controller is added by default. You can use the `*` key to set a default for all. */
	opts: Partial<Record<EventTypes | "*", AddEventListenerOptions>> = { wheel: { passive: true } },
): AbortController {
	const controller = new AbortController()
	const defaultOpts = opts["*"] ?? {}
	for (const listenerName of keys(listeners)) {
		el.addEventListener(listenerName, listeners[listenerName], {
			signal: controller.signal,
			...defaultOpts,
			...opts[listenerName],
		},)
	}
	return controller
}

