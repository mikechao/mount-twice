<script setup lang="ts">

onMounted(() => {
  console.log('onMounted called')
})

onUpdated(() => {
  console.log('onUpdated called')
})
</script>
<template>
  <p>Index</p>
  <NuxtLink to="/custom">To custom</NuxtLink>
</template>