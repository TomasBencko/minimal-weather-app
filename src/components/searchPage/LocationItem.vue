<template>
  <div class="LocationItem"
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

  /* SETUP */
  const WeatherStore = useWeatherStore()
  const router = useRouter()


  /* VARIABLES */
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
  
  .LocationItem {
    padding: 5px 15px;
    cursor: pointer;

    display: flex;
    text-decoration: none;
    border-radius: 4px;

    .location {
      flex-grow: 1;

      font-size: var(--font-medium);
      letter-spacing: var(--font-spacing-narrow);
      color: var(--color-dark-1);
    }

    .temperature {
      font-weight: 300;
      font-size: var(--font-base);
      color: var(--color-dark-2);
    }
  }

  .LocationData:hover {
    background: var(--color-blue-transparent);
  }

</style>
