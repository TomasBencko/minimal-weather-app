<template>
  <div class="TileOther">
    <p>{{ data.value }}</p>
    <p>{{ data.desc }}</p>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    data: { type: Object, required: true }
  })

</script>

<style scoped>

</style>
