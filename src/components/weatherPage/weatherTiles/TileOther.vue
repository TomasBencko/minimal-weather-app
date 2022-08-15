<template>
  <div class="TileOther">
    <component :is="iconList[tileConfig.type]" class="icon" />
    <p class="value">{{ valueFormated }}</p>
    <p class="label">{{ tileConfig.label || 'Undefined' }}</p>
  </div>
</template>

<script setup lang="ts">
  import moment from 'moment'
  import type { listOfSVGIcons } from '@/common/types'
  import { useWeatherStore } from '@/stores/WeatherStore'

  /* COMPONENTS */
  import HumidityIcon from '@/assets/svg/027-humidity.svg'
  import PressureIcon from '@/assets/svg/050-barometer.svg'
  import WindIcon from '@/assets/svg/001-wind.svg'
  import SunriseIcon from '@/assets/svg/008-sunrise.svg'
  import SunsetIcon from '@/assets/svg/007-sunset.svg'
  import DaytimeIcon from '@/assets/svg/sand-clock.svg'

  /* SETUP */
  const WeatherStore = useWeatherStore()
  const iconList: listOfSVGIcons = {
    humidity: HumidityIcon,
    pressure: PressureIcon,
    wind: WindIcon,
    sunrise: SunriseIcon,
    sunset: SunsetIcon,
    daytime: DaytimeIcon
  }


  /* VARIABLES */
  const props = defineProps({ tileConfig: { type: Object, required: true } })
  
  type possibleKeys = 'humidity' | 'pressure' | 'wind' | 'sunrise' | 'sunset' | 'daytime'
  const tileType: possibleKeys = props.tileConfig.type

  const location = WeatherStore.locationSelected
  const currentData = WeatherStore.weatherData[location].currentData
  const valueRaw: number = currentData[tileType]
  let valueFormated: string

  switch (tileType) {
    case 'humidity': valueFormated = formatPercentages(valueRaw); break;
    case 'pressure': valueFormated = formatPressure(valueRaw); break;
    case 'wind': valueFormated = formatSpeed(valueRaw); break;
    case 'sunrise': valueFormated = formatTime(valueRaw); break;
    case 'sunset': valueFormated = formatTime(valueRaw); break;
    case 'daytime': valueFormated = formatDuration(valueRaw); break;
    default: valueFormated = `N/A`; break;
  }


  /* HELPERS */
  function formatPercentages(value: number): string {
    return Math.round(value) + '%'
  }
  function formatPressure(value: number): string {
    return value.toLocaleString('en-US') + 'mBar'
  }
  function formatSpeed(value: number): string {
    return Math.round(value) + 'km/h'
  }
  function formatTime(value: number): string {
    return moment.utc(value * 1000).format('h:mm A')
  }
  function formatDuration(value: number): string {
    return moment.utc(value * 1000).format('H[h] m[m]')
  }

</script>

<style lang="scss" scoped>

.TileOther {

  .icon {
    max-width: 1.5rem; // 24px
    max-height: 1.5rem; // 24px
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
  }
}

</style>
