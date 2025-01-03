<script setup lang="ts">

onMounted(() => {
  console.log('index onMounted called')
})

onUpdated(() => {
  console.log('index onUpdated called')
})
</script>
<template>
  <p>Index</p>
  <NuxtLink to="/custom">To custom</NuxtLink>
</template>