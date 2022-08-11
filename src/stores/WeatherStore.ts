import { defineStore } from 'pinia'
import { ref } from 'vue'

import WeatherService from '@/services/WeatherService'
import { useConfiguration  } from '@/stores/Configuration';


export const useWeatherStore = defineStore('weatherStore', () => {
  const ConfigurationStore = useConfiguration()

  /* STORE STATE */
  let locationData = ref<location>({} as location)
  let weatherData = ref<weather>({} as weather)
  let forecastData = ref<forecast[]>([] as forecast[])
  
  
  /* STORE ACTIONS */
  async function fetchWeatherAPIData (location: string = ConfigurationStore.defaultLocation) {
    try {

      // Get coordinates for selected location (by name query)
      const locationRaw = (await WeatherService.getGeocoding(location)).data[0]

      locationData.value = {
        location: locationRaw.name,
        country: locationRaw.country,
        lat: locationRaw.lat,
        lon: locationRaw.lon,
      }
      
      
      // Get current weather data for selected location
      const { lat, lon } = locationData.value
      const units: string = ConfigurationStore.defaultUnits
      const weatherRaw = (await WeatherService.getAllWeatherData(lat, lon, units)).data
      
      const daytime: number = weatherRaw.current.sunset - weatherRaw.current.sunrise
      const timezoneShift: number = weatherRaw.timezone_offset

      weatherData.value = {
        weather: weatherRaw.current.weather[0].main,
        weatherIcon: weatherRaw.current.weather[0].icon,
        temp: weatherRaw.current.temp,
        tempMin: weatherRaw.daily[0].temp.min,
        tempMax: weatherRaw.daily[0].temp.max,
        humidity: weatherRaw.current.humidity,
        windSpeed: weatherRaw.current.wind_speed,
        sunrise: weatherRaw.current.sunrise + timezoneShift,
        sunset: weatherRaw.current.sunset + timezoneShift,
        daytime
      }

      
      // Get forecast data for next 3 days
      forecastData.value.length = 0

      for (let i = 1; i < 4; i++) {
        forecastData.value.push({
          weatherIcon: weatherRaw.daily[i].weather[0].icon,
          day: weatherRaw.daily[i].dt + timezoneShift,
          tempMin: weatherRaw.daily[i].temp.min,
          tempMax: weatherRaw.daily[i].temp.max,
        })
      }


    // Error handling
    } catch (error) {
      console.error(error)
      throw new Error('A communication error with OpenWeatherAPI has occurred')
    }
  }


  /* EXTRACTED DATA */
  return { locationData, weatherData, forecastData, fetchWeatherAPIData }
})



/* TYPESCRIPT INTERFACES */
interface location {
  location: string,     // Example value: 'Košice'
  country: string,      // Example value: 'SK'
  lat: number,          // Example value: 48.7172
  lon: number           // Example value: 21.2497
}

interface weather {
  weather: string,      // Example value: 'Rain'
  weatherIcon: string,  // Example value: '10d'
  temp: number,         // Example value: 20.61
  tempMin: number,      // Example value: 21.09
  tempMax: number,      // Example value: 22.4
  humidity: number,     // Example value: 52
  windSpeed: number,    // Example value: 6.69
  sunrise: number,      // Example value: 1660188130 (05:22 GMT0)
  sunset: number,       // Example value: 1660240707 (19:58 GMT0)
  daytime: number       // Example value: 52577 (14:36)
}

interface forecast {
  weatherIcon: string,  // Example value: '10d'
  day: number,          // Example value: 1660384800 (Sat Aug 13)
  tempMin: number,      // Example value: 16.76,
  tempMax: number,      // Example value: 26.2,
}
