<script setup lang="ts">
const layout = useState('layout')

onMounted(() => {
  console.log(`custom onMounted called with layout ${layout.value}`)
})

onActivated(() => {
  console.log(`custom onActivated called with layout ${layout.value}`)
})

onUpdated(() => {
  console.log('custom onUpdated called')
})

</script>
<template>
  <p>Custom.</p>
  <NuxtLink to="/">To index</NuxtLink>
</template>