<template>
  <section class="WeatherPage">
    <WeatherHeader />
    <WeatherContent />
    <!--  TODO  WeatherForecast -->
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useWeatherStore } from '@/stores/WeatherStore'

  import WeatherHeader from '@/components/weatherPage/WeatherHeader.vue'
  import WeatherContent from '@/components/weatherPage/WeatherContent.vue'


  // Get weather data from OpenWeather API
  const WeatherStore = useWeatherStore()
  let communicationProblems = ref<boolean>(false)

  try {
    await WeatherStore.fetchWeatherAPIData()
    
  } catch (error) {
    console.log(error)
    communicationProblems.value = true
  }

  console.log('CARRY ON')

</script>

<style scoped></style>
