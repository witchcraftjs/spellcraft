import { Ok, type Result } from "@alanscodelog/utils/Result"

import { areValidKeys } from "./areValidKeys.js"
import { containsPossibleToggleChords } from "./containsPossibleToggleChords.js"
import { isValidChord } from "./isValidChord.js"

import { type ChainError, type Manager, type MultipleErrors, type PickManager } from "../types/index.js"


/**
 * Guards against invalid chains (for various reasons). See the {@link ChainError}.
 *
 * Checks {@link areValidKeys}, {@link isValidChord} and {@link containsPossibleToggleChords}
 *
 * @internal
 */
export function isValidChain(
	chain: string[][],
	manager: Pick<Manager, "keys"> & PickManager<"options", "stringifier" | "sorter">,
): Result<true,
		MultipleErrors< ChainError >
	> {
	const sorter = manager.options.sorter

	if ((chain.length === 0) || (chain.length === 1 && chain[0].length === 0)) {
		return Ok(true)
	}

	const resIsValid = areValidKeys(chain, manager)
	if (resIsValid.isError) return resIsValid

	const val = []
	for (let i = 0; i < chain.length; i++) {
		const chord = chain[i]
		const res = isValidChord(chain, chord, i, manager)
		if (res.isError) return res
		val.push(sorter.sort([...chord], manager.keys))
	}
	const res = containsPossibleToggleChords(chain, manager)
	if (res.isError) return res
	return Ok(true)
}
