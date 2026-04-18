<template>
<!-- not sure why im having to do this -->
<ClientOnly>
	<ClientApp/>
</ClientOnly>
</template>

<script setup lang="ts">
import ClientApp from "../components/App.client.vue"
</script>
