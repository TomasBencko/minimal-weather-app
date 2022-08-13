<template>
  <div class="TileOther">
    <component :is="icon" class="icon" />
    <p class="value">{{ valueFormated }}</p>
    <p class="text">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
  import { useWeatherStore } from '@/stores/WeatherStore'
  import type { Component } from 'vue'
  import moment from 'moment'

  import HumidityIcon from '@/assets/svg/027-humidity.svg'
  import PressureIcon from '@/assets/svg/050-barometer.svg'
  import WindIcon from '@/assets/svg/001-wind.svg'
  import SunriseIcon from '@/assets/svg/008-sunrise.svg'
  import SunsetIcon from '@/assets/svg/007-sunset.svg'
  import DaytimeIcon from '@/assets/svg/sand-clock.svg'

  const props = defineProps({
    tileData: { type: Object, required: true }
  })

  const WeatherStore = useWeatherStore()
  type possibleKeys = 'humidity' | 'pressure' | 'windSpeed' | 'sunrise' | 'sunset' | 'daytime'
  // const value: number = WeatherStore.weatherData[props.tileData.type as possibleKeys]
  const tileType: string = props.tileData.type

  let icon: Component | string,
    valueFormated: number | string,
    text: string

  switch (tileType) {
    case 'humidity':
      valueFormated = `${WeatherStore.weatherData[tileType]}%`
      icon = HumidityIcon; text = 'Humidity'; break;
    case 'pressure':
      valueFormated = `${WeatherStore.weatherData[tileType].toLocaleString('en-US')}mBar`
      icon = PressureIcon; text = 'Pressure'; break;
    case 'windSpeed':
      valueFormated = `${Math.round(WeatherStore.weatherData[tileType])} km/h`
      icon = WindIcon; text = 'Wind'; break;
    case 'sunrise':
      valueFormated = `${moment.utc(WeatherStore.weatherData[tileType] * 1000).format('h:mm A')}`
      icon = SunriseIcon; text = 'Sunrise'; break;
    case 'sunset':
      valueFormated = `${moment.utc(WeatherStore.weatherData[tileType] * 1000).format('h:mm A')}`
      icon = SunsetIcon; text = 'Sunset'; break;
    case 'daytime':
      valueFormated = `${moment.utc(WeatherStore.weatherData[tileType] * 1000).format('H[h] m[m]')}`
      icon = DaytimeIcon; text = 'Daytime'; break;
    default:
      valueFormated = `N/A`; icon = HumidityIcon; text = 'Undefined'; break;
  }




</script>

<style lang="scss" scoped>

.TileOther {

  .icon {
    max-width: 24px;
    max-height: 24px;
    margin-bottom: 10px;
  }

  .value {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.05em;
    color: #444444;
  }

  .text {
    font-weight: 500;
    font-size: 8px;
    line-height: 10px;
    letter-spacing: 0.1em;
    color: #999999;
  }
}

</style>
