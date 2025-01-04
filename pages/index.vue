<script setup lang="ts">
const layout = useState('layout')

onMounted(() => {
  console.log(`index onMounted called with layout ${layout.value}`)
})

onUpdated(() => {
  console.log('index onUpdated called')
})
</script>
<template>
  <p>Index</p>
  <NuxtLink to="/custom">To custom</NuxtLink>
</template>