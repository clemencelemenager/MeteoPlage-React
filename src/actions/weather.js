export const FETCH_WEATHER = 'FETCH_WEATHER';
export const SAVE_WEATHER = 'SAVE_WEATHER';

export const fetchWeather = () => ({
  type: FETCH_WEATHER,
});

export const saveWeather = (weatherData) => ({
  type: SAVE_WEATHER,
  weatherData,
});
