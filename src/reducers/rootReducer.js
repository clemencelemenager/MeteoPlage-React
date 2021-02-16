/** Import dependancies */
import { combineReducers } from 'redux';

/** Import reducers */
import weatherReducer from './weatherReducer';
import marineWeatherReducer from './marineWeatherReducer';
import settingsReducer from './settingsReducer';

export default combineReducers({
  weather: weatherReducer,
  marineWeather: marineWeatherReducer,
  settings: settingsReducer,
});
