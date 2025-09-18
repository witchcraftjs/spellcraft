import { TypedError } from "@alanscodelog/utils"

import type { ErrorInfo, ShortcutError, TypeError } from "../types/index.js"


/**
 * Creates a known error that extends the base Error with some extra information.
 * All the variables used to create the error message are stored in it's info property so you can easily craft your own error messages to show to users.
 */
export class KnownError<
	T extends ShortcutError | TypeError = ShortcutError | TypeError
	// TInfo extends ErrorInfo<T> = ErrorInfo<T>,
> extends TypedError<T, ErrorInfo<T>> {}
