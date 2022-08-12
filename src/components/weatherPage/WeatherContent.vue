<template>
  <div class="WeatherContent">
    <component class="InfoTile"
      v-for="(tile, index) in tilesConfiguration" :key="index"
      :is="tile.component" :data="tile.data"
    />
  </div>
</template>

<script setup lang="ts">

  defineProps({
    tilesConfiguration: { type: Object, required: true }
  })

</script>

<style scoped>

.WeatherContent {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
}

.WeatherContent .InfoTile {
  /* border: 1px solid gray; */
  flex: 33%;
  flex-shrink: 0;
  overflow: hidden;
  padding: 20px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* flex: calc(33% - 20px) 0 0;
  background-color: aliceblue;
  margin: 10px; */
}

</style>