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

    return new Promise((resolve, reject) => {
      resolve({ data: [
          {
              "name": "Košice",
              "local_names": {
                  "fa": "کوشیتسه",
                  "sk": "Košice",
                  "lt": "Košicė",
                  "he": "קושיצה",
                  "es": "Košice",
                  "uk": "Кошиці",
                  "ar": "كوشيتسه",
                  "en": "Košice",
                  "la": "Cassovia",
                  "hy": "Կոշիցե",
                  "ja": "コシツェ",
                  "pl": "Koszyce",
                  "fr": "Košice",
                  "ru": "Кошице",
                  "el": "Κόσιτσε",
                  "hu": "Kassa",
                  "ps": "کوشیتسه",
                  "tr": "Cana",
                  "sr": "Кошице",
                  "ur": "کوشیسہ",
                  "de": "Kaschau",
                  "cs": "Košice",
                  "zh": "科希策",
                  "ro": "Cașovia"
              },
              "lat": 48.7172272,
              "lon": 21.2496774,
              "country": "SK",
              "state": "Region of Košice"
          }
      ]})
    })
    // return openWeatherAPI.get(`geo/1.0/direct?q=${q}&limit=${limit}&appid=${apiKey}`)
  },
  getAllWeatherData(lat: number, lon: number, units: string = 'metric') {

    return new Promise((resolve, reject) => {
      resolve({ data: {
        "lat": 48.7172,
        "lon": 21.2497,
        "timezone": "Europe/Bratislava",
        "timezone_offset": 7200,
        "current": {
            "dt": 1660384390,
            "sunrise": 1660361099,
            "sunset": 1660413302,
            "temp": 22.8,
            "feels_like": 22.94,
            "pressure": 1011,
            "humidity": 69,
            "dew_point": 16.82,
            "uvi": 2.5,
            "clouds": 20,
            "visibility": 10000,
            "wind_speed": 7.72,
            "wind_deg": 10,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "rain": {
                "1h": 0.14
            }
        },
        "daily": [
            {
                "dt": 1660384800,
                "sunrise": 1660361099,
                "sunset": 1660413302,
                "moonrise": 1660417500,
                "moonset": 1660365720,
                "moon_phase": 0.55,
                "temp": {
                    "day": 22.8,
                    "min": 16.02,
                    "max": 23.69,
                    "night": 17.16,
                    "eve": 22.14,
                    "morn": 18.09
                },
                "feels_like": {
                    "day": 22.94,
                    "night": 17.41,
                    "eve": 22.29,
                    "morn": 18.17
                },
                "pressure": 1011,
                "humidity": 69,
                "dew_point": 16.82,
                "wind_speed": 5.48,
                "wind_deg": 353,
                "wind_gust": 10.13,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": 20,
                "pop": 0.37,
                "rain": 0.28,
                "uvi": 2.85
            },
            {
                "dt": 1660471200,
                "sunrise": 1660447583,
                "sunset": 1660499597,
                "moonrise": 1660504980,
                "moonset": 1660457100,
                "moon_phase": 0.59,
                "temp": {
                    "day": 23.88,
                    "min": 16.81,
                    "max": 27.02,
                    "night": 18.24,
                    "eve": 26.05,
                    "morn": 18.43
                },
                "feels_like": {
                    "day": 23.92,
                    "night": 18.37,
                    "eve": 26.05,
                    "morn": 18.6
                },
                "pressure": 1011,
                "humidity": 61,
                "dew_point": 15.27,
                "wind_speed": 4.32,
                "wind_deg": 354,
                "wind_gust": 8.6,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": 81,
                "pop": 0.3,
                "uvi": 2.63
            },
            {
                "dt": 1660557600,
                "sunrise": 1660534068,
                "sunset": 1660585891,
                "moonrise": 1660592400,
                "moonset": 1660548300,
                "moon_phase": 0.62,
                "temp": {
                    "day": 29.74,
                    "min": 16.58,
                    "max": 31.03,
                    "night": 18.1,
                    "eve": 29.07,
                    "morn": 17.01
                },
                "feels_like": {
                    "day": 29.39,
                    "night": 18.29,
                    "eve": 28.77,
                    "morn": 17.06
                },
                "pressure": 1007,
                "humidity": 40,
                "dew_point": 14.16,
                "wind_speed": 4.21,
                "wind_deg": 345,
                "wind_gust": 7.34,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": 100,
                "pop": 0.59,
                "rain": 1.35,
                "uvi": 4.65
            },
            {
                "dt": 1660644000,
                "sunrise": 1660620552,
                "sunset": 1660672184,
                "moonrise": 1660679820,
                "moonset": 1660639200,
                "moon_phase": 0.66,
                "temp": {
                    "day": 30.33,
                    "min": 16.63,
                    "max": 33.16,
                    "night": 21.65,
                    "eve": 31.42,
                    "morn": 16.63
                },
                "feels_like": {
                    "day": 29.62,
                    "night": 21.54,
                    "eve": 30.08,
                    "morn": 16.57
                },
                "pressure": 1009,
                "humidity": 36,
                "dew_point": 13.02,
                "wind_speed": 3,
                "wind_deg": 29,
                "wind_gust": 4.48,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": 2,
                "pop": 0.21,
                "uvi": 5.76
            },
            {
                "dt": 1660730400,
                "sunrise": 1660707037,
                "sunset": 1660758475,
                "moonrise": 1660767240,
                "moonset": 1660730100,
                "moon_phase": 0.69,
                "temp": {
                    "day": 30.97,
                    "min": 19.4,
                    "max": 33.14,
                    "night": 22.79,
                    "eve": 32.14,
                    "morn": 19.4
                },
                "feels_like": {
                    "day": 30.34,
                    "night": 22.69,
                    "eve": 31.1,
                    "morn": 19.33
                },
                "pressure": 1011,
                "humidity": 36,
                "dew_point": 13.61,
                "wind_speed": 3.72,
                "wind_deg": 19,
                "wind_gust": 4.04,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": 3,
                "pop": 0.11,
                "uvi": 6.47
            },
            {
                "dt": 1660816800,
                "sunrise": 1660793522,
                "sunset": 1660844765,
                "moonrise": 1660854840,
                "moonset": 1660820820,
                "moon_phase": 0.73,
                "temp": {
                    "day": 32.5,
                    "min": 20.12,
                    "max": 35.55,
                    "night": 24.41,
                    "eve": 35.54,
                    "morn": 20.12
                },
                "feels_like": {
                    "day": 31.96,
                    "night": 24.19,
                    "eve": 33.94,
                    "morn": 20.02
                },
                "pressure": 1009,
                "humidity": 34,
                "dew_point": 14.1,
                "wind_speed": 2.88,
                "wind_deg": 205,
                "wind_gust": 3.54,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": 26,
                "pop": 0,
                "uvi": 7
            },
            {
                "dt": 1660903200,
                "sunrise": 1660880007,
                "sunset": 1660931055,
                "moonrise": 1660942740,
                "moonset": 1660911480,
                "moon_phase": 0.75,
                "temp": {
                    "day": 33.21,
                    "min": 19,
                    "max": 37.14,
                    "night": 19,
                    "eve": 35.78,
                    "morn": 22.46
                },
                "feels_like": {
                    "day": 32.26,
                    "night": 19.41,
                    "eve": 34.23,
                    "morn": 22.2
                },
                "pressure": 1005,
                "humidity": 30,
                "dew_point": 13.03,
                "wind_speed": 5.25,
                "wind_deg": 223,
                "wind_gust": 6.81,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": 66,
                "pop": 0.86,
                "rain": 3.09,
                "uvi": 7
            },
            {
                "dt": 1660989600,
                "sunrise": 1660966491,
                "sunset": 1661017343,
                "moonrise": 1661031000,
                "moonset": 1661002020,
                "moon_phase": 0.79,
                "temp": {
                    "day": 18.23,
                    "min": 15.45,
                    "max": 18.61,
                    "night": 15.45,
                    "eve": 16.64,
                    "morn": 18.17
                },
                "feels_like": {
                    "day": 18.46,
                    "night": 15.27,
                    "eve": 16.61,
                    "morn": 18.52
                },
                "pressure": 1012,
                "humidity": 90,
                "dew_point": 15.9,
                "wind_speed": 3.43,
                "wind_deg": 7,
                "wind_gust": 7.34,
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10d"
                    }
                ],
                "clouds": 100,
                "pop": 0.97,
                "rain": 6.97,
                "uvi": 7
            }
        ]
      
      }})
    })
    // return openWeatherAPI.get(`data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=${units}&appid=${apiKey}`)
  },


  // No longer in use (free plan)
  getWeather(lat: number, lon: number, units: string = 'metric') {
    return openWeatherAPI.get(`data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`)
  },
  getForecast(lat: number, lon: number, units: string = 'metric') {
    return openWeatherAPI.get(`data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`)
  }
}
