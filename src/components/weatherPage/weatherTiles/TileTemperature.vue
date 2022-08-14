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
    font-size: var(--font-huge);
    letter-spacing: var(--font-spacing-narrow);
    color: var(--color-black);

    span {
      font-weight: 500;
      font-size: var(--font-big);
      color: var(--color-dark-2);
      vertical-align: super;
      top: -6px;
    }
  }
}

</style>
