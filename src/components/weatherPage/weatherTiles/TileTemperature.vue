<template>
  <div class="TileTemperature">
    <p>{{ temp }}<span>°C</span></p>
  </div>
</template>

<script setup lang="ts">
  import { useWeatherStore } from '@/stores/WeatherStore'

  // Setup
  const WeatherStore = useWeatherStore()


  // Variables necessary to render the component
  const location = WeatherStore.locationSelected
  const currentData = WeatherStore.weatherData[location].currentData
  const temp: number = Math.round(currentData.temp)


</script>

<style lang="scss" scoped>

.TileTemperature {

  p {
    font-weight: 300;
    font-size: 64px;
    letter-spacing: -0.05em;
    color: #000000;

    span {
      font-weight: 500;
      font-size: 24px;
      letter-spacing: 0;
      color: #666666;
      vertical-align: super;
      top: -6px;
    }
  }
}

</style>
