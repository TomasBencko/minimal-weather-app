<template>
  <div class="BaseIcon"
    :style="{ width: `${size}px`, height: `${size}` }"
  >

  </div>
</template>

<script setup lang="ts">

    defineProps({
      size: { type: Number, default: 24 }
    })

</script>

<style scoped>

</style>