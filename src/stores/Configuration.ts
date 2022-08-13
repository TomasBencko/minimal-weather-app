import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfiguration = defineStore('configuration', () => {

  // Bypass API calls and return placehodler data if true
  const usePlaceholderData = ref<boolean>(true)

  const defaultUnits = ref<string>('metric')
  const defaultLocation = ref<string>('Košice')

  let isPanelExpanded = ref<boolean>(false)

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
  
  return {
    defaultUnits, defaultLocation, isPanelExpanded,
    tilesConfiguration, usePlaceholderData
  }
})
