/** Import dependancies */
import { connect } from 'react-redux';

/** Import component */
// eslint-disable-next-line import/no-named-as-default
import Home from 'src/pages/Home/index';

/** Import utils */
import {
  capitalizeFirstLetter,
  getWeatherIconUrl,
} from 'src/utils/weather';
import {
  getKmhSpeed,
  getCardinalDirection,
  getWaveDescription,
  getVisibilityText,
} from 'src/utils/marineWeather';

/** Import actions */
import { stopLoading } from 'src/actions/settings';
import { fetchWeather } from 'src/actions/weather';
import { fetchMarineWeather } from 'src/actions/marineWeather';

const mapStateToProps = (state) => ({
  displaySampleData: state.settings.displaySampleData,
  latitude: state.settings.latitude,
  longitude: state.settings.longitude,
  weatherIcon: getWeatherIconUrl(state.weather.weatherIcon),
  weatherText: capitalizeFirstLetter(state.weather.weatherText),
  temperature: `${Math.round(state.weather.temperature)}°`,
  tempFeelsLike: `${Math.round(state.weather.tempFeelsLike)}°`,
  loadingWeather: state.weather.loadingWeather,
  wind: `${getKmhSpeed(state.marineWeather.wind)} km/h`,
  gust: `${getKmhSpeed(state.marineWeather.gust)} km/h`,
  windDirection: getCardinalDirection(state.marineWeather.windDirection),
  waveHeight: getWaveDescription(state.marineWeather.waveHeight),
  seaTemperature: `${Math.round(state.marineWeather.seaTemperature)}°`,
  visibility: getVisibilityText(state.marineWeather.visibility),
  loadingMarineWeather: state.marineWeather.loadingMarineWeather,
});

const mapDispatchToProps = (dispatch) => ({
  fetchWeather: () => {
    dispatch(fetchWeather());
  },
  fetchMarineWeather: () => {
    dispatch(fetchMarineWeather());
  },
  stopLoading: () => {
    dispatch(stopLoading());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
