<template>
  <div class="TileHighAndLow">
    <p>{{ data.high }}°C</p>
    <p>{{ data.low }}°C</p>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    data: { type: Object, required: true }
  })

</script>

<style scoped>

</style>
