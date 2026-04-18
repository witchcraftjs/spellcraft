<template>
<div
	class="
		manager-picker
		w-full
		flex
		flex-row
		items-end
		gap-2
	"
>
	<label class="flex flex-col gap-1">
		<div class="text-sm">
			<span class="font-bold">Active Manager:</span> {{ activeManager }}
		</div>

		<WCombobox
			:input-props="{
				placeholder: 'Select/Add Manager',
				['aria-label']: `Switch/Add Manager Set (Currently Active: ${activeManager})`,
				onBlur: onUnfocus,
				class: 'min-w-[0] w-[20ch]'
			}"
			:suggestions="managers"
			:restrict-to-suggestions="false"
			v-model="tempValue"
			@save="handleSubmit"
		>
			<template #suggestion="slotProps">
				<div
					class="flex gap-2 justify-between w-full mr-5"
				>
					<div
						class="flex-1"
						aria-label="Activate"
						title="Activate"
						@mousedown.prevent
						@click.prevent="emit('activate', slotProps.suggestion); blurInputComp()"
					>
						{{ slotProps.suggestionText }}
					</div>
					<WButton
						aria-label="Export"
						title="Export"
						class="whitespace-nowrap p-0 text-neutral-800"
						:border="false"
						@mousedown.prevent
						@click.prevent="$event.stopPropagation();exportItem(slotProps.suggestion)"
					>
						<template #icon>
							<WIcon> <IconExport/> </WIcon>
						</template>
					</WButton>
					<WButton
						aria-label="Duplicate"
						title="Duplicate"
						class="whitespace-nowrap p-0 text-neutral-800"
						:border="false"
						@mousedown.prevent
						@click.prevent="duplicateManager(slotProps.suggestion)"
					>
						<template #icon>
							<WIcon> <IconClone/> </WIcon>
						</template>
					</WButton>
					<WButton
						aria-label="Remove"
						title="Remove"
						class="whitespace-nowrap p-0 text-neutral-800"
						:border="false"
						@mousedown.prevent
						@click.prevent="$event.stopPropagation();emit('remove', slotProps.suggestion)"
					>
						<template #icon>
							<WIcon> <IconTrash/> </WIcon>
						</template>
					</WButton>
				</div>
			</template>
			<template #right>
				<div
					v-if="tempValue === activeManager"
					class="flex gap-2 justify-between ml-4"
				>
					<WButton
						aria-label="Export"
						title="Export"
						class="whitespace-nowrap p-0 text-neutral-800"
						:border="false"
						@mouseup="emit('export', activeManager); blurInputComp()"
					>
						<template #icon>
							<WIcon> <IconExport/> </WIcon>
						</template>
					</WButton>
					<WButton
						aria-label="Duplicate"
						title="Duplicate"
						class="whitespace-nowrap p-0 text-neutral-800"
						:border="false"
						@mouseup="duplicateManager(activeManager)"
					>
						<template #icon>
							<WIcon> <IconClone/> </WIcon>
						</template>
					</WButton>
					<WButton
						aria-label="Remove"
						title="Remove"
						class="whitespace-nowrap p-0 text-neutral-800"
						:border="false"
						@mouseup="emit('remove', activeManager)"
					>
						<template #icon>
							<WIcon> <IconTrash/> </WIcon>
						</template>
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
					<template #icon>
						<WIcon> <IconCheck/> </WIcon>
					</template>
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
					<template #icon>
						<WIcon> <IconAdd/> </WIcon>
					</template>
					Add New
				</WButton>
			</template>
		</WCombobox>
	</label>
</div>
</template>

<script setup lang="ts">
import { isBlank } from "@alanscodelog/utils/isBlank"
import WButton from "@witchcraft/ui/components/WButton"
import WCombobox from "@witchcraft/ui/components/WCombobox"
import WIcon from "@witchcraft/ui/components/WIcon"
import { useNotificationHandler } from "@witchcraft/ui/composables/useNotificationHandler"
import { computed, ref, toRef, watch } from "vue"

import IconCheck from "~icons/lucide/check"
import IconClone from "~icons/lucide/copy"
import IconAdd from "~icons/lucide/plus"
import IconExport from "~icons/lucide/square-arrow-right-exit"
import IconTrash from "~icons/lucide/trash"

const props = defineProps<{
	managers: string[]
	activeManager: string
	canSave: boolean
}>()
const el = ref<HTMLElement | null>(null)
const activeManager = toRef(props, "activeManager")

const emit = defineEmits<{
	add: [val: string]
	activate: [val: string]
	remove: [val: string]
	rename: [val: string]
	export: [val: string]
	duplicate: [{ oldName: string, newName: string }]
}>()

const notificationHandler = useNotificationHandler()
const tempValue = ref(props.activeManager)

watch(activeManager, newVal => {
	tempValue.value = newVal
}, { immediate: true })


const isValidNewName = computed(() =>
	!isBlank(tempValue.value)
	&& !props.managers.includes(tempValue.value)
)

const isSameName = computed(() =>
	tempValue.value === props.activeManager
)

const canAdd = computed(() =>
	!isBlank(tempValue.value)
	&& !props.managers.includes(tempValue.value)
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
			message: "Manager name cannot be empty value."
		})
	}
}
function duplicateManager(name: string) {
	let i = 0
	const baseName = name.replace(/(.*?)(#(\d+))?$/, `$1`)
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

