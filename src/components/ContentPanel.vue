<template>
  <div>
    CONTENT HERE
    <hr />
    {{ weatherStore.locationData }}
    <hr />
    {{ weatherStore.weatherData }}
    <hr />
    {{ weatherStore.forecastData }}
  </div>
</template>

<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import { useWeatherStore } from '../stores/WeatherStore'

const weatherStore = useWeatherStore()
const locationDefault: string = 'Košice'

let communicationProblems = ref<boolean>(false)

try {
  await weatherStore.fetchWeatherAPIData(locationDefault)
  
} catch (error) {
  console.log(error)
  communicationProblems.value = true
}

console.log('CARRY ON');



</script>

<style scoped>

</style>