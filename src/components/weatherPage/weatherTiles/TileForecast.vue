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
    font-size: var(--font-base);
    letter-spacing: var(--font-spacing-narrow);
    color: var(--color-dark-1);
  }

  .label {
    font-weight: 500;
    font-size: var(--font-tiny);
    letter-spacing: var(--font-spacing-wide);
    color: var(--color-dark-3);

    .iconSmall {
      display: inline-block;
      height: 7px;
      margin-left: 2px;
    }
  }
}

</style>
