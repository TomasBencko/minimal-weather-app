<template>
  <div class="LocationData"
    @click="selectWeather"
  >
    <span class="location">{{ location }}</span>
    <span class="temperature">{{ temperature }}</span>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { useWeatherStore } from '@/stores/WeatherStore'

  // Setup
  const WeatherStore = useWeatherStore()
  const router = useRouter()


  // Variables necessary to render the component
  const props = defineProps({ location: { type: String, required: true } })
    
  const temperature = computed(() => {
    if (!WeatherStore.weatherData[props.location]) return 'Loading...'
    const currentData = WeatherStore.weatherData[props.location].currentData
    return Math.round(currentData.temp) + '°C'
  })


  // Open weather for selected location
  function selectWeather() {
    router.push(`/w/${props.location}`)
  }

</script>

<style lang="scss" scoped>
  
  .LocationData {
    margin-bottom: 10px;
    cursor: pointer;

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

</style>
