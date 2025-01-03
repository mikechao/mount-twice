<script setup lang="ts">
  provide('layout', 'default')
</script>
<template>
  <div>
    <p>Some default layout content shared across all pages</p>
    <slot />
  </div>
</template>