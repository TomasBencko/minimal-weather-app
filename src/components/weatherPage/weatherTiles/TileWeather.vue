<template>
  <div class="TileWeather">
    <WeatherIcon class="icon" :weather="weather" />
    <p>{{ weather }}</p>
  </div>
</template>

<script setup lang="ts">
  import { useWeatherStore } from '@/stores/WeatherStore'

  /* COMPONENTS */
  import WeatherIcon from '@/components/weatherPage/WeatherIcon.vue'

  /* SETUP */
  const WeatherStore = useWeatherStore()


  /* VARIABLES */
  const location = WeatherStore.locationSelected
  const currentData = WeatherStore.weatherData[location].currentData
  const weather: string = currentData.weather
  
</script>

<style lang="scss" scoped>

.icon {
  height: 1.875rem; // 30px
  margin-bottom: 4px;
}

p {
  font-weight: 500;
  font-size: var(--font-medium);
  letter-spacing: var(--font-spacing-narrow);
  color: var(--color-black);
}

</style>
