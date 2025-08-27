<template>
<div class="
		contexts
		w-full
		flex
		flex-col
		align-center
		justify-center
	"
>
	<div class="flex flex-wrap gap-2 items-start justify-between">
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
				activeContext.length > 1 && `
				after:border-accent-400
				hover:after:border-accent-600
				after:border-dashed
				text-accent-400
				hover:text-accent-600
			`)"
			:disabled="activeContext.length <= 1"
			:border="false"
			aria-label="Clear Active Contexts"
			auto-title-from-aria
			@click="deactivateAll"
		>
			<template #icon> <WIcon> <i-fa-solid-times/> </WIcon> </template>
		</WButton>
		<div class="flex-1 grow-[9000] flex flex-wrap justify-center gap-2 basis-[400px]">
			<div
				:class="twMerge(`
					border
					border-neutral-300
					bg-neutral-100
					rounded-sm
					px-2
					flex
					gap-2
					cursor-pointer
					select-none
					hover:border-accent-500
				`,
					isActive && `border-accent-400 bg-accent-100`
				)"
				tabindex="0"
				:aria-label="'Toggle Context'"
				:title="'Toggle Context'"
				v-for="[name,isActive] in Object.entries(context.isActive)"
				:key="name"
				@click="emit(isActive ? 'deactivate' : 'activate' as any /* wat */, name)"
			>
				<span>{{ name }}</span>
				<WButton
					:border="false"
					:aria-label="context.count[name] > 0 ? `Cannot remove, ${context.count[name]} ${context.count[name] === 1 ? 'shortcut' :'shortcuts'} using this context.` : 'Remove Context'"
					auto-title-from-aria
					class="p-0 disabled:cursor-not-allowed"
					:disabled="context.count[name] > 0"
					@click="emit( 'remove', name )"
				>
					<template #icon> <WIcon> <i-fa-solid-times/> </WIcon> </template>
				</WButton>
			</div>
		</div>
		<div class="flex-1 flex flex-col items-stretch gap-2 ">
			<WInputDeprecated
				class="min-w-[0] w-[20ch]"
				placeholder="Add Context"
				wrapper-class="pr-0"
				:valid="context.isActive[tempValue] === undefined"
				v-model="tempValue"
				@submit="addContext"
				@enter.prevent
			>
				<template #right>
					<WButton
						aria-label="Add Context"
						auto-title-from-aria
						:border="false"
						class="whitespace-nowrap p-0"
						:disabled="isBlank(tempValue)"
						@click="addContext"
					>
						<template #icon> <WIcon> <i-fa-solid-plus/> </WIcon> </template>
					</WButton>
				</template>
			</WInputDeprecated>
		</div>
	</div>
</div>
</template>

<script setup lang="ts">
import { isBlank } from "@alanscodelog/utils/isBlank"
import { useNotificationHandler } from "@witchcraft/ui/composables/useNotificationHandler"
import { computed, ref } from "vue"

import type { ContextInfo } from "#witchcraft-spellcraft/types.js"
import IFaSolidPlus from "~icons/fa-solid/plus"
import IFaSolidTimes from "~icons/fa-solid/times"


const props = defineProps<{
	context: ContextInfo
}>()
const emit = defineEmits<{
	add: [val: string]
	activate: [val:string]
	deactivate: [val:string]
	remove: [val:string]
}>()

const notificationHandler = useNotificationHandler()
const tempValue = ref("")
const addContext = (): void => {
	if (!isBlank(tempValue.value)) {
		emit("add", tempValue.value)
		tempValue.value = ""
	} else {
		void notificationHandler?.notify({
			message: "Context cannot be empty value.",
		})
	}
}

const activeContext = computed(() => [...Object.entries(props.context.isActive)]
	.filter(([_, isActive]) => isActive)
	.map(([context]) => context),
)

const deactivateAll = (): void => {
	for (const context of activeContext.value) {
		emit("deactivate", context)
	}
}

</script>

