import type { NotificationHandler } from "@witchcraft/ui/helpers/NotificationHandler.js"
import type { InjectionKey } from "vue"


export const notificationHandlerSymbol: InjectionKey<NotificationHandler> = Symbol("notificationHandler")

