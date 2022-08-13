<template>
  <div class="TileHighAndLow">
    <div>
      <p>{{ tempMin }}°C<CurrentHigh class="icon arrow-up" /></p>
      <p>{{ tempMax }}°C<CurrentLow class="icon" /></p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useWeatherStore } from '@/stores/WeatherStore'
  const WeatherStore = useWeatherStore()

  // Components
  import CurrentHigh from '@/assets/svg/current-high.svg'
  import CurrentLow from '@/assets/svg/current-low.svg'


  // Variables necessary to render the component
  const tempMin: number = Math.round(WeatherStore.weatherData.tempMin)
  const tempMax: number = Math.round(WeatherStore.weatherData.tempMax)

</script>

<style lang="scss" scoped>

.TileHighAndLow {

  div {
    text-align: right;

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
}

</style>
