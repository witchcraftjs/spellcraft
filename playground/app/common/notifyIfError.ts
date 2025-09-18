import type { Result } from "@alanscodelog/utils/Result"
import { useNotificationHandler } from "@witchcraft/ui/composables/useNotificationHandler"


export const notifyIfError = <T extends Result<any, Error>>(res: T): T => {
	if (res.isError) {
		void useNotificationHandler().notify({
			message: res.error.message,
			options: ["Ok"],
			timeout: true,
			cancellable: "Ok"
		})
	}
	return res
}
