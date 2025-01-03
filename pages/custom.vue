<script setup lang="ts">

onMounted(() => {
  console.log('onMounted called')
})

onUpdated(() => {
  console.log('onUpdated called')
})
</script>
<template>
  <p>Custom</p>
  <NuxtLink to="/">To index</NuxtLink>
</template>