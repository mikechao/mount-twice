<script setup lang="ts">
const layout = inject('layout')

onMounted(() => {
  console.log(`custom onMounted called with layout ${layout}`)
})

onUpdated(() => {
  console.log('custom onUpdated called')
})

</script>
<template>
  <p>Custom.</p>
  <NuxtLink to="/">To index</NuxtLink>
</template>