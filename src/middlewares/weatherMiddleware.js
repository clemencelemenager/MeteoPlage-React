/** Import */
import axios from 'axios';

/** Import actions */
import {
  FETCH_WEATHER,
  saveWeather,
} from 'src/actions/weather';

const weatherMiddleware = (store) => (next) => (action) => {
  const {
    latitude,
    longitude,
  } = store.getState().settings;

  /** Netlify function to fetch weather for requested position */
  const fetchWeatherUrl = `/.netlify/functions/fetchWeather?latitude=${latitude}&longitude=${longitude}`;

  switch (action.type) {
    case FETCH_WEATHER: {
      axios.get(`${fetchWeatherUrl}`)
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveWeather(response.data));
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
export default weatherMiddleware;
