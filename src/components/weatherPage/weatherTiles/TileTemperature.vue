<template>
  <div class="TileTemperature">
    {{ data.value }}°C
  </div>
</template>

<script setup lang="ts">
  defineProps({
    data: { type: Object, required: true }
  })

</script>

<style scoped>

</style>
