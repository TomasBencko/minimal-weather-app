<template>
  <component :is="weatherIcon" />
</template>

<script setup lang="ts">

  // Components
  import Sunny from '@/assets/svg/007-sunny.svg'
  import Clouds from '@/assets/svg/013-sunny.svg'
  import Cloudy from '@/assets/svg/014-cloudy.svg'
  import Hazy from '@/assets/svg/016-hazy.svg'


  // Select proper icon based on the weather type
  const props = defineProps({ weather: { type: String, required: true } })
  let weatherIcon: any

  switch (props.weather) {
    case 'Clear':
      weatherIcon = Sunny; break;
    case 'Clouds':
      weatherIcon = Clouds; break;
    case 'Drizzle': case 'Rain': case 'Thunderstorm': case 'Snow':
      weatherIcon = Cloudy; break;
    case 'Mist': default:
      weatherIcon = Hazy; break;
  }

</script>
