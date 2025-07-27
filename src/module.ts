import {
	addImportsDir,
	addTypeTemplate,
	createResolver,
	defineNuxtModule,
	installModule,
} from "@nuxt/kit"


const { resolve } = createResolver(import.meta.url)

declare module "@nuxt/schema" {
	interface PublicRuntimeConfig {
		// eslint-disable-next-line @typescript-eslint/no-empty-object-type
		witchcraftSpellcraft: {}
	}
}

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
		// nuxt.options.runtimeConfig.public.witchcraftSpellcraft = defu(
		// 	nuxt.options.runtimeConfig.public.witchcraftSpellcraft,
		// 	{
		// 	}
		// )
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
