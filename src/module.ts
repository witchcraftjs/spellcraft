import {
	addImportsDir,
	addTypeTemplate,
	createResolver,
	defineNuxtModule,
	installModule } from "@nuxt/kit"
import { defu } from "defu"


const { resolve } = createResolver(import.meta.url)
// const componentsInfo = globFiles([
// 	`${resolve("runtime/components")}/**/*.vue`,
// ], [], (filepath, name) => ({ filepath, name }))
//

declare module "@nuxt/schema" {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	interface PublicRuntimeConfig {
		// eslint-disable-next-line @typescript-eslint/no-empty-object-type
		witchcraftShortcutsManager: {}
	}
}

 
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface ModuleOptions {

}

export default defineNuxtModule<ModuleOptions>({
	meta: {
		name: "witchcraftShortcutsManager",
		configKey: "witchcraftShortcutsManager",
	},
	defaults: {
	},
	async setup(_options, nuxt) {
		nuxt.options.runtimeConfig.public.witchcraftShortcutsManager = defu(
			nuxt.options.runtimeConfig.public.witchcraftShortcutsManager,
			{
			}
		)
		addTypeTemplate({
			filename: "types/witchcraft-shortcuts-manager.d.ts",

			getContents: () => `
				import { type NavigatorWKeyboard } from "./src/types/general.ts"


				declare global {
					interface Navigator {
						keyboard: NavigatorWKeyboard["keyboard"]
					}
				}
			`,
		})

		await installModule("@witchcraft/ui/nuxt", (nuxt.options as any).witchcraftUi)

		addImportsDir(resolve("runtime/composables"))
		addImportsDir(resolve("runtime/utils"))
				
		nuxt.options.alias["#witchcraft-shortcuts-manager"] = resolve("runtime")
	},
})
