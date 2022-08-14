import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfiguration = defineStore('configuration', () => {

  // Bypass API calls and return placehodler data if true
  const usePlaceholderData = ref<boolean>(false)

  // Set number of minutes for API data to be cached
  const minutesToExpire = ref<number>(20)

  const defaultUnits = ref<string>('metric')
  const defaultLocation = ref<string>('Košice')

  const locationList = ref<string[]>([
    'Bratislava',
    'Humenné',
    'Koromľa',
    'Košice',
    'Michalovce',
    'Sobrance'
  ])

  const tilesConfiguration = [
    { type: 'weather' },
    { type: 'temperature' },
    { type: 'highAndLow' },
    { type: 'humidity', label: 'Humidity' },
    { type: 'pressure', label: 'Pressure' },
    { type: 'wind', label: 'Wind' },
    { type: 'sunrise', label: 'Sunrise' },
    { type: 'sunset', label: 'Sunset' },
    { type: 'daytime', label: 'Daytime' }
  ]

  let isPanelExpanded = ref<boolean>(false)
  
  return {
    defaultUnits, defaultLocation, isPanelExpanded,
    tilesConfiguration, locationList,
    usePlaceholderData, minutesToExpire
  }
})
