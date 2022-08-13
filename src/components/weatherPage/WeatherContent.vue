<template>
  <div class="WeatherContent">
    <component class="InfoTile"
      v-for="(tileConfig, index) in tilesConfiguration" :key="index"
      :is="componentList[tileConfig.type] || TileOther" :tileConfig="tileConfig"
    />
  </div>
</template>

<script setup lang="ts">
  import { useConfiguration } from '@/stores/Configuration'
  import type { listOfComponents } from '@/common/types'

  // Import components that will be used here
  import TileWeather from '@/components/weatherPage/weatherTiles/TileWeather.vue'
  import TileTemperature from '@/components/weatherPage/weatherTiles/TileTemperature.vue'
  import TileHighAndLow from '@/components/weatherPage/weatherTiles/TileHighAndLow.vue'
  import TileOther from '@/components/weatherPage/weatherTiles/TileOther.vue'

  const componentList: listOfComponents = {
    weather: TileWeather,
    temperature: TileTemperature,
    highAndLow: TileHighAndLow
  }

  // Load configuration for tiles to be rendered
  const Configuration = useConfiguration()
  const tilesConfiguration = Configuration.tilesConfiguration

</script>

<style lang="scss" scoped>

.WeatherContent {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;

  .InfoTile {
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
}


</style>
