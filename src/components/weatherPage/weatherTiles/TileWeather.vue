<template>
  <div class="TileWeather">
    <!--  TODO  Icon -->
    <Sunny class="icon" />
    {{ weather }}
  </div>
</template>

<script setup lang="ts">
  import { useWeatherStore } from '@/stores/WeatherStore'

  import Sunny from '@/assets/svg/013-sunny.svg'

  const WeatherStore = useWeatherStore()
  const weather: string = WeatherStore.weatherData.weather
  const weatherIcon: string = WeatherStore.weatherData.weatherIcon
  
</script>

<style scoped>

.icon {
  height: 30px;
  margin-bottom: 4px;
}

</style>
