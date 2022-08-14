import axios from 'axios'

// Get API key from '.env.local' file
const apiKey = import.meta.env.VITE_WEATHER_KEY


// Use placeholder data if set so in '.env.local', or if API key is not provided
let usePlaceholderData: boolean = false
if (!apiKey || import.meta.env.VITE_USE_PLACEHOLDER_DATA) {
  usePlaceholderData = true

  // Log warning into console, if using placeholder data
  console.warn(
    '%cWARNING: Using placeholder data only!', 'font-weight: 600; color: red;',
    '\nIf you want to get data from OpenWeather API, be sure \'.env.local\' is set properly:\n',
    '\n\tVITE_WEATHER_KEY=[YOUR API KEY HERE]',
    '\n\tVITE_USE_PLACEHOLDER_DATA=false\n '
  )
}


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
  
  getGeocoding({ q, limit = 1 }: {
    q: string, limit?: number
  }): Promise<{ [key: string]: any }> {

    if (usePlaceholderData) {
      const location = q as 'Bratislava' | 'Humenné' | 'Koromľa' | 'Košice' | 'Michalovce' | 'Sobrance'
      return new Promise<{ [key: string]: any }>(resolve => resolve(geocodingData[location]))
    }
    
    return openWeatherAPI.get(
      `geo/1.0/direct?q=${q}&limit=${limit}&appid=${apiKey}`
    )
  },


  getAllWeatherData({ lat, lon, units = 'metric', q = 'Košice' }: {
    lat: number, lon: number, units?: string, q?: string
  }): Promise<{ [key: string]: any }> {

    if (usePlaceholderData) {
      const location = q as 'Bratislava' | 'Humenné' | 'Koromľa' | 'Košice' | 'Michalovce' | 'Sobrance'
      return new Promise<{ [key: string]: any }>(resolve => resolve(allWeatherData[location]))
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
