import { defineStore } from 'pinia'
import WeatherService from '@/services/WeatherService'

const ConfigurationStore = {
  defaultUnits: 'metric',
  defaultLocation: 'Košice'
}


export const useWeatherStore = defineStore('Weather Store', {
  state: () => ({
    locationData: { location: '', country: '', lat: 0, lon: 0 },
    weatherData: {},
    forecastData: [{}]
  }),
  getters: {},
  actions: {
    async fetchWeatherAPIData(location: string = ConfigurationStore.defaultLocation) {
      try {

        // Get coordinates for selected location (by name query)
        const locationRaw = (await WeatherService.getGeocoding(location)).data[0]

        this.locationData = {
          location: locationRaw.name,
          country: locationRaw.country,
          lat: locationRaw.lat,
          lon: locationRaw.lon,
        }
        
        
        // Get current weather data for selected location
        const { lat, lon } = this.locationData
        const units: string = ConfigurationStore.defaultUnits
        const dataRaw = (await WeatherService.getAllWeatherData(lat, lon, units)).data
        
        const daytime = dataRaw.current.sunset - dataRaw.current.sunrise
        const timezoneShift = dataRaw.timezone_offset       // 7200 (2h)

        this.weatherData = {
          weather: dataRaw.current.weather.main,            // 'Rain'
          weatherIcon: dataRaw.current.weather.icon,        // '10d'
          temp: dataRaw.current.temp,                       // 20.61
          tempMin: dataRaw.daily[0].temp.min,               // 21.09
          tempMax: dataRaw.daily[0].temp.max,               // 22.4
          humidity: dataRaw.current.humidity,               // 52
          windSpeed: dataRaw.current.wind_speed,            // 6.69
          sunrise: dataRaw.current.sunrise + timezoneShift, // 1660188130 (05:22 GMT0)
          sunset: dataRaw.current.sunset + timezoneShift,   // 1660240707 (19:58 GMT0)
          daytime                                           // 52577 (14:36)
        }


        // Get 3 day forecast data for selected location
        const forecastRaw = (await WeatherService.getForecast(lat, lon, units)).data
        this.forecastData.length = 0

        for (let i = 1; i < 4; i++) {
          this.forecastData.push({
            weatherIcon: dataRaw.daily[i].weather.icon,
            day: dataRaw.daily[i].dt,
            tempMin: dataRaw.daily[i].temp.min,
            tempMax: dataRaw.daily[i].temp.max,
          })
        }


      // Error handling
      } catch (error) {
        console.error(error)
        throw new Error('A communication error with OpenWeatherAPI has occurred');
      }
    }
  }
})
