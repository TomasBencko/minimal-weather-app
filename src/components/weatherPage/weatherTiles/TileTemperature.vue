<template>
  <div class="TileTemperature">
    <p>{{ temp }}<span>°C</span></p>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useWeatherStore } from '@/stores/WeatherStore'

  const WeatherStore = useWeatherStore()

  const temp = computed<number>(() => {
    return Math.round(WeatherStore.weatherData.temp)
  })


</script>

<style lang="scss" scoped>

.TileTemperature {

  p {
    font-weight: 300;
    font-size: 64px;
    line-height: 77px;
    letter-spacing: -0.05em;
    color: #000000;

    span {
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      letter-spacing: 0;
      color: #666666;
      vertical-align: super;
      top: -6px; //  HARDCODED 
    }
  }
}

</style>
