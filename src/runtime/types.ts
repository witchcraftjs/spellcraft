export interface Register { }

// eslint-disable-next-line @typescript-eslint/naming-convention
type ExtendedContextInfo = Register extends { ExtendedContextInfo: infer T } ? T : unknown

export type ContextInfo = ExtendedContextInfo & {
	count: Record<string, number>
	isActive: Record<string, boolean>
}
export {}
