<template>
  <section class="WeatherPage">
    <WeatherHeader :locationData="weatherStore.locationData" />
    <WeatherContent :tilesConfiguration="tilesConfiguration" />
    <!--  TODO  WeatherForecast -->
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useWeatherStore } from '@/stores/WeatherStore'
  import TileWeather from '@/components/weatherPage/weatherTiles/TileWeather.vue'
  import TileTemperature from '@/components/weatherPage/weatherTiles/TileTemperature.vue'
  import TileHighAndLow from '@/components/weatherPage/weatherTiles/TileHighAndLow.vue'
  import TileOther from '@/components/weatherPage/weatherTiles/TileOther.vue'
  import WeatherHeader from '@/components/weatherPage/WeatherHeader.vue'
  import WeatherContent from '@/components/weatherPage/WeatherContent.vue'

  //  TODO  Move this to Configuration.ts without values
  // & Get values in individual components from WeatherStore
  const tilesConfiguration = [
    {
      component: TileWeather,
      data: { desc: 'Sunny', icon: 'sunny' }
    },
    {
      component: TileTemperature,
      data: { value: 33 }
    },
    {
      component: TileHighAndLow,
      data: { high: 35, low: 27 }
    },
    {
      component: TileOther,
      data: { desc: 'Humidity', icon: 'humidity', value: 49 }
    },
    {
      component: TileOther,
      data: { desc: 'Pressure', icon: 'humidity', value: 1007 }
    },
    {
      component: TileOther,
      data: { desc: 'Wind', icon: 'humidity', value: 23 }
    },
    {
      component: TileOther,
      data: { desc: 'Sunrise', icon: 'humidity', value: 1660188130 }
    },
    {
      component: TileOther,
      data: { desc: 'Sunset', icon: 'humidity', value: 1660240707 }
    },
    {
      component: TileOther,
      data: { desc: 'Daytime', icon: 'humidity', value: 52577 }
    }
  ]




  // Get weather data from OpenWeather API
  const weatherStore = useWeatherStore()
  let communicationProblems = ref<boolean>(false)

  try {
    await weatherStore.fetchWeatherAPIData()
    
  } catch (error) {
    console.log(error)
    communicationProblems.value = true
  }

  console.log('CARRY ON');


</script>

<style scoped>



</style>
