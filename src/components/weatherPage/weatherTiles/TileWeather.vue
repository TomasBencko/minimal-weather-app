<template>
  <div class="TileWeather">
    <WeatherIcon class="icon" :weather="weather" />
    <p>{{ weather }}</p>
  </div>
</template>

<script setup lang="ts">
  import { useWeatherStore } from '@/stores/WeatherStore'
  const WeatherStore = useWeatherStore()

  // Components
  import WeatherIcon from '@/components/weatherPage/WeatherIcon.vue'


  // Variables necessary to render the component
  const location = WeatherStore.selectedLocation
  const currentData = WeatherStore.weatherData[location].currentData
  const weather: string = currentData.weather
  
</script>

<style scoped>

.icon {
  height: 30px;
  margin-bottom: 4px;
}

p {
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.05em;
  color: #000000;
}

</style>
