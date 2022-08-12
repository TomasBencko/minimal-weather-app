<template>
  <div class="WeatherHeader">
    <div class="date">Wednesday, 08 Oct 2020 | 4:30 PM</div>
    <div class="location">
      <RouterLink to="/search">{{ location }}, {{ country }}</RouterLink>
      <!--  TODO  Location icon -->
    </div>
  </div>
</template>

<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import { computed } from 'vue'
  import { useWeatherStore } from '@/stores/WeatherStore'
  import type { dictionary } from '@/common/types'


  const weatherStore = useWeatherStore()

  const location = computed(() => weatherStore.locationData.location)

  const country = computed(() => {
    const countryCode: string = weatherStore.locationData.country
    const codeDictionary: dictionary = { SK: 'Slovakia', CZ: 'Czechia' }
    return codeDictionary[countryCode] || countryCode
  })

</script>

<style scoped>
.WeatherHeader {
  display: flex;
  justify-content: space-between;
  /* margin: -20px -20px 0; */
}

.WeatherHeader div {
  padding: 15px;
}

.date {
  /* flex-grow: 1;
  text-align: center; */

  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #999999;
}

.location {
  border-bottom-left-radius: 24px;
  background: rgba(13, 159, 234, 0.08);
}

.location a {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #0DA0EA;
  
  text-decoration: none;
}

</style>
