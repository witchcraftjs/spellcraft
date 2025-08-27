import { crop } from "@alanscodelog/utils/crop"
import { indent } from "@alanscodelog/utils/indent"


export function errorTextAdd(
	type: "Key" | "Shortcut" | "Command",
	existingIdentifier: string,
	existingEntry: string,
	newEntry: string
): string {
	return crop`
		${type} ${existingIdentifier} is already registered.
			Existing ${type}:
			${indent(existingEntry.toString(), 3)}
			New ${type}:
			${indent(newEntry.toString(), 3)}
		`
}
