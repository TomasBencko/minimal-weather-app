<template>
  <div class="TileForecast">
    <WeatherIcon class="icon" :weather="weather" />
    <p class="value">{{ day }}</p>
    <p class="label">
      {{ high }}°C<ForecastHigh class="iconSmall" />
      {{ low }}°C<ForecastLow class="iconSmall" />
    </p>
  </div>
</template>

<script setup lang="ts">
  import moment from 'moment'

  // Components
  import ForecastHigh from '@/assets/svg/forecast-high.svg'
  import ForecastLow from '@/assets/svg/forecast-low.svg'
  import WeatherIcon from '@/components/weatherPage/WeatherIcon.vue'
  

  // Variables necessary to render the component
  const props = defineProps({ forecastData: { type: Object, required: true } })

  const weather: string = props.forecastData.weather
  const high: number = Math.round(props.forecastData.tempMax)
  const low: number = Math.round(props.forecastData.tempMin)
  const day: string = formatDay(props.forecastData.day)
  

  // Functions to format raw values
  function formatDay(value: number): string {
    return moment.utc(value * 1000).format('ddd, DD')
  }

</script>

<style lang="scss" scoped>

.TileForecast {

  .icon {
    max-width: 24px;
    max-height: 24px;
    margin-bottom: 10px;
  }

  .value {
    font-weight: 500;
    font-size: 16px;
    letter-spacing: -0.05em;
    color: #444444;
  }

  .label {
    font-weight: 500;
    font-size: 8px;
    letter-spacing: 0.1em;
    color: #999999;

    .iconSmall {
      display: inline-block;
      height: 7px;
      margin-left: 2px;
    }
  }
}

</style>
