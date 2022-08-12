<template>
  <div class="TileOther">
    <!-- <p>{{ tileData.icon }}</p>  TODO  -->
    <p>{{ value }}</p>
    <p>{{ tileData.text }}</p>
  </div>
</template>

<script setup lang="ts">
  import { useWeatherStore } from '@/stores/WeatherStore'

  const props = defineProps({
    tileData: { type: Object, required: true }
  })

  const WeatherStore = useWeatherStore()
  type possibleKeys = 'humidity' | 'pressure' | 'windSpeed' | 'sunrise' | 'sunset' | 'daytime'
  const value: number = WeatherStore.weatherData[props.tileData.type as possibleKeys]

</script>

<style scoped>

</style>
