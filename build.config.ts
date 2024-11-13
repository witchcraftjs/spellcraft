// @ts-expect-error works in ide but not cli...
import { defineBuildConfig } from "unbuild"

export default defineBuildConfig({
	entries:
	[
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
			format: "esm",
		}))
	],
})
