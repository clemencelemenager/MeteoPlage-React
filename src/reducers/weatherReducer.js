/** Import actions */
import {
  SAVE_WEATHER,
} from 'src/actions/weather';

const initialState = {
  weatherIcon: '',
  weatherText: 'Il fait beau',
  temperature: 15,
  tempFeelsLike: 10,
  loadingWeather: true,
};

function weatherReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_WEATHER: {
      return {
        ...state,
        weatherIcon: action.weatherData.current.weather[0].icon,
        weatherText: action.weatherData.current.weather[0].description,
        temperature: action.weatherData.current.temp,
        loadingWeather: false,
      };
    }
    default:
      return state;
  }
}

export default weatherReducer;
