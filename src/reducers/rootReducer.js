/** Import dependancies */
import { combineReducers } from 'redux';

/** Import reducers */
import weatherReducer from './weatherReducer';
import marineWeatherReducer from './marineWeatherReducer';
import settingsReducer from './settingsReducer';
import tidesReducer from './tidesReducer';

export default combineReducers({
  weather: weatherReducer,
  marineWeather: marineWeatherReducer,
  settings: settingsReducer,
  tides: tidesReducer,
});
