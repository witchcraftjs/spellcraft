// allows users to register multiple contexts
// @eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface Register {}

export type ExtendedShortcutManagerInfo = keyof Register extends `ShortcutManagerContext${infer T}`
	? Register extends Record<`ShortcutManagerContext${T}`, infer U>
		? U
		// we can further constrain the type users can register if needed
		// ? U extends { }
		// 	? U
		// 	: {}
		// : {}
		// eslint-disable-next-line @typescript-eslint/no-empty-object-type
		: {}
	// eslint-disable-next-line @typescript-eslint/no-empty-object-type
	: {}


export type ContextInfo = ExtendedShortcutManagerInfo & {
	count: Record<string, number>
	isActive: Record<string, boolean>
}
export {}
