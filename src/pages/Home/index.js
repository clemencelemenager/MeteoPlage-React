/** Import dependancies */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

/** Import components */
import Card from 'src/components/Card';
import Location from 'src/components/Location/container';
import Loader from 'src/components/Loader';

/** Import assets */
import './home.scss';
import { truncateNow } from 'src/utils/tides';

const Home = ({
  city,
  weatherIcon,
  weatherText,
  temperature,
  tempFeelsLike,
  wind,
  gust,
  windDirection,
  waveHeight,
  seaTemperature,
  visibility,
  fetchWeather,
  loadingWeather,
  fetchMarineWeather,
  loadingMarineWeather,
  fetchTides,
  firstNextTideState,
  firstNextTideDatetime,
  secondNextTideState,
  secondNextTideDatetime,
  originTidesDataDistance,
  loadingTides,
  displaySampleData,
  stopLoading,
  saveCoordinates,
  saveDailyTides,
}) => {
  /** Load data after first loading */
  useEffect(() => {
    /** if visitor came recently, get its last searched location from local storage */
    if (localStorage.getItem('location') !== null) {
      // console.log(JSON.parse(localStorage.getItem('location')));
      const lastLatitude = JSON.parse(localStorage.getItem('location')).newLatitude;
      const lastLongitude = JSON.parse(localStorage.getItem('location')).newLongitude;
      const lastRegion = JSON.parse(localStorage.getItem('location')).newRegion;
      const lastCity = JSON.parse(localStorage.getItem('location')).newCity;
      saveCoordinates(lastLatitude, lastLongitude, lastCity, lastRegion);
    }
    /** Get weather data from API */
    fetchWeather();

    if (!displaySampleData) {
      fetchMarineWeather();

      /** if visitor already came today for same location, use local storage for tides */
      // console.log(JSON.parse(localStorage.getItem('tides')));
      const now = truncateNow(Date.now());
      const { nextTides } = JSON.parse(localStorage.getItem('tides'));
      const updatedNextTides = nextTides.filter((tide) => tide.timestamp > now);
      const cityLastRequestTides = JSON.parse(localStorage.getItem('tides')).city;
      if (updatedNextTides.length > 0 && cityLastRequestTides === city) {
        saveDailyTides(updatedNextTides);
      }
      /** ...else fetch API */
      else {
        fetchTides();
      }
    }

    /** Demo mode : display sample data and stop loading */
    if (displaySampleData) {
      console.warn('Demo mode : chargement de données exemples');
      stopLoading();
    }
  }, []);

  return (
    <>
      {
        (loadingWeather || loadingMarineWeather || loadingTides) && (<Loader />)
      }
      {
        (!loadingWeather && !loadingMarineWeather && !loadingTides) && (
          <div className="home">
            <Location />
            <div className="card-container">
              <Card
                content="weather"
                icon={weatherIcon}
                text={weatherText}
              />
              <Card
                content="temperature"
                text={temperature}
                additionalText={tempFeelsLike}
              />
              <Card
                content="wind"
                text={[wind, gust]}
                additionalText={windDirection}
              />
              {
                /** if tides origin close enough, display tides */
                (originTidesDataDistance < 10) && (
                  <Card
                    content="tides"
                    text={
                      [
                        firstNextTideState,
                        firstNextTideDatetime,
                        secondNextTideState,
                        secondNextTideDatetime,
                        originTidesDataDistance,
                      ]
                    }
                  />
                )
              }
              {
                /** if tides origin not close enough, display a message */
                (originTidesDataDistance >= 10) && (
                  <Card
                    content="noTides-message"
                    additionalText="Il n'y a pas d'information de marée disponible pour votre position."
                  />
                )
              }
              <Card
                content="sea"
                text={waveHeight}
              />
              <Card
                content="seaTemperature"
                text={seaTemperature}
              />
              <Card
                content="visibility"
                text={visibility}
              />
            </div>
          </div>
        )
      }
    </>
  );
};

Home.propTypes = {
  city: PropTypes.string.isRequired,
  weatherIcon: PropTypes.string.isRequired,
  weatherText: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  tempFeelsLike: PropTypes.string.isRequired,
  wind: PropTypes.string.isRequired,
  gust: PropTypes.string,
  windDirection: PropTypes.string.isRequired,
  waveHeight: PropTypes.string.isRequired,
  seaTemperature: PropTypes.string.isRequired,
  visibility: PropTypes.string.isRequired,
  fetchWeather: PropTypes.func.isRequired,
  fetchMarineWeather: PropTypes.func.isRequired,
  fetchTides: PropTypes.func.isRequired,
  firstNextTideState: PropTypes.string.isRequired,
  firstNextTideDatetime: PropTypes.string.isRequired,
  secondNextTideState: PropTypes.string.isRequired,
  secondNextTideDatetime: PropTypes.string.isRequired,
  loadingWeather: PropTypes.bool.isRequired,
  loadingMarineWeather: PropTypes.bool.isRequired,
  originTidesDataDistance: PropTypes.number.isRequired,
  loadingTides: PropTypes.bool.isRequired,
  displaySampleData: PropTypes.bool.isRequired,
  stopLoading: PropTypes.func.isRequired,
  saveCoordinates: PropTypes.func.isRequired,
  saveDailyTides: PropTypes.func.isRequired,
};

Home.defaultProps = {
  gust: '',
};
export default Home;
