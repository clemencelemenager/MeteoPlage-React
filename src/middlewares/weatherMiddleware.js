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
  // eslint-disable-next-line no-undef
  const apiKeyOpenWeatherMap = REACT_APP_API_OPENWEATHERMAP_KEY;
  const openWeatherMapApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lang=fr&lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKeyOpenWeatherMap}`;

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
