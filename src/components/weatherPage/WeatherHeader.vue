<template>
  <div class="WeatherHeader">
    <div class="date">{{ date }}</div>
    <div class="location">
      <RouterLink to="/search">{{ location }}, {{ country }}</RouterLink>
      <LocationPin class="icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import { ref } from 'vue'
  import moment from 'moment'
  import type { dictionary } from '@/common/types'
  import { useWeatherStore } from '@/stores/WeatherStore'
  const WeatherStore = useWeatherStore()

  // Components
  import LocationPin from '@/assets/svg/location.svg'


  // Variables necessary to render the component
  const location: string = WeatherStore.locationData.location
  const country = (() => {
    const countryCode: string = WeatherStore.locationData.country
    const codeDictionary: dictionary = { SK: 'Slovakia', CZ: 'Czechia' }
    return codeDictionary[countryCode] || countryCode
  })()


  // Show date and time and keep it current
  const dateFormat: string = 'dddd, DD MMM YYYY [|] h:mm A'
  let date = ref<string>(moment().format(dateFormat))
  setInterval(() => date.value = moment().format(dateFormat), 1000)

</script>

<style lang="scss" scoped>

.WeatherHeader {
  display: flex;
  justify-content: space-between;
  /* margin: -20px -20px 0; */

  div {
    padding: 15px;
  }

  .date {
    /* flex-grow: 1;
    text-align: center; */

    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #999999;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 10px;
  }

  .location {
    border-bottom-left-radius: 24px;
    background: rgba(13, 159, 234, 0.08);
    white-space: nowrap;
    padding-left: 10px;

    a {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #0DA0EA;
      
      text-decoration: none;
    }

    .icon {
      // display: inline-block;
      margin-left: 7px;
      height: 12px;
    }
  }
}

</style>
