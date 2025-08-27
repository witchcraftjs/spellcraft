import { last } from "@alanscodelog/utils/last"
import { type Manager } from "@witchcraft/spellcraft"
import { cloneChain } from "@witchcraft/spellcraft/utils"


export const createDropChain = (
	manager: Manager,
	chain: string[][],
	dropKey: string | undefined,
	partLength: number | undefined = chain.length
): string[][] | undefined => {
	if (dropKey) {
		const nextIsChord: boolean = manager.state.nextIsChord
		const newChain = cloneChain(partLength !== undefined ? chain.slice(0, partLength) : chain)
		const lastChord = last(newChain)
		if (nextIsChord || lastChord === undefined) newChain.push([dropKey])
		else lastChord.push(dropKey)
		return newChain
	}
	return undefined
}
