import { type EnumLike } from "@alanscodelog/utils"
import { enumFromArray } from "@alanscodelog/utils/enumFromArray"

import type { AnyInputEvent, Command, Commands, Key, Keys, Shortcut, Shortcuts } from "./index.js"

import type { KnownError } from "../helpers/index.js"

/**
 * All possible errors.
 */
export const SHORTCUT_ERROR = enumFromArray([
	// === shortcut init related problems
	"CHORD_W_ONLY_MODIFIERS",
	"CHORD_W_MULTIPLE_TRIGGER_KEYS",
	"CHORD_W_MULTIPLE_WHEEL_KEYS",
	"CHORD_W_DUPLICATE_KEY",
	"IMPOSSIBLE_TOGGLE_SEQUENCE",
	"MISSING", // removing
	"INVALID_VARIANT",
	"INVALID_VARIANT_PAIR",

	// === duplicate "bases"
	"DUPLICATE_KEY",
	"DUPLICATE_COMMAND",
	"DUPLICATE_SHORTCUT",

	// === other
	"INVALID_SWAP_CHORDS",
	"CANNOT_SET_WHILE_DISABLED",

	// === manager
	"MULTIPLE_MATCHING_SHORTCUTS",
	"INCORRECT_TOGGLE_STATE",
	"NO_MATCHING_SHORTCUT",
	"UNKNOWN_KEY",
	"UNKNOWN_KEY_ID",
	"UNKNOWN_COMMAND",
	"KEY_IN_USE",
	"COMMAND_IN_USE",
	"UNKNOWN_KEY_EVENT",
	"MULTIPLE_ERRORS",
	"INVALID_MANAGER"
])
export type ShortcutError = EnumLike<typeof SHORTCUT_ERROR>

export type ChainError =
| typeof SHORTCUT_ERROR.UNKNOWN_KEY
| typeof SHORTCUT_ERROR.CHORD_W_DUPLICATE_KEY
| typeof SHORTCUT_ERROR.CHORD_W_ONLY_MODIFIERS
| typeof SHORTCUT_ERROR.CHORD_W_MULTIPLE_TRIGGER_KEYS
| typeof SHORTCUT_ERROR.CHORD_W_MULTIPLE_WHEEL_KEYS
| typeof SHORTCUT_ERROR.IMPOSSIBLE_TOGGLE_SEQUENCE

/** Errors that will throw since they should be caught at production. */

export const TYPE_ERROR = enumFromArray([
	"ILLEGAL_OPERATION",
	"HOOK_OR_LISTENER_DOES_NOT_EXIST",
	"FILTER_DOES_NOT_EXIST",
])
export type TypeError = EnumLike<typeof TYPE_ERROR>

/**
 * Defines the properties attached to each error.
 *
 * Makes it easy to define the properties attached to each error by just allowing passing the error (regardless of error type) as T in [[KnownError]] and [[InternalError]].
 */

export type ErrorInfo<T extends ShortcutError | TypeError> =
	T extends ShortcutError
	? ERROR_Info[T]
	: never

/** Type multiple {@link KnownError} errors to work like a discriminated union. */
export type MultipleErrors<T extends ShortcutError | TypeError> = {
	[k in T]: KnownError<k>
}[T]

// note all these error types could be kept in the same type, but then we'd have to make all the keys unique and we can't because internal errors should use the same key

// eslint-disable-next-line @typescript-eslint/naming-convention
type ERROR_Info = {
	// === shortcut init related problems
	[SHORTCUT_ERROR.CHORD_W_ONLY_MODIFIERS]: {
		chord: string[]
		i: number
		keys: string[]
	}
	[SHORTCUT_ERROR.CHORD_W_MULTIPLE_TRIGGER_KEYS]: {
		chord: string[]
		i: number
		keys: string[]
	}
	[SHORTCUT_ERROR.CHORD_W_MULTIPLE_WHEEL_KEYS]: {
		chord: string[]
		i: number
		keys: string[]
	}
	[SHORTCUT_ERROR.CHORD_W_DUPLICATE_KEY]: {
		chord: string[]
		i: number
		keys: string[]
	}
	[SHORTCUT_ERROR.IMPOSSIBLE_TOGGLE_SEQUENCE]: {
		chain: string[][]
		i: number
		key: Key
	}
	[SHORTCUT_ERROR.MISSING]: {
		entry: Key | Shortcut | Command | string
		self: Keys | Shortcuts | Commands
	}
	[SHORTCUT_ERROR.INVALID_VARIANT]: {
		variants: string[]
		id: string
	}
	[SHORTCUT_ERROR.INVALID_VARIANT_PAIR]: {
		variants: Key[]
		key: Key
		otherKey: Key
	}
	
	[SHORTCUT_ERROR.DUPLICATE_KEY]: {
		existing: Key
		self: Keys
	}
	[SHORTCUT_ERROR.DUPLICATE_SHORTCUT]: {
		existing: Shortcut
		self: Shortcuts
		/** If the error is caused by a change, key and value will contain the new key and value. */
		key?: string
		value?: any
	}
	[SHORTCUT_ERROR.DUPLICATE_COMMAND]: {
		existing: Command
		self: Commands
	}
	

	// === other
	[SHORTCUT_ERROR.INVALID_SWAP_CHORDS]:
	{
		chord: string[][]
	} |
	{
		chordsA: string[][]
		chordsB: string[][]
	}

	[SHORTCUT_ERROR.CANNOT_SET_WHILE_DISABLED]:
	{
		key: Key
	}

	// === manager
	[SHORTCUT_ERROR.MULTIPLE_MATCHING_SHORTCUTS]: {
		shortcuts: Shortcut[]
	}
	[SHORTCUT_ERROR.INCORRECT_TOGGLE_STATE]: {
		key: Key
	}
	[SHORTCUT_ERROR.NO_MATCHING_SHORTCUT]: {
		chain: string[][]
	}
	[SHORTCUT_ERROR.UNKNOWN_KEY]: {
		shortcut?: Pick<Shortcut, "chain">
		keys: string[] | Keys
	}
	[SHORTCUT_ERROR.UNKNOWN_COMMAND]: {
		shortcut?: Pick<Shortcut, "chain" | "command">
		command: string
		commands: string[] | Commands
	}
	[SHORTCUT_ERROR.MULTIPLE_ERRORS]: {
		errors: Error[]
	}
	[SHORTCUT_ERROR.KEY_IN_USE]: {
		inUseShortcuts: Shortcut[]
	}
	[SHORTCUT_ERROR.COMMAND_IN_USE]: {
		inUseShortcuts: Shortcut[]
	}
	[SHORTCUT_ERROR.UNKNOWN_KEY_EVENT]: {
		e: AnyInputEvent
		button?: string
		code?: string
		key?: string
		deltaY?: number | string
	}
	[SHORTCUT_ERROR.UNKNOWN_KEY_ID]: {
		id: string
	}
	[SHORTCUT_ERROR.INVALID_MANAGER]: {
		keys: string[]
	}
}


export const MOUSE = enumFromArray([
	"R",
	"M",
	"L",
	"BACK",
	"FORWARD",
])
export type Mouse = EnumLike<typeof MOUSE>
	
export const WHEEL = enumFromArray([
	"down",
	"up",
])
export type Wheel = EnumLike<typeof WHEEL>

 
// These do not need to be initialized, we want the order they're declared in.
export const KEY_SORT_POS = {
	mod: 0,
	modmouse: 1,
	// modmousewheel = error
	modwheel: 2, // weird...
	modtoggle: 3, // weird...
	modtogglemouse: 4, // weird...
	modtogglewheel: 5, // weird...
	// modtogglemousewheel = error
	normal: 6,
	mouse: 7,
	wheel: 8,
	toggle: 9,
	togglemouse: 10,
	togglewheel: 11, // weird...
	// modtogglemousewheel = error
}
 
