import { isWhitespace } from "@alanscodelog/utils/isWhitespace.js"
import { readable } from "@alanscodelog/utils/readable.js"
import { Result } from "@alanscodelog/utils/Result.js"
import { extractTokens } from "@witchcraft/expressit/utils/extractTokens.js"
import type { Shortcut } from "@witchcraft/shortcuts-manager/types/shortcuts.js"

import { conditionParser } from "./conditionParser.js"


export function parseShortcutCondition(shortcut: Shortcut) {
	if (shortcut.condition.text && !isWhitespace(shortcut.condition.text)) {
		const res = conditionParser.parse(shortcut.condition.text)
		if ("valid" in res && !res.valid) {
			// todo syntax highlighting
			const errorTokens = extractTokens(res).filter(t => !t.valid)
			return Result.Err(new Error(`Syntax error in shortcut condition: ${shortcut.condition.text}. Expected a ${readable(errorTokens[0].expected, { conjunction: "or" })} token at ${errorTokens[0].start}`))
		}
		return Result.Ok(res)
	}
	return Result.Ok(undefined)
}
