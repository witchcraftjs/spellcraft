import type { DeepPartial } from "@alanscodelog/utils/types"
import { walk } from "@alanscodelog/utils/walk"

import { type Manager } from "../types/index.js"

/**
 * Strips the manager of properties that should not be saved such as `hooks`, `listener`, `state`, and the following function options:
 *
 * - `evaluateCondition`
 * - `cb`
 * - `sorter`
 * - `stringifier`
 * - `conditionEquals`
 */
export function managerToStorableClone(m: Manager): DeepPartial<Manager> {
	const clone = walk(m, undefined, { save: true })
	delete clone.hooks
	delete clone.listener
	delete clone.state
	delete clone.options.evaluateCondition
	delete clone.options.cb
	delete clone.options.sorter
	delete clone.options.stringifier
	delete clone.options.conditionEquals
	return clone
}
