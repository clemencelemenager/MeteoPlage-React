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
import {
  translateTideType,
  getTideTime,
} from 'src/utils/tides';

/** Import actions */
import { stopLoading, saveCoordinates } from 'src/actions/settings';
import { fetchWeather } from 'src/actions/weather';
import { fetchMarineWeather } from 'src/actions/marineWeather';
import { fetchTides, saveDailyTides } from 'src/actions/tides';

const mapStateToProps = (state) => ({
  // state from settings reducer
  displaySampleData: state.settings.displaySampleData,
  latitude: state.settings.latitude,
  longitude: state.settings.longitude,
  city: state.settings.city,
  // state from weather reducer
  weatherIcon: getWeatherIconUrl(state.weather.weatherIcon),
  weatherText: capitalizeFirstLetter(state.weather.weatherText),
  temperature: `${Math.round(state.weather.temperature)}°`,
  tempFeelsLike: `${Math.round(state.weather.tempFeelsLike)}°`,
  visibility: getVisibilityText(state.weather.visibility),
  loadingWeather: state.weather.loadingWeather,
  // state from marineWeather reducer
  wind: `${getKmhSpeed(state.marineWeather.wind)} km/h`,
  gust: `${getKmhSpeed(state.marineWeather.gust)} km/h`,
  windDirection: getCardinalDirection(state.marineWeather.windDirection),
  waveHeight: getWaveDescription(state.marineWeather.waveHeight),
  seaTemperature: `${Math.round(state.marineWeather.seaTemperature)}°`,
  loadingMarineWeather: state.marineWeather.loadingMarineWeather,
  // state from tides reducer
  firstNextTideState: translateTideType(state.tides.firstNextTide.state),
  firstNextTideDatetime: getTideTime(state.tides.firstNextTide.datetime),
  secondNextTideState: translateTideType(state.tides.secondNextTide.state),
  secondNextTideDatetime: getTideTime(state.tides.secondNextTide.datetime),
  secondNextTide: state.tides.secondNextTide,
  originTidesDataDistance: state.tides.originTidesData.distance,
  loadingTides: state.tides.loadingTides,
});

const mapDispatchToProps = (dispatch) => ({
  fetchWeather: () => {
    dispatch(fetchWeather());
  },
  fetchMarineWeather: () => {
    dispatch(fetchMarineWeather());
  },
  fetchTides: () => {
    dispatch(fetchTides());
  },
  stopLoading: () => {
    dispatch(stopLoading());
  },
  saveCoordinates: (latitude, longitude, city, region) => {
    dispatch(saveCoordinates(latitude, longitude, city, region));
  },
  saveDailyTides: (nextTides) => {
    dispatch(saveDailyTides(nextTides));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
