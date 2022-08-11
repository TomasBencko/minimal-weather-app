import { defineStore } from 'pinia'
import WeatherService from '../services/WeatherService'

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    locationData: { lat: 0, lon: 0 },
    weatherData: {},
    forecastData: {}
  }),
  getters: {},
  actions: {
    async fetchWeatherAPIData(location: string, units: string = 'metric') {
      try {
        // Get coordinates by location name
        const geocodingRaw = await WeatherService.getGeocoding(location)
        this.locationData = geocodingRaw.data[0]
        const { lat, lon } = geocodingRaw.data[0]

        // Get current weather data for searched location
        const weatherRaw = await WeatherService.getWeather(lat, lon, units)
        this.weatherData = weatherRaw.data

        // Get 5 day / 3 hour forecast data
        const forecastRaw = await WeatherService.getForecast(lat, lon, units)
        this.forecastData = forecastRaw.data

      } catch (error) {
        console.error(error)
        throw new Error('A communication error with OpenWeatherAPI has occurred');
      }
    }
  }
})
