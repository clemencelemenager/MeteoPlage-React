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
  const openWeatherMapApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lang=fr&lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_API_OPENWEATHERMAP_KEY}`;

  switch (action.type) {
    case FETCH_WEATHER: {
      axios.get(`${openWeatherMapApiUrl}`)
        .then((response) => {
          // console.log(response.data);
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
