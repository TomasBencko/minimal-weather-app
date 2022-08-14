<template>
  <section class="WeatherPage">
    <WeatherHeader v-if="dataLoaded" />
    <WeatherContent v-if="dataLoaded" />

    <div class="loading" v-else="dataLoaded">Loading...</div>
  </section>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { useWeatherStore } from '@/stores/WeatherStore'
  import { useConfiguration } from '@/stores/Configuration'

  // Components
  import WeatherHeader from '@/components/weatherPage/WeatherHeader.vue'
  import WeatherContent from '@/components/weatherPage/WeatherContent.vue'
  
  // Setup
  const WeatherStore = useWeatherStore()
  const Configuration = useConfiguration()


  // Make the page panel shrink
  Configuration.isPanelExpanded = false


  // Get weather data from OpenWeather API
  let communicationProblems = ref<boolean>(false)
  let dataLoaded = ref<boolean>(false)

  const route = useRoute()
  let location: string = route.params.location
      ? route.params.location.toString()
      : Configuration.defaultLocation

  WeatherStore.locationSelected = location

  onMounted(async () => {
    try {
      await WeatherStore.fetchWeatherAPIData(location)
      
    } catch (error) {
      console.log(error)
      communicationProblems.value = true
    }
    
    dataLoaded.value = true
  })

</script>


<style lang="scss" scoped>

.WeatherPage {
  padding-bottom: 4px;
  
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  .loading {
    flex-grow: 1;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>
