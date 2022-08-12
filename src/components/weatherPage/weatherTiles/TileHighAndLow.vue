<template>
  <div class="TileHighAndLow">
    <p>{{ tempMin }}°C</p>
    <p>{{ tempMax }}°C</p>
  </div>
</template>

<script setup lang="ts">
  import { useWeatherStore } from '@/stores/WeatherStore'

  const WeatherStore = useWeatherStore()
  const tempMin: number = WeatherStore.weatherData.tempMin
  const tempMax: number = WeatherStore.weatherData.tempMax

</script>

<style scoped>

</style>
