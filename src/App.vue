<template>
  HELLO WORLD
  <Suspense>
    <ContentPanel />

    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import ContentPanel from "@/components/ContentPanel.vue"



</script>

<style scoped>
</style>
