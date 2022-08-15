<template>
  <section class="WeatherPage">
    <WeatherHeader v-if="dataLoaded" />
    <WeatherContent v-if="dataLoaded" />

    <div class="message error" v-else-if="communicationProblems">
      <p>A communication error with</p>
      <p>OpenWeatherAPI has occurred</p>
      <p>We're sorry for the inconvenience</p>
    </div>
    <div class="message" v-else>Loading...</div>
  </section>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { useWeatherStore } from '@/stores/WeatherStore'
  import { useConfiguration } from '@/stores/Configuration'

  /* COMPONENTS */
  import WeatherHeader from '@/components/weatherPage/WeatherHeader.vue'
  import WeatherContent from '@/components/weatherPage/WeatherContent.vue'
  
  /* SETUP */
  const WeatherStore = useWeatherStore()
  const Configuration = useConfiguration()


  // Make the parent panel shrink
  const emit = defineEmits(['shrinkPanel'])
  emit('shrinkPanel')


  // Get weather data from OpenWeather API
  let communicationProblems = ref<boolean>(false)
  let dataLoaded = ref<boolean>(false)

  const route = useRoute()
  let location: string = route.params.location
      ? route.params.location.toString()
      : Configuration.defaultLocation

  WeatherStore.locationSelected = location

  onMounted(async () => {
    try {
      await WeatherStore.fetchWeatherAPIData(location)
      dataLoaded.value = true
      
    } catch (error) {
      console.log(error)
      communicationProblems.value = true
    }
  })

</script>

<style lang="scss" scoped>

.WeatherPage {
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  .message {
    flex-grow: 1;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .error {
    flex-direction: column;

    p:last-of-type {
      margin-top: 20px;
    }
  }
}

</style>
