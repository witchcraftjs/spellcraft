<template>
<div class="flex flex-row gap-2 items-center flex-wrap">
	<WButton
		aria-label="Export All"
		title="Export All"
		class="flex-1 whitespace-nowrap py-px"
		@click="emit('exportAll', managers)"
	>
		<template #icon>
			<WIcon> <IconExport/> </WIcon>
		</template>
		Export All
	</WButton>

	<WFileInput
		:wrapper-attrs="{
			class: `min-w-[10ch] `
		}"

		:formats="['.json']"
		:compact="true"
		@input="importManagers as any"
	>
		<template #icon>
			<WIcon> <IconImport/> </WIcon>
		</template>
		<template #label>
			Import
		</template>
	</WFileInput>
</div>
</template>


<script setup lang="ts">
import WButton from "@witchcraft/ui/components/WButton"
import WFileInput from "@witchcraft/ui/components/WFileInput"
import WIcon from "@witchcraft/ui/components/WIcon"

import IconExport from "~icons/lucide/download"
import IconImport from "~icons/lucide/upload"

defineProps<{
	managers: string[]
}>()

const emit = defineEmits<{
	exportAll: [val: string[]]
	import: [val: string]
}>()

async function importManagers(files: File[]) {
	const content = await files[0].text()
	emit("import", content)
}
</script>
