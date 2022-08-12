<template>
  <div class="TileWeather">
    {{ data.desc }}
  </div>
</template>

<script setup lang="ts">
  defineProps({
    data: { type: Object, required: true }
  })


  // const props = defineProps<{
  //   data: dataObject
  // }>()
  // interface dataObject {
  //   desc: string,
  //   icon: string
  // }
  
</script>

<style scoped>

</style>
