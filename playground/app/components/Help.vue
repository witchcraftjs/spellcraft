<template>
<WPopup
	class="backdrop:bg-neutral-900 backdrop:opacity-50"
	:title="`Help`"
>
	<template #button>
		<WButton
			class="text-center underline text-neutral-700 text-xs hover:cursor-pointer justify-self-center"
			:border="false"
		>
			Help
		</WButton>
	</template>
	<template #description>
		Basics:
		<ul class="list-disc ml-4">
			<li>
				Managers are autosaved to localstorage. They can be cloned/deleted/exported from the dropdown.
			</li>
			<li>
				The tab and escape keys will not register on the keyboard. Tab performs it's default actions, and escape clears the chain. You can press the keys with the mouse or use the recording inputs in the list to register shortcuts with those keys.
			</li>
			<li>
				In the recorder input, NO keys will escape the recording mode. You must hold escape/enter to cancel/accept.
			</li>
		</ul>
	</template>
</WPopup>
</template>

<script setup lang="ts">
import WButton from "@witchcraft/ui/components/WButton"
import WPopup from "@witchcraft/ui/components/WPopup"
</script>
