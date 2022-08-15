<template>
  <section class="SearchPage">
    <h1>Location</h1>
    <input id="search"
      type="text" name="search" autocomplete="off"
      v-model="searchInput" placeholder="Search city..."
    >
    <div class="results">
      <LocationItem
        v-for="(location, index) in filteredList" :key="index"
        :location="location"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  import { onMounted, ref, computed } from 'vue'
  import { useWeatherStore } from '@/stores/WeatherStore'
  import { useConfiguration } from '@/stores/Configuration'

  /* COMPONENTS */
  import LocationItem from '@/components/searchPage/LocationItem.vue'

  /* SETUP */
  const WeatherStore = useWeatherStore()
  const Configuration = useConfiguration()


  // Make the parent panel expand
  const emit = defineEmits(['expandPanel'])
  emit('expandPanel')


  // Get weather data from OpenWeather API
  const listOfLocations = Configuration.locationList

  onMounted(() => {
    listOfLocations.forEach((location) => {
      WeatherStore.fetchWeatherAPIData(location)
    })
  })


  // Location filtering based on search input
  const searchInput = ref<string>('')
  const filteredList = computed(() => {
    return Configuration.locationList.filter(
      location => location.toLowerCase().includes(searchInput.value.toLowerCase())
    )
  })

</script>

<style lang="scss" scoped>

.SearchPage {
  padding: 30px 20px 20px;

  h1 {
    font-weight: 500;
    font-size: var(--font-base);
    text-align: center;
    color: var(--color-dark-3);

    margin-bottom: 30px;
  }

  #search {
    font-style: italic;
    font-weight: 500;
    font-size: var(--font-medium);
    letter-spacing: var(--font-spacing-narrow);
    color: var(--color-dark-3);

    width: 100%;
    border: none;
    border-radius: 4px;
    background: var(--color-white-soft);
    padding: 10px 47px 10px 15px;
    outline: none;
    margin-bottom: 25px;

    background-image: url(@/assets/svg/location-black.svg);
    background-repeat: no-repeat;
    background-position: right 15px center;
    background-size: 0.6875rem; // 11px
  }
}

/* ANIMATIONS */
.results {
  animation: dropIn 1s ease-out forwards;
}

@keyframes dropIn {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

</style>
