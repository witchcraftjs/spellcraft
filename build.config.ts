import { defineBuildConfig } from "unbuild"

export default defineBuildConfig({
	entries:
	[
		"src/module.ts",
		...[
			"defaults",
			"helpers",
			"internal",
			"layouts",
			"types",
			"utils",
			"core"
		].map(folder => ({
			builder: "mkdist" as const,
			input: `./src/${folder}`,
			outDir: `./dist/${folder}`,
			ext: "js",
			format: "esm"
		}))
	]
})
