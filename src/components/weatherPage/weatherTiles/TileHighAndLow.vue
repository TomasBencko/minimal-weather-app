<template>
  <div class="TileHighAndLow">
    <p>{{ tempMin }}°C<CurrentHigh class="icon arrow-up" /></p>
    <p>{{ tempMax }}°C<CurrentLow class="icon" /></p>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useWeatherStore } from '@/stores/WeatherStore'

  import CurrentHigh from '@/assets/svg/current-high.svg'
  import CurrentLow from '@/assets/svg/current-low.svg'

  const WeatherStore = useWeatherStore()
  const tempMin = computed<number>(() => {
    return Math.round(WeatherStore.weatherData.tempMin)
  })
  const tempMax = computed<number>(() => {
    return Math.round(WeatherStore.weatherData.tempMax)
  })

</script>

<style lang="scss" scoped>

.TileHighAndLow {

  p:first-child {
    margin-bottom: 10px;
  }
  
  p {
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #666666;

    .icon {
      display: inline-block;
      height: 8px;
      margin-left: 2px;
    }

    .arrow-up {
      top: -4px;
    }
  }
}

</style>
