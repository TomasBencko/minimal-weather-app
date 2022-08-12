<template>
  <div class="TileWeather">
    <!--  TODO  Icon -->
    {{ weather }}
  </div>
</template>

<script setup lang="ts">
  import { useWeatherStore } from '@/stores/WeatherStore'

  const WeatherStore = useWeatherStore()
  const weather: string = WeatherStore.weatherData.weather
  const weatherIcon: string = WeatherStore.weatherData.weatherIcon
  
</script>

<style scoped>

</style>
