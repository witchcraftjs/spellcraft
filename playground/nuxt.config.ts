import pkg from "../package.json" with { type: "json" }

export default defineNuxtConfig({
	modules: [
		"@witchcraft/ui/nuxt",
		"../src/module"
		// the below also works, just remember to run the update-dep script and uncomment ../src/module above before attempting to use the file: linked module
		// "@witchcraft/spellcraft"
	],
	devtools: { enabled: true },
	app: {
		baseURL: process.env.CI
			? `/${pkg.name.slice(pkg.name.indexOf("/") + 1)}/demo`
			: "/"
	},
	future: {
		compatibilityVersion: 4 as const
	},
	compatibilityDate: "2024-09-23",
	witchcraftSpellcraft: {
	}
})
