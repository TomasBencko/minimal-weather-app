<template>
  <section class="WeatherPage">
    <WeatherHeader />
    <WeatherContent />
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useWeatherStore } from '@/stores/WeatherStore'

  // Components
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

  console.log('DATA HAS BEEN LOADED')

</script>


<style lang="scss" scoped>

.WeatherPage {
  padding-bottom: 4px;
  
  flex-grow: 1;

  display: flex;
  flex-direction: column;
}

</style>
