<template>
  <div class="WeatherContent">
    <component class="tile"
      v-for="(tileConfig, index) in tilesConfiguration" :key="index"
      :is="componentList[tileConfig.type] || TileOther" :tileConfig="tileConfig"
      :style="{ '--order': index }"
    />

    <TileForecast class="tile forecast"
      v-for="(itemData, index) in daysForecasted" :key="index"
      :forecastData="itemData"
      :style="{ '--order': tilesConfiguration.length + index }"
    />
  </div>
</template>

<script setup lang="ts">
  import { useConfiguration } from '@/stores/Configuration'
  import { useWeatherStore } from '@/stores/WeatherStore'
  import type { listOfComponents } from '@/common/types'

  /* COMPONENTS */
  import TileWeather from '@/components/weatherPage/weatherTiles/TileWeather.vue'
  import TileTemperature from '@/components/weatherPage/weatherTiles/TileTemperature.vue'
  import TileHighAndLow from '@/components/weatherPage/weatherTiles/TileHighAndLow.vue'
  import TileOther from '@/components/weatherPage/weatherTiles/TileOther.vue'
  import TileForecast from '@/components/weatherPage/weatherTiles/TileForecast.vue'

  const componentList: listOfComponents = {
    weather: TileWeather,
    temperature: TileTemperature,
    highAndLow: TileHighAndLow
  }
  

  // Load configuration for tiles that will be rendered
  const Configuration = useConfiguration()
  const tilesConfiguration = Configuration.tilesConfiguration

  const WeatherStore = useWeatherStore()
  const location = WeatherStore.locationSelected
  const daysForecasted = WeatherStore.weatherData[location].forecastData

</script>

<style lang="scss" scoped>

.WeatherContent {
  display: flex;
  flex-wrap: wrap;
  padding: 15px;

  flex-grow: 1;
  align-content: space-around;
  justify-content: space-around;

  .tile {
    flex: 33%;
    flex-shrink: 0;
    overflow: hidden;
    height: 95px;
    @media (min-height: 900px) { height: 110px; }
    @media (min-height: 1000px) { height: 120px; }
    @media (min-height: 1100px) { height: 130px; }
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .tile.forecast {
    flex: 10%;
    max-width: 6.25rem;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    margin: 0 5px;
  }
}

/* ANIMATIONS */
.tile {
  opacity: 0;
  transform: translateY(-50px);
  animation: dropIn .5s ease-out forwards;
  animation-delay: calc(var(--order) * 100ms)
}

@keyframes dropIn {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

</style>
