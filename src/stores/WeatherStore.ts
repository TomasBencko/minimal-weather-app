import { defineStore } from 'pinia'
import { ref } from 'vue'

import WeatherService from '@/services/WeatherService'
import { useConfiguration  } from '@/stores/Configuration'

import type { weatherDataAll, location, current, forecast } from '@/common/types'


export const useWeatherStore = defineStore('weatherStore', () => {

  // Setup
  const Configuration = useConfiguration()


  /* STORE STATE */
  let weatherData = ref<weatherDataAll>({} as weatherDataAll)
  let locationSelected = ref<string>(Configuration.defaultLocation)
  
  
  /* STORE ACTIONS */
  async function fetchWeatherAPIData (location: string = locationSelected.value) {

    // Check if data isn't here already...
    if (weatherData.value[location]) {
      const timeNow = new Date()
      const expirationTime = weatherData.value[location].expiration
      if (timeNow < expirationTime) return
    }


    // ...otherwise, get new data from API
    try {

      // For testing purposes only... delete later
      // if (location === 'Koromľa') await new Promise(r => setTimeout(r, 2000))

      let locationData: location = {} as location
      let currentData: current = {} as current
      let forecastData: forecast[] = [] as forecast[]


      // Get coordinates for selected location (by name query)
      const locationRaw = (await WeatherService.getGeocoding({
        q: location
      })).data[0]

      locationData = {
        location: locationRaw.name,
        country: locationRaw.country,
        lat: locationRaw.lat,
        lon: locationRaw.lon,
      }
      
      
      // Get current weather data for selected location
      const weatherRaw = (await WeatherService.getAllWeatherData({
        lat: locationData.lat,
        lon: locationData.lon,
        units: Configuration.defaultUnits,
        q: location
      })).data
      
      const daytime: number = weatherRaw.current.sunset - weatherRaw.current.sunrise
      const timezoneShift: number = weatherRaw.timezone_offset

      currentData = {
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
      forecastData.length = 0

      for (let i = 1; i < 4; i++) {
        forecastData.push({
          weather: weatherRaw.daily[i].weather[0].main,
          day: weatherRaw.daily[i].dt + timezoneShift,
          tempMin: weatherRaw.daily[i].temp.min,
          tempMax: weatherRaw.daily[i].temp.max,
        })
      }


      // Save processed data to the store together with an expiration date
      const expiration: Date = new Date()
      expiration.setMinutes(expiration.getMinutes() + Configuration.minutesToExpire)

      weatherData.value[location] = {
        locationData,
        currentData,
        forecastData,
        expiration
      }


      // If no problem occured proceed
      console.log(`✅ Weather data for ${location} fetched successfully`)
      

    // Error handling
    } catch (error) {
      console.error(error)
      throw new Error('A communication error with OpenWeatherAPI has occurred')
    }
  }

  

  /* EXTRACTING DATA */
  return { weatherData, locationSelected, fetchWeatherAPIData }
})
