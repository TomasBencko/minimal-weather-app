import axios from 'axios'

const apiKey = import.meta.env.VITE_WEATHER_KEY

// Create an axios instance for OpenWeather® API
const openWeatherAPI = axios.create({
  baseURL: 'http://api.openweathermap.org/',
  timeout: 1000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

import geocodingData from './placeholderData/geocodingData'
import allWeatherData from './placeholderData/allWeatherData'


// API calls
export default {
  
  getGeocoding({ q, limit = 1, usePlaceholderData = false }: {
    q: string, limit?: number, usePlaceholderData?: boolean
  }): Promise<{ [key: string]: any }> {

    if (usePlaceholderData) {
      // Log warning into console, if using placeholder data
      console.warn(
        '%cRendering placeholder data only!',
        'font-weight: 600; color: red;',
        '\nChange \'usePlaceholderData\' in \'@/stores/Configuration\' to false, if you want to get data from API'
      )
      return new Promise<{ [key: string]: any }>(resolve => resolve(geocodingData))
    }
    
    return openWeatherAPI.get(
      `geo/1.0/direct?q=${q}&limit=${limit}&appid=${apiKey}`
    )
  },


  getAllWeatherData({ lat, lon, units = 'metric', usePlaceholderData = false }: {
    lat: number, lon: number, units?: string, usePlaceholderData?: boolean
  }): Promise<{ [key: string]: any }> {

    if (usePlaceholderData) {
      return new Promise<{ [key: string]: any }>(resolve => resolve(allWeatherData))
    }
    
    return openWeatherAPI.get(
      `data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=${units}&appid=${apiKey}`
    )
  },



  /*  DEPRECIATED  (free plan, missing data for today's high and low temp) */
  getWeather(lat: number, lon: number, units: string = 'metric') {
    return openWeatherAPI.get(`data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`)
  },

  getForecast(lat: number, lon: number, units: string = 'metric') {
    return openWeatherAPI.get(`data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`)
  }
}
