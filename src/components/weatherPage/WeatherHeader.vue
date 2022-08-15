<template>
  <div class="WeatherHeader">
    <div class="date">{{ date }}</div>
    <RouterLink to="/search" class="location">
      <span>{{ locationName }}, {{ country }}</span>
      <LocationPin class="icon" />
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import moment from 'moment'
  import type { dictionary, location } from '@/common/types'
  import { useWeatherStore } from '@/stores/WeatherStore'

  /* COMPONENTS */
  import { RouterLink } from 'vue-router'
  import LocationPin from '@/assets/svg/location.svg'

  /* SETUP */
  const WeatherStore = useWeatherStore()


  /* VARIABLES */
  const locationSelected:string = WeatherStore.locationSelected
  const locationData: location = WeatherStore.weatherData[locationSelected].locationData
  const locationName: string = locationData.location
  const country: string = (() => {
    const countryCode: string = locationData.country
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
  width: 100%;

  .date {
    font-size: var(--font-small);
    line-height: 17px;
    text-align: center;
    color: var(--color-dark-3);

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 15px;
    padding-right: 10px;
  }

  .location {
    border-bottom-left-radius: 24px;
    background: var(--color-blue-transparent);
    white-space: nowrap;
    padding-left: 10px;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 15px;

    span {
      font-weight: 500;
      font-size: var(--font-base);
      line-height: 19px;
      text-align: center;
      color: var(--color-blue);
    }

    .icon {
      margin-left: 7px;
      height: 0.75rem;
      bottom: -2px;
    }
  }

  .location:hover {
      background: var(--color-blue-transparent-2);
    }
}

</style>
