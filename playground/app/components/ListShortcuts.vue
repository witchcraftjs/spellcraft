<template>
<div class="flex flex-col">
	<div
		:class="`
			border-neutral-600
			px-2
			py-1
			flex
			flex-wrap
			justify-end
			gap-2
			[&>.filter:nth-child(4)]:after:content-['']
			[&>.filter:nth-child(4)]:after:border-r-neutral-400
			[&>.filter:nth-child(4)]:after:border-r-2
		`"
	>
		<div>Filters:</div>
		<div class="flex-1"/>
		<!-- We draw a line after the second filter to delimit the exclusionary from the non-exclusionary filters. -->
		<div
			class="filter flex no-wrap gap-2"
			v-for="action in ObjectKeys(filters).filter(_ => _ !== 'showExactMatches')"
			:key="action"
		>
			<WCheckbox
				class="whitespace-nowrap"
				:label="filterNames[action]"
				:model-value="filters[action]"
				@update:model-value="filters[action] = $event"
			/>
		</div>
	</div>
	<WTable
		:values="tableData"
		:cols="tableCols"
		:col-config="colConfig"
		:item-key="(item: any) => item.id"
		:resizable="{}"
		:border="true"
		:cell-border="true"
		:header="true"
		wrapper-class="flex-1 basis-min-content"
		class="
				border-t-0
				rounded-t-none
				overflow-visible
				[&_.cell]:overflow-visible!
				[&:not(.resizable-cols-setup)]:block
				[&:not(.resizable-cols-setup)_thead]:block
				[&:not(.resizable-cols-setup)_thead_tr]:flex
				[&:not(.resizable-cols-setup)_thead_tr]:flex-nowrap
				[&:not(.resizable-cols-setup)_thead_th:not(.override-initial)]:flex-1
			"
	>
		<template #header-enabled="slotProps">
			<th
				:style="slotProps.style"
				:class="twMerge(
					slotProps.class,
					`
							override-initial
							[table:not(.resizable-cols-setup)_&]:w-[min-content]
						`
				)"
				title="Enabled"
				aria-label="Enabled"
			>
				<WCheckbox
					:disabled="true"
					class="opacity-0"
					aria-hidden
				/>
			</th>
		</template>
		<template #header-actions="slotProps">
			<th
				:class="twMerge(
					slotProps.class,
					`
							override-initial
							[table:not(.resizable-cols-setup)_&]:w-[2rem]
						`
				)"
				:style="slotProps.style"
				title="Add/Remove"
				aria-label="Add/Remove"
			/>
		</template>

		<template #enabled="slotProps">
			<td
				:class="slotProps.class"
				:style="slotProps.style"
			>
				<div class="flex items-center justify-center">
					<WCheckbox
						:model-value="slotProps.item.shortcut.enabled"
						@update:model-value="updateShortcutEnabled(slotProps.item.index, $event)"
					/>
				</div>
			</td>
		</template>

		<template #shortcut="slotProps">
			<td
				:class="slotProps.class"
				:style="slotProps.style"
			>
				<WRecorder
					:border="false"
					:binders="binders"
					:recording-title="`(Hold escape to cancel, hold enter to accept.)`"
					:recording-value="isRecordingKey === slotProps.item.index ? recordingValue : undefined"
					:recording="isRecording && isRecordingKey === slotProps.item.index"
					:model-value="s.stringify(slotProps.item.shortcut.chain, manager)"
					@update:recording="toggleRecording(slotProps.item.index, $event)"
					@recorder:click="toggleRecording(slotProps.item.index, !isRecording)"
					@recorder:blur="toggleRecording(slotProps.item.index, false, { reset: true })"
				/>
			</td>
		</template>

		<template #command="slotProps">
			<td
				:class="slotProps.class"
				:style="slotProps.style"
			>
				<WInputDeprecated
					:wrapper-class="`
							[&_.suggestions]:z-[1000000]
							[.dark_&_.suggestions]:bg-neutral-900!
						`"
					:placeholder="slotProps.item.isNew ? '(None)' : ''"
					:border="false"
					:suggestions="commandsSuggestions"
					:model-value="slotProps.item.isNew ? slotProps.item.shortcut.command ?? '' : slotProps.item.shortcut.command ?? editedCommand"
					title="Press enter to add new command."
					@update:model-value="slotProps.item.isNew ? setReadOnly(newShortcut, 'command', isWhitespace($event) ? undefined : $event) : (editedCommand = $event)"
					@submit="slotProps.item.isNew ? createCommandIfMissing($event) : updateShortcutCommand(slotProps.item.index, $event, true)"
					@blur="!slotProps.item.isNew && blurMaybeEditedCommand(slotProps.item.index)"
				/>
			</td>
		</template>

		<template #condition="slotProps">
			<td
				:class="slotProps.class"
				:style="slotProps.style"
			>
				<!-- @vue-expect-error -->
				<WInputDeprecated
					:wrapper-class="`
							[&_.suggestions]:z-[1000000]
							[.dark_&_.suggestions]:bg-neutral-900!
						`"
					:placeholder="slotProps.item.isNew ? (activeContexts.length > 0 ? activeContexts.join(' && ') : '(Global)') : '(Global)'"
					:border="false"
					:valid="conditionValidity[slotProps.item.index + 1] === true"
					:title="conditionValidity[slotProps.item.index + 1] === true ? '' : conditionValidity[slotProps.item.index + 1]?.message"
					:model-value="slotProps.item.shortcut.condition.text"
					@update:model-value="slotProps.item.isNew && (newShortcut.condition.text = $event)"
					@submit="!slotProps.item.isNew && updateShortcutCondition(slowProps.item.index, $event)"
				/>
			</td>
		</template>

		<template #actions="slotProps">
			<td
				:class="slotProps.class"
				:style="slotProps.style"
			>
				<div class="flex items-center justify-center">
					<WButton
						v-if="slotProps.item.isNew"
						:border="false"
						aria-label="Add Shortcut"
						auto-title-from-aria
						@click="addShortcut"
					>
						<template #icon>
							<WIcon> <i-fa-solid-plus/> </WIcon>
						</template>
					</WButton>
					<WButton
						v-else
						:border="false"
						aria-label="Delete Shortcut"
						auto-title-from-aria
						@click="notifyIfError(managerRemoveShortcut(slotProps.item.shortcut, manager))"
					>
						<template #icon>
							<WIcon> <i-fa-solid-trash/> </WIcon>
						</template>
					</WButton>
				</div>
			</td>
		</template>
	</WTable>
</div>
</template>

<script setup lang="ts">
import { setReadOnly } from "@alanscodelog/utils"
import { isWhitespace } from "@alanscodelog/utils/isWhitespace"
import { keys as ObjectKeys } from "@alanscodelog/utils/keys"
import { Ok, type Result } from "@alanscodelog/utils/Result"
import type { createManagerEventListeners } from "@witchcraft/spellcraft"
import { addCommand, addShortcut as managerAddShortcut, attach, createCommand, createShortcut, detach, removeShortcut as managerRemoveShortcut, setManagerProp, setShortcutProp } from "@witchcraft/spellcraft"
import { equalsShortcut } from "@witchcraft/spellcraft/helpers/equalsShortcut"
import type { Manager, Shortcut } from "@witchcraft/spellcraft/types"
import { cloneChain } from "@witchcraft/spellcraft/utils"
import { twMerge } from "@witchcraft/ui/utils/twMerge"
import { computed, ref, toRaw, toRef } from "vue"

import IFaSolidPlus from "~icons/fa-solid/plus"
import IFaSolidTrash from "~icons/fa-solid/trash"

import { notifyIfError } from "../common/notifyIfError.js"
import { overlayHoldListeners } from "../common/overlayAccessibilityListeners.js"
import { parseShortcutCondition } from "../common/parseShortcutCondition.js"
import { type Filters, useFilterableShortcutsList } from "../composables/useFilterableShortcutsList.js"


const props = defineProps<{
	manager: Manager
	listeners: ReturnType<typeof createManagerEventListeners>
}>()
const manager = toRef(props, "manager")
const commands = computed(() => props.manager.commands)
const chain = computed(() => props.manager.state.chain)
const s = computed(() => props.manager.options.stringifier)

const isRecording = computed(() => props.manager.state.isRecording)
const recordingValue = computed(() => isRecording.value ? s.value.stringify(chain.value, props.manager) : undefined)
const isRecordingKey = ref<number | undefined>(undefined)

const listenersOverlay = computed(() => overlayHoldListeners(props.listeners,
	{
		Enter: {
			onThresholdKeydown: () => stopRecording(isRecordingKey.value!)
		},
		Escape: {
			onThresholdKeydown: () => stopRecording(isRecordingKey.value!, { reset: true })
		}
	},
	(original, e) => {
		e.stopPropagation()
		e.preventDefault()
		original(e)
	},
	1000,
	() => isRecordingKey.value !== undefined
))

const activeContexts = computed(() =>
	Object.keys(props.manager.context.value.isActive)
		.filter(_ => props.manager.context.value.isActive[_])
)


const filterNames: Partial<Filters<string>> = {
	onlyExecutable: "Only Executable",
	onlyEnabled: "Only Enabled",
	showPressable: "Pressable",
	showPressableModOrChords: "Pressable Mods/Chords",
	showUnpressable: "Unpressable"
}

const filters = ref<Filters<boolean>>({
	onlyExecutable: false,
	onlyEnabled: true,
	showPressable: true,
	showPressableModOrChords: true,
	showUnpressable: true,
	showExactMatches: true
})

const filterChain = ref(cloneChain(chain.value))
const filteredShortcuts = useFilterableShortcutsList(manager, filterChain, filters)
const editedCommand = ref("")

// use capture to let the listeners stopPropagation to child listenrs
const attachOptions = Object.fromEntries(ObjectKeys(listenersOverlay.value).map(_ => [
	_,
	{ capture: true, passive: _ === "wheel" }
]))

const binders = {
	bind: () => {
		attach(document, listenersOverlay.value, attachOptions)
	},
	unbind: () => {
		detach(document, listenersOverlay.value, attachOptions)
	}
}

function startRecording(i: number): void {
	if (isRecording.value) return
	filterChain.value = cloneChain(chain.value)
	isRecordingKey.value = i
	setManagerProp(props.manager, "state.chain", []).unwrap()
	setManagerProp(props.manager, "state.isRecording", true).unwrap()
}

function stopRecording(i: number, { reset = false }: { reset?: boolean } = {}): void {
	const c = cloneChain(chain.value)
	if (i === isRecordingKey.value) {
		isRecordingKey.value = undefined
		setManagerProp(props.manager, "state.isRecording", false).unwrap()
		setManagerProp(props.manager, "state.chain", []).unwrap()
		if (!reset) {
			updateShortcutChain(i, c)
		}
		filterChain.value = []
	}
}

function toggleRecording(i: number, val: boolean, { reset = false }: { reset?: boolean } = {}): void {
	if (val) {
		startRecording(i)
	} else {
		stopRecording(i, { reset })
	}
}

// the spread is to remove the readonly type
const newShortcut = ref({ ...createShortcut({ chain: [] }, props.manager).unwrap() })

const tableData = computed(() => {
	const newShortcutItem = {
		id: "new-shortcut",
		isNew: true,
		index: -1,
		shortcut: newShortcut.value
	}

	const shortcuts = filteredShortcuts.value.map((s, i) => ({
		id: shortcutToId(s, props.manager),
		isNew: false,
		index: i,
		shortcut: s
	}))

	return [
		newShortcutItem,
		...shortcuts
	]
})
const tableCols = ["enabled", "shortcut", "command", "condition", "actions"]

const colConfig = {
	enabled: { name: "", resizable: false },
	shortcut: { name: "Shortcut" },
	command: { name: "Command" },
	condition: { name: "Condition" },
	actions: { name: "", resizable: false }
}

const conditionValidity = computed(() => {
	const res = []
	const r = isValidCondition(newShortcut.value)
	res.push(r.isOk ? true : r.error)

	for (const shortcut of filteredShortcuts.value) {
		const r = isValidCondition(shortcut)
		res.push(r.isOk ? true : r.error)
	}
	return res as (true | Error)[]
})

function isValidCondition(shortcut: Shortcut): Result<true, Error> {
	if (shortcut.condition.text === "") return Ok(true)
	const res = parseShortcutCondition(shortcut)
	return res.isOk ? Ok(true) : res
}
function createCommandIfMissing(name: string): void {
	let command = commands.value.entries[name]
	if (!command) {
		command = createCommand(name ?? "")

		if (notifyIfError(addCommand(command, props.manager)).isError) return
	}
}
function resetAutoCondition(changedCondition = false) {
	if (changedCondition) {
		newShortcut.value.condition.text = ""
	}
}
function addShortcut(): void {
	let changedCondition = false
	if (newShortcut.value.condition.text === "" && activeContexts.value.length > 0) {
		changedCondition = true
		newShortcut.value.condition.text = activeContexts.value.join(" && ")
	}
	if (newShortcut.value.command) createCommandIfMissing(newShortcut.value.command)

	const res = managerAddShortcut(newShortcut.value, props.manager)
	notifyIfError(res)

	if (res.isError) { resetAutoCondition(changedCondition); return }

	const resCommandValid = isValidCondition(newShortcut.value)
	notifyIfError(resCommandValid)
	if (resCommandValid.isError) { resetAutoCondition(changedCondition); return }

	const res2 = createShortcut({ chain: [] }, props.manager)
	notifyIfError(res2)
	if (res2.isOk) {
		newShortcut.value = res2.value
	}
}
function updateShortcutChain(i: number, value: string[][]): void {
	if (i === -1) {
		// don't check command or condition yet
		const can = setShortcutProp({
			...newShortcut.value,
			command: undefined,
			condition: {
				text: "",
				type: "condition"
			}
		}, "chain", value, props.manager)
		notifyIfError(can)
		if (can.isOk) {
			setReadOnly(newShortcut.value, "chain", value)
		}
	} else {
		const shortcut = filteredShortcuts.value[i]
		notifyIfError(setShortcutProp(shortcut, "chain", value, props.manager))
	}
}

function updateShortcutEnabled(i: number, val: boolean): void {
	if (i === -1) {
		newShortcut.value.enabled = val
		return
	}
	notifyIfError(setShortcutProp(filteredShortcuts.value[i], "enabled", val, props.manager))
}

function blurMaybeEditedCommand(i: number): void {
	const itemCommand = filteredShortcuts.value[i].command
	if (editedCommand.value !== "" && editedCommand.value !== itemCommand) {
		updateShortcutCommand(i, editedCommand.value)
	}
	editedCommand.value = ""
}

function updateShortcutCommand(i: number, value: string, force = false): void {
	if (value !== "" && force) {
		createCommandIfMissing(value)
	}
	notifyIfError(setShortcutProp(filteredShortcuts.value[i], "command", value, props.manager))
	editedCommand.value = ""
}

function updateShortcutCondition(i: number, value: string): void {
	const shortcut = filteredShortcuts.value[i]
	// we could move into a hook
	const res = parseShortcutCondition({ ...shortcut, condition: { ...shortcut.condition, text: value } })
	notifyIfError(res)
	if (res.isError) return
	const found = props.manager.shortcuts.entries.find(existing => equalsShortcut(existing, shortcut, props.manager))

	notifyIfError(setShortcutProp(found!, "condition", {
		type: "condition",
		text: value,
		ast: toRaw(res.value)
	}, props.manager))
}


const commandsSuggestions = computed(() => Object.values(commands.value.entries).map(_ => _.name))
</script>
