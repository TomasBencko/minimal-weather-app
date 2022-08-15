# Minimal Weather App

Mobile first SPA created as a work assignment for [Cassovia Code](https://cassoviacode.sk/) software house.

While working on this project, I decided to try out some technologies I’ve had no previous experience with. Those include:
- **TypeScript** (I was using plain JavaScript on my older projects)
- **Vue Composition API** (I was using Options API with Vue 2 on my older projects)
- **Pinia** (I was using Vuex state management on my older projects)
- **Vite** (I was using Webpack module bundler on my older projects)

You can access live version of the page on [tomasbencko.github.io/minimal-weather-app/](https://tomasbencko.github.io/minimal-weather-app/)

*Feedback is highly appreciated!*

## Project Setup
1. Install necessary packages using `npm install`
2. Create the `.env.local` file in root folder as shown bellow (you can get the API key by subscribing to [OpenWeather One Call API 3.0](https://openweathermap.org/api))

```
VITE_WEATHER_KEY=[OpenWeather API key]
VITE_USE_PLACEHOLDER_DATA=false
```

3. Use `npm run dev` to run the project locally or `npm run build` to build the project

## Known issues
- [ ] Trying to access `https://tomasbencko.github.io/minimal-weather-app/<anything>` will throw 404; It's necessary to access the page using the base URL when in production mode currently ([https://tomasbencko.github.io/minimal-weather-app/](https://tomasbencko.github.io/minimal-weather-app/))

## Possible future improvements
- [ ] Add missing icons for different weather types
- [ ] Create an animated background (eg. clouds moving from one side to the other)
- [ ] Make it possible to navigate between search results using arrow keys & enter
- [ ] Make it possible to change location by swiping left / right or by using arrow keys (on weather page)
- [ ] Add optional dark color scheme
- [ ] Add skeleton loading animation while data is being fetched
- [ ] Show local time based on location's time zone
- [ ] Store last accessed location on localStorage
- [ ] Store cached data on localStorage & remove expired data automatically
