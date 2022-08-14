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

  // Components
  import CurrentHigh from '@/assets/svg/current-high.svg'
  import CurrentLow from '@/assets/svg/current-low.svg'

  // Setup
  const WeatherStore = useWeatherStore()


  // Variables necessary to render the component
  const location = WeatherStore.locationSelected
  const currentData = WeatherStore.weatherData[location].currentData
  const tempMin: number = Math.round(currentData.tempMin)
  const tempMax: number = Math.round(currentData.tempMax)

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
      font-size: var(--font-base);
      line-height: 19px;
      color: var(--color-dark-2);

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
