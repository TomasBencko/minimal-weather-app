import { defineStore } from 'pinia'

export const useConfiguration = defineStore('configuration', () => {
  const defaultUnits = 'metric'
  const defaultLocation = 'Košice'

  const tilesConfiguration = [
    { type: 'weather' },
    { type: 'temperature' },
    { type: 'highAndLow' },
    { type: 'humidity', text: 'Humidity', icon: 'humidity' },
    { type: 'pressure', text: 'Pressure', icon: 'humidity' },
    { type: 'windSpeed', text: 'Wind', icon: 'humidity' },
    { type: 'sunrise', text: 'Sunrise', icon: 'humidity' },
    { type: 'sunset', text: 'Sunset', icon: 'humidity' },
    { type: 'daytime', text: 'Daytime', icon: 'humidity' }
  ]
  
  return { defaultUnits, defaultLocation, tilesConfiguration }
})
