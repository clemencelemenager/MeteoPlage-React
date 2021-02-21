/** Import dependancies */
import axios from 'axios';

/** Import actions */
import {
  FETCH_MARINE_WEATHER,
  saveMarineWeather,
} from 'src/actions/marineWeather';

const marineWeatherMiddleware = (store) => (next) => (action) => {
  const {
    latitude,
    longitude,
  } = store.getState().settings;

  /** Netlify function to fetch marine weather for requested position */
  const fetchMarineWeatherUrl = `/.netlify/functions/fetchMarineWeather?latitude=${latitude}&longitude=${longitude}`;

  switch (action.type) {
    case FETCH_MARINE_WEATHER: {
      axios.get(`${fetchMarineWeatherUrl}`)
        .then((response) => {
          // console.log(response.data);
          store.dispatch(saveMarineWeather(response.data.hours));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default marineWeatherMiddleware;
