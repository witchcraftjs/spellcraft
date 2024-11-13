export default defineNuxtConfig({
	devtools: { enabled: true },
	compatibilityDate: "2024-09-23",
	ssr: false,
	future: {
		compatibilityVersion: 4 as const
	},
	app: {
		baseURL: "/demo",
	},
	modules: [
		"@witchcraft/ui",
		"../src/module"
		// or "@witchcraft/shortcuts-manager"// either work
	],
	witchcraftShortcutsManager: {
	},
})
