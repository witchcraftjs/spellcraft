import { crop } from "@alanscodelog/utils/crop"
import { indent } from "@alanscodelog/utils/indent"


export function errorTextInUse(type: "command" | "key", identifier: string, list: string): string {
	return crop`
		Cannot remove ${type} ${identifier}, it is in use by the following shortcuts:
		${indent(list, 2)}
	`
}
