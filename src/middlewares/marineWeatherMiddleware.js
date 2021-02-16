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
  const data = [
    'gust', 'windDirection', 'windSpeed',
    'waterTemperature', 'waveHeight',
  ].join(',');
  const source = 'sg';
  const openStormGlassApiUrl = `https://api.stormglass.io/v2/weather/point?source=${source}&lat=${latitude}&lng=${longitude}&params=${data}`;

  switch (action.type) {
    case FETCH_MARINE_WEATHER: {
      axios({
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        url: `${openStormGlassApiUrl}`,
        headers: {
          Authorization: `${process.env.REACT_APP_API_STORMGLASS_KEY}`,
        },
      })
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
