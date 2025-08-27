import { isWhitespace } from "@alanscodelog/utils/isWhitespace"
import { readable } from "@alanscodelog/utils/readable"
import { Err,Ok, type Result } from "@alanscodelog/utils/Result"
import { extractTokens } from "@witchcraft/expressit/utils/extractTokens"
import type { Shortcut } from "@witchcraft/spellcraft/types/shortcuts"

import { conditionParser } from "./conditionParser.js"


export function parseShortcutCondition(shortcut: Shortcut): Result<undefined | ReturnType<typeof conditionParser.parse>, Error> {
	if (shortcut.condition.text && !isWhitespace(shortcut.condition.text)) {
		const res = conditionParser.parse(shortcut.condition.text)
		if ("valid" in res && !res.valid) {
			// todo syntax highlighting
			const errorTokens = extractTokens(res).filter(t => !t.valid)
			return Err(new Error(`Syntax error in shortcut condition: ${shortcut.condition.text}. Expected a ${readable(errorTokens[0].expected, { conjunction: "or" })} token at ${errorTokens[0].start}`))
		}
		return Ok(res)
	}
	return Ok(undefined)
}
