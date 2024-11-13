<template>
<div class="
		manager-picker
		w-full
		flex
		flex-row
		items-end
		gap-2
	"
>
	<WInput
		:label="`Switch/Add Manager Set (Currently Active: ${activeManager})`"
		class="min-w-[0] w-[20ch]"
		placeholder="Select/Add Manager"
		wrapper-class="pr-0"
		:suggestions="managers"
		:suggestions-filter="(_:any, items:any[]) => items"
		:restrict-to-suggestions="false"
		v-model="tempValue"
		v-extract-root-el="(_:any)=> el = _"
		@submit="handleSubmit"
		@unfocus="onUnfocus"
	>
		<template #suggestion-item="slotProps">
			<div
				class="flex gap-6 justify-between"
			>
				<div
					class="flex-1"
					aria-label="Activate"
					title="Activate"
					@mousedown.prevent
					@click.prevent="emit('activate',slotProps.item); blurInputComp()"
				>
					{{ slotProps.item }}
				</div>
				<WButton
					aria-label="Export"
					title="Export"
					class="whitespace-nowrap p-0 text-neutral-800"
					:border="false"
					@mousedown.prevent
					@click.prevent="$event.stopPropagation();exportItem(slotProps.item)"
				>
					<template #icon> <WIcon> <i-fa-solid-file-export/> </WIcon> </template>
				</WButton>
				<WButton
					aria-label="Duplicate"
					title="Duplicate"
					class="whitespace-nowrap p-0 text-neutral-800"
					:border="false"
					@mousedown.prevent
					@click.prevent="duplicateManager(slotProps.item)"
				>
					<template #icon> <WIcon> <i-fa-solid-clone/> </WIcon> </template>
				</WButton>
				<WButton
					aria-label="Remove"
					title="Remove"
					class="whitespace-nowrap p-0 text-neutral-800"
					:border="false"
					@mousedown.prevent
					@click.prevent="$event.stopPropagation();emit('remove',slotProps.item)"
				>
					<template #icon> <WIcon> <i-fa-solid-trash/> </WIcon> </template>
				</WButton>
			</div>
		</template>
		<template #right>
			<div
				v-if="tempValue === activeManager"
				class="flex gap-6 justify-between ml-4"
			>
				<WButton
					aria-label="Export"
					title="Export"
					class="whitespace-nowrap p-0 text-neutral-800"
					:border="false"
					@mouseup="emit('export', activeManager); blurInputComp()"
				>
					<template #icon> <WIcon> <i-fa-solid-file-export/> </WIcon> </template>
				</WButton>
				<WButton
					aria-label="Duplicate"
					title="Duplicate"
					class="whitespace-nowrap p-0 text-neutral-800"
					:border="false"
					@mouseup="duplicateManager(activeManager)"
				>
					<template #icon> <WIcon> <i-fa-solid-clone/> </WIcon> </template>
				</WButton>
				<WButton
					aria-label="Remove"
					title="Remove"
					class="whitespace-nowrap p-0 text-neutral-800"
					:border="false"
					@mouseup="emit('remove', activeManager)"
				>
					<template #icon> <WIcon> <i-fa-solid-trash/> </WIcon> </template>
				</WButton>
			</div>
			<!-- Can't get auto-title-from-aria working in slot, weird. -->
			<WButton
				v-if="canRename"
				aria-label="Rename"
				title="Rename"
				class="whitespace-nowrap p-0"
				:border="false"
				:disabled="!canRename"
				@click="emit('rename', tempValue)"
			>
				<template #icon> <WIcon> <i-fa-solid-check/> </WIcon> </template>
				Rename
			</WButton>
			<WButton
				v-if="canAdd"
				aria-label="Add New Manager"
				title="Add New Manager"
				:border="false"
				class="whitespace-nowrap p-0"
				@click="addManager(tempValue)"
			>
				<template #icon> <WIcon> <i-fa-solid-plus/> </WIcon> </template>
				Add New
			</WButton>
		</template>
	</WInput>
</div>
</template>

<script setup lang="ts">
import { isBlank } from "@alanscodelog/utils/isBlank.js"
import { vExtractRootEl } from "@witchcraft/ui/directives/vExtractRootEl.js"
import { computed, inject, ref, toRef, watch, watchEffect } from "vue"

import { notificationHandlerSymbol } from "../injectionSymbols.js"


const props = defineProps<{
	managers: string[]
	activeManager: string
	canSave: boolean
}>()
const el = ref<HTMLElement | null>(null)
const activeManager = toRef(props, "activeManager")

const emit = defineEmits<{
	add: [val: string]
	activate: [val:string]
	remove: [val:string]
	rename: [val:string]
	export: [val:string]
	duplicate: [{ oldName: string, newName: string }]
}>()

const notificationHandler = inject(notificationHandlerSymbol)
const tempValue = ref(props.activeManager)

watch(activeManager, newVal => {
	tempValue.value = newVal
}, { immediate: true })


const isValidNewName = computed(() =>
	!isBlank(tempValue.value)
	&& !props.managers.includes(tempValue.value),
)

const isSameName = computed(() =>
	tempValue.value === props.activeManager,
)

const canAdd = computed(() =>
	!isBlank(tempValue.value)
	&& !props.managers.includes(tempValue.value),
)
const canRename = computed(() => isValidNewName.value && !isSameName.value)
function handleSubmit(val: string) {
	if (props.managers.includes(val)) {
		emit("activate", val)
		// tempValue.value = val
	} else {
		addManager(val)
	}
}

function addManager(name: string) {
	if (!isBlank(name) && !props.managers.includes(name)) {
		emit("add", name)
	} else {
		void notificationHandler?.notify({
			message: "Manager name cannot be empty value.",
		})
	}
}
function duplicateManager(name: string) {
	let i = 0
	const baseName = name.replace(/(.*?)(#([0-9]+))?$/, `$1`)
	let newName = `${baseName}#${i}`
	while (props.managers.includes(newName)) {
		i++
		newName = `${baseName}#${i}`
	}
	emit("duplicate", { oldName: name, newName })
	blurInputComp()
}
function exportItem(name: string) {
	emit("export", name)
	// tempValue.value = props.activeManager
}

function onUnfocus() {
	if (isBlank(tempValue.value)) {
		tempValue.value = props.activeManager
	}
}
function blurInputComp() {
	el.value?.querySelector("input")?.blur()
}


</script>

