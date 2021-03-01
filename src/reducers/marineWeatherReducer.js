/** Import actions */
import {
  SAVE_MARINE_WEATHER,
} from 'src/actions/marineWeather';
import {
  STOP_LOADING,
} from 'src/actions/settings';

const initialState = {
  dateUTC: '',
  wind: 0, // in m/s
  gust: 0, // in m/s
  windDirection: 0, // in degrees
  seaTemperature: 0,
  waveHeight: 0,
  // dataPerHour: [], // data per hour of the day
  loadingMarineWeather: true,
};

/**
 * Calculate which index of windData array is the live information
 * The windData array is sorted by UTC time and begin from 00:00 this day
 * Set -1 to get index for local time in France (+1 UTC)
 */
const now = new Date();
const index = now.getHours() - 1;

function marineWeatherReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_MARINE_WEATHER:
      return {
        ...state,
        wind: action.windData[index].windSpeed.sg,
        gust: action.windData[index].gust.sg,
        seaTemperature: action.windData[index].waterTemperature.sg,
        waveHeight: action.windData[index].waveHeight.sg,
        windDirection: action.windData[index].windDirection.sg,
        dataPerHour: action.windData.slice(0, 25),
        loadingMarineWeather: false,
      };
    case STOP_LOADING:
      return {
        ...state,
        loadingMarineWeather: false,
      };
    default:
      return state;
  }
}

export default marineWeatherReducer;
