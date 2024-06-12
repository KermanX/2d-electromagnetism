<script setup lang="ts">
defineProps(['caption'])
</script>

<template>
  <div relative text-center>
    <slot />
    <div mt--4 ml-8>
      <slot name="caption">{{ caption }}</slot>
    </div>
  </div>
</template>

<style scoped>
:deep(img) {
  margin: 0 auto;
  width: 100%;
}
</style>
