import { crop } from "@alanscodelog/utils/crop"
import { indent } from "@alanscodelog/utils/indent"


export function errorTextRemove(type: string, identifier: string, entries: string): string {
	return crop`
		${type} ${identifier} does not exist in entries:
			${indent(entries, 3)}
		`
}
