export default defineNuxtConfig({
	devtools: { enabled: true },
	compatibilityDate: "2024-09-23",
	ssr: false,
	future: {
		compatibilityVersion: 4 as const
	},
	app: {
		baseURL: process.env.NODE_ENV === "production" ? "/demo" : "/",
	},
	modules: [
		"@witchcraft/ui/nuxt",
		"../src/module"
		// the below also works, just remember to run the update-dep script and uncomment ../src/module above before attempting to use the file: linked module
		// "@witchcraft/spellcraft"
	],
	witchcraftSpellcraft: {
	},
})
