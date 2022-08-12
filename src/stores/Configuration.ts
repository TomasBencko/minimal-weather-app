import { defineStore } from 'pinia'

export const useConfiguration = defineStore('configuration', () => {
  const defaultUnits = 'metric'
  const defaultLocation = 'Košice'

  const tilesConfiguration = [
    { type: 'weather', data: { desc: 'Sunny', icon: 'sunny' } },
    { type: 'temperature', data: { value: 33 } },
    { type: 'highAndLow', data: { high: 35, low: 27 } },
    { type: 'other', data: { desc: 'Humidity', icon: 'humidity', value: 49 } },
    { type: 'other', data: { desc: 'Pressure', icon: 'humidity', value: 1007 } },
    { type: 'other', data: { desc: 'Wind', icon: 'humidity', value: 23 } },
    { type: 'other', data: { desc: 'Sunrise', icon: 'humidity', value: 1660188130 } },
    { type: 'other', data: { desc: 'Sunset', icon: 'humidity', value: 1660240707 } },
    { type: 'other', data: { desc: 'Daytime', icon: 'humidity', value: 52577 } }
  ]
  
  return { defaultUnits, defaultLocation, tilesConfiguration }
})
