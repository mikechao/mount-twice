<script setup lang="ts">
const route = useRoute()
const layout = computed(() => {
  const path = route.path
  if (path.endsWith('/custom')) {
    return 'custom'
  } else {
    return 'default'
  }
})
</script>
<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>
