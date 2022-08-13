import { defineStore } from 'pinia'
import { ref } from 'vue'

import WeatherService from '@/services/WeatherService'
import { useConfiguration  } from '@/stores/Configuration'

import type { location, weather, forecast } from '@/common/types'


export const useWeatherStore = defineStore('weatherStore', () => {
  const Configuration = useConfiguration()

  /* STORE STATE */
  let locationData = ref<location>({} as location)
  let weatherData = ref<weather>({} as weather)
  let forecastData = ref<forecast[]>([] as forecast[])
  
  
  /* STORE ACTIONS */
  async function fetchWeatherAPIData (location: string = Configuration.defaultLocation) {
    try {

      // Get coordinates for selected location (by name query)
      const locationRaw = (await WeatherService.getGeocoding({
        q: location,
        usePlaceholderData: Configuration.usePlaceholderData
      })).data[0]

      locationData.value = {
        location: locationRaw.name,
        country: locationRaw.country,
        lat: locationRaw.lat,
        lon: locationRaw.lon,
      }
      
      
      // Get current weather data for selected location
      const weatherRaw = (await WeatherService.getAllWeatherData({
        lat: locationData.value.lat,
        lon: locationData.value.lon,
        units: Configuration.defaultUnits,
        usePlaceholderData: Configuration.usePlaceholderData
      })).data
      
      const daytime: number = weatherRaw.current.sunset - weatherRaw.current.sunrise
      const timezoneShift: number = weatherRaw.timezone_offset

      weatherData.value = {
        weather: weatherRaw.current.weather[0].main,
        temp: weatherRaw.current.temp,
        tempMin: weatherRaw.daily[0].temp.min,
        tempMax: weatherRaw.daily[0].temp.max,
        humidity: weatherRaw.current.humidity,
        pressure: weatherRaw.current.pressure,
        wind: weatherRaw.current.wind_speed,
        sunrise: weatherRaw.current.sunrise + timezoneShift,
        sunset: weatherRaw.current.sunset + timezoneShift,
        daytime
      }

      
      // Get forecast data for next 3 days
      forecastData.value.length = 0

      for (let i = 1; i < 4; i++) {
        forecastData.value.push({
          weather: weatherRaw.daily[i].weather[0].main,
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
