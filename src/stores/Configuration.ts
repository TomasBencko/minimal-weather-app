import { defineStore } from 'pinia'

export const useConfiguration = defineStore('configuration', () => {
  const defaultUnits = 'metric'
  const defaultLocation = 'Košice'

  // const tilesConfiguration = [ 'weather', 'temperature', 'highAndLow', 'humidity', 'pressure', 'windSpeed', 'sunrise', 'sunset', 'daytime' ]

  const tilesConfiguration = [
    { type: 'weather' },
    { type: 'temperature' },
    { type: 'highAndLow' },
    { type: 'humidity', text: 'Humidity', icon: '027-humidity' },
    { type: 'pressure', text: 'Pressure', icon: '050-barometer' },
    { type: 'windSpeed', text: 'Wind', icon: '001-wind' },
    { type: 'sunrise', text: 'Sunrise', icon: '008-sunrise' },
    { type: 'sunset', text: 'Sunset', icon: '007-sunset' },
    { type: 'daytime', text: 'Daytime', icon: 'sand-clock' }
  ]
  
  return { defaultUnits, defaultLocation, tilesConfiguration }
})


//  TODO  
/*
  Rename windSpeed to wind
  Remove icon from config
  Rename text to label
  Use switch statement for value formatting only in TileOther
*/
