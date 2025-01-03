<script setup lang="ts">

onMounted(() => {

  console.log('custom onMounted called ')
})

onUpdated(() => {
  console.log('custom onUpdated called')
})

</script>
<template>
  <p>Custom.</p>
  <NuxtLink to="/">To index</NuxtLink>
</template>