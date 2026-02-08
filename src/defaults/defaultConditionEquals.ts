import type { Condition } from "../types/index.js"

/**
 * IMPORTANT: Please read {@link ConditionComparer} before using.
 */
export function defaultConditionEquals<TCondition extends Condition>(
	conditionA: TCondition | undefined,
	conditionB: Condition | undefined,
	_type: "shortcut" | "command"
): conditionB is TCondition {
	// both are the same object or both undefined
	if (conditionA === conditionB) return true
	// one if undefined
	if (!conditionA || !conditionB) return false
	return conditionA.text === conditionB.text
}
