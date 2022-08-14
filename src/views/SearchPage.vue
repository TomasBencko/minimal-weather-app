<template>
  <section class="SearchPage">
    <h1>Location</h1>
    <input type="text" name="search" id="search" placeholder="Search city...">
    <div class="results">
      <RouterLink to="/"
        v-for="(location, index) in Configuration.locationList" :key="index"
      >
        <span class="location">{{ location }}</span>
        <span class="temperature">25°C</span>
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useWeatherStore } from '@/stores/WeatherStore'
  import { useConfiguration } from '@/stores/Configuration'
  const WeatherStore = useWeatherStore()
  const Configuration = useConfiguration()

  // Components
  import { RouterLink } from 'vue-router'


  // Make the page panel expanded
  Configuration.isPanelExpanded = true



  const listOfLocations = Configuration.locationList
  let filteredList //  TODO 


  // Get weather data from OpenWeather API
  let communicationProblems = ref<boolean>(false)
  let dataLoaded = ref<boolean>(false)

  // onMounted(async () => {
  //   try {
  //     listOfLocations.forEach(async (location) => {
  //       await WeatherStore.fetchWeatherAPIData(location)
  //     })
      
  //   } catch (error) {
  //     console.log(error)
  //     communicationProblems.value = true
  //   }

  //   dataLoaded.value = true
  //   console.log('DATA HAS BEEN LOADED')
  // })

</script>


<style lang="scss" scoped>

.SearchPage {
  padding: 30px 20px 20px;

  .results {
    padding: 15px;

    a {
      // display: block;
      margin-bottom: 10px;

      display: flex;
      text-decoration: none;

      .location {
        flex-grow: 1;

        font-weight: 400;
        font-size: 18px;
        letter-spacing: -0.05em;
        color: #444444;
      }

      .temperature {
        font-weight: 300;
        font-size: 16px;
        color: #666666;
      }
    }
  }

  h1 {
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: #999999;

    margin-bottom: 30px;
  }

  input {
    font-style: italic;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: -0.05em;
    color: #9F9F9F;

    width: 100%;
    border: none;
    border-radius: 4px;
    background: #F3F3F3;
    padding: 10px 47px 10px 15px;
    outline: none;
    margin-bottom: 15px;

    background-image: url(@/assets/svg/location-black.svg);
    background-repeat: no-repeat;
    background-position: right 15px center;
    background-size: 11px;
  }
}

</style>
