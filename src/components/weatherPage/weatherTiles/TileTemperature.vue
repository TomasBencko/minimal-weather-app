<template>
  <div class="TileTemperature">
    {{ temp }}°C
  </div>
</template>

<script setup lang="ts">
  import { useWeatherStore } from '@/stores/WeatherStore'

  const WeatherStore = useWeatherStore()
  const temp: number = WeatherStore.weatherData.temp

</script>

<style scoped>

</style>
