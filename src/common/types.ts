
// Used in WeatherHeader.vue
export interface dictionary {
  [key: string]: string
}

// Used in WeatherContent.vue
export interface componentList {
  [key: string]: object
}


// Used in WeatherStore.ts
export interface location {
  location: string,     // Example value: 'Košice'
  country: string,      // Example value: 'SK'
  lat: number,          // Example value: 48.7172
  lon: number           // Example value: 21.2497
}

export interface weather {
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

export interface forecast {
  weatherIcon: string,  // Example value: '10d'
  day: number,          // Example value: 1660384800 (Sat Aug 13)
  tempMin: number,      // Example value: 16.76,
  tempMax: number,      // Example value: 26.2,
}
