<script setup lang="ts">
  provide('layout', 'custom')
</script>
<template>
  <div>
    <p>This is the custom layout</p>
    <slot />
  </div>
</template>