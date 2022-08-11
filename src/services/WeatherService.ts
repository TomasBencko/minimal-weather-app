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

// API calls
export default {
  getGeocoding(q: string, limit: number = 1) {
    return openWeatherAPI.get(`geo/1.0/direct?q=${q}&limit=${limit}&appid=${apiKey}`)
  },
  getAllWeatherData(lat: number, lon: number, units: string = 'metric') {
    return openWeatherAPI.get(`data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=${units}&appid=${apiKey}`)
  },


  // No longer in use (free plan)
  getWeather(lat: number, lon: number, units: string = 'metric') {
    return openWeatherAPI.get(`data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`)
  },
  getForecast(lat: number, lon: number, units: string = 'metric') {
    return openWeatherAPI.get(`data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`)
  }
}
