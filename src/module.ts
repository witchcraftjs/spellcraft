import { crop, indent } from "@alanscodelog/utils"
import {
	addImportsDir,
	addTemplate,
	addTypeTemplate,
	createResolver,
	defineNuxtModule,
	installModule } from "@nuxt/kit"
import { defu } from "defu"


const { resolve } = createResolver(import.meta.url)

declare module "@nuxt/schema" {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	interface PublicRuntimeConfig {
		// eslint-disable-next-line @typescript-eslint/no-empty-object-type
		witchcraftSpellcraft: {}
	}
}

 
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface ModuleOptions {

}

export default defineNuxtModule<ModuleOptions>({
	meta: {
		name: "witchcraftSpellcraft",
		configKey: "witchcraftSpellcraft",
	},
	defaults: {
	},
	async setup(_options, nuxt) {
		nuxt.options.runtimeConfig.public.witchcraftSpellcraft = defu(
			nuxt.options.runtimeConfig.public.witchcraftSpellcraft,
			{
			}
		)
		addTypeTemplate({
			filename: "types/witchcraft-spellcraft.d.ts",

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
				
		nuxt.options.alias["#witchcraft-spellcraft"] = resolve("runtime")
	},
})
