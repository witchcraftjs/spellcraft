<template>
<div
	class="
		contexts
		w-full
		flex
		flex-col
		items-center
		justify-center
		gap-2
	"
>
	<div class="grow-1 flex flex-wrap justify-center gap-2">
		<div
			:class="twMerge(`
				border
				border-neutral-300
				bg-neutral-100
				dark:border-neutral-700
				dark:bg-neutral-800
				rounded-sm
				px-2
				flex
				gap-2
				cursor-pointer
				select-none
				hover:border-accent-500
				items-center
			`,
				isActive && `border-accent-400 bg-accent-100`
			)"
			tabindex="0"
			:aria-label="'Toggle Context'"
			:title="'Toggle Context'"
			v-for="[name, isActive] in Object.entries(context.isActive)"
			:key="name"
			@click="emit(isActive ? 'deactivate' : 'activate' as any /* wat */, name)"
		>
			<div>{{ name }}</div>
			<WButton
				:border="false"
				:aria-label="context.count[name] > 0 ? `Cannot remove, ${context.count[name]} ${context.count[name] === 1 ? 'shortcut' :'shortcuts'} using this context.` : 'Remove Context'"
				class="p-0 disabled:cursor-not-allowed"
				:disabled="context.count[name] > 0"
				@click="emit('remove', name)"
			>
				<template #icon>
					<WIcon> <IconRemove/> </WIcon>
				</template>
			</WButton>
		</div>
		<WTooltip>
			<WButton
				:class="twMerge(`
				flex
				after:inset-0
				after:border-2
				after:border-transparent
				after:rounded-sm
				relative
				after:absolute
				disabled:text-transparent
			`,
					activeContext.length <= 1 && `hidden`,
					activeContext.length > 1 && `
				after:border-accent-400
				hover:after:border-accent-600
				after:border-dashed
				text-accent-400
				hover:text-accent-600
			`
				)"
				:disabled="activeContext.length <= 1"
				:border="false"
				aria-label="Clear Active Contexts"
				@click="deactivateAll"
			>
				<template #icon>
					<WIcon> <IconRemove/> </WIcon>
				</template>
			</WButton>
			<template #content>
				Deselect All
			</template>
		</WToolTip>
	</div>
	<div class="flex-1 flex relative">
		<WSimpleInput
			placeholder="Add Context"
			class="flex-1 min-w-[0] w-[20ch] pr-[1.5rem]"
			:valid="context.isActive[tempValue] === undefined"
			aria-label="Add Context Input"
			v-model="tempValue"
			@keydown.enter="addContext"
		/>
		<WButton
			aria-label="Add Context"
			:border="false"
			class="whitespace-nowrap absolute right-0 top-0 bottom-0 p-0a"
			:disabled="isBlank(tempValue)"
			@click="addContext"
		>
			<template #icon>
				<WIcon> <IconPlus/> </WIcon>
			</template>
		</WButton>
	</div>
</div>
</template>

<script setup lang="ts">
import { isBlank } from "@alanscodelog/utils/isBlank"
import WButton from "@witchcraft/ui/components/WButton"
import WIcon from "@witchcraft/ui/components/WIcon"
import WSimpleInput from "@witchcraft/ui/components/WSimpleInput"
import WTooltip from "@witchcraft/ui/components/WTooltip"
import { useNotificationHandler } from "@witchcraft/ui/composables/useNotificationHandler"
import { computed, ref } from "vue"

import type { ContextInfo } from "#witchcraft-spellcraft/types.js"
import IconPlus from "~icons/lucide/plus"
import IconRemove from "~icons/lucide/x"


const props = defineProps<{
	context: ContextInfo
}>()
const emit = defineEmits<{
	add: [val: string]
	activate: [val: string]
	deactivate: [val: string]
	remove: [val: string]
}>()

const notificationHandler = useNotificationHandler()
const tempValue = ref("")
const addContext = (): void => {
	if (props.context.isActive[tempValue.value] !== undefined) {
		void notificationHandler?.notify({
			message: "Context already exists."
		})
		return
	}
	if (!isBlank(tempValue.value)) {
		emit("add", tempValue.value)
		tempValue.value = ""
	} else {
		void notificationHandler?.notify({
			message: "Context cannot be empty value."
		})
	}
}

const activeContext = computed(() => [...Object.entries(props.context.isActive)]
	.filter(([_, isActive]) => isActive)
	.map(([context]) => context)
)

const deactivateAll = (): void => {
	for (const context of activeContext.value) {
		emit("deactivate", context)
	}
}
</script>

