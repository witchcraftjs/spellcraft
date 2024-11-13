// note the lack of extension
// this is so it works in dev when the module is only stubbed (the file is a ts file, not js yet)
import {
	addTypeTemplate,
	createResolver,
	defineNuxtModule,
	installModule } from "@nuxt/kit"
// import { addTailwindContents, globFiles } from "@witchcraft/nuxt-utils/utils"
// import { unpluginIconViteOptions } from "@witchcraft/ui/build/unpluginIconViteOptions"
import { defu } from "defu"
// import fastGlob from "fast-glob"
// import { type Config as TwConfig } from "tailwindcss"
// import IconsResolver from "unplugin-icons/resolver"
// import Icons from "unplugin-icons/vite"
// import ViteComponents from "unplugin-vue-components/vite"


const { resolve } = createResolver(import.meta.url)
// const componentsInfo = globFiles([
// 	`${resolve("runtime/components")}/**/*.vue`,
// ], [], (filepath, name) => ({ filepath, name }))
//

declare module "@nuxt/schema" {
	interface PublicRuntimeConfig {
		witchcraftShortcutsManager: {}
	}
}

 
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
			filename: "witchcraft-shortcuts-manager.d.ts",

			getContents: () => `
				import { type NavigatorWKeyboard } from "./src/types/general.ts"


				declare global {
					interface Navigator {
						keyboard: NavigatorWKeyboard["keyboard"]
					}
				}
			`,
		})

		// await addComponentsDir({
		// 	path: resolve("runtime/components"),
		// })

		// nuxt.hook("tailwindcss:config" as any, async (config: DeepPartial<TwConfig>) => {
		// 	addTailwindContents(config, [
		// 		resolve("runtime/**/*.vue"),
		// 	])
		// })

		// installs tailwind
		await installModule("@witchcraft/ui/nuxt", (nuxt.options as any).witchcraftUi)

		// addImportsDir(resolve("runtime/composables"))
				
		nuxt.options.alias["#witchcraft-shortcuts-manager"] = resolve("runtime")
	},
})
