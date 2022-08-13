import { defineStore } from 'pinia'

export const useConfiguration = defineStore('configuration', () => {

  // Bypass API calls and return placehodler data if true
  const usePlaceholderData = true

  const defaultUnits = 'metric'
  const defaultLocation = 'Košice'

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
  
  return { defaultUnits, defaultLocation, tilesConfiguration, usePlaceholderData }
})
