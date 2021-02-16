export const FETCH_MARINE_WEATHER = 'FETCH_MARINE_WEATHER';
export const SAVE_MARINE_WEATHER = 'SAVE_MARINE_WEATHER';

export const fetchMarineWeather = () => ({
  type: FETCH_MARINE_WEATHER,
});

export const saveMarineWeather = (windData) => ({
  type: SAVE_MARINE_WEATHER,
  windData,
});
