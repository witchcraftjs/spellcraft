<template>
<div class="flex flex-row gap-2 items-center flex-wrap">
	<WButton
		aria-label="Export All"
		title="Export All"
		class="flex-1 whitespace-nowrap"
		@click="emit('exportAll', managers)"
	>
		<template #icon>
			<WIcon> <i-fa-solid-file-export/> </WIcon>
		</template>
		Export All
	</WButton>

	<WFileInput
		aria-label="Import"
		title="Import"
		wrapper-class="flex-1 px-2 pl-1 border-[1px] hover:text-accent-600 whitespace-nowrap min-w-[10ch]"
		:formats="['.json']"
		:compact="true"
		@input="importManagers as any"
	>
		<template #icon>
			<WIcon> <i-fa-solid-file-import/> </WIcon>
		</template>
		<template #label>
			Import
		</template>
	</WFileInput>
</div>
</template>


<script setup lang="ts">
import IFaSolidFileExport from "~icons/fa-solid/file-export"
import IFaSolidFileImport from "~icons/fa-solid/file-import"

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
