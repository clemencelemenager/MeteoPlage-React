/** Import dependancies */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

/** Import components */
import Card from 'src/components/Card';
import Location from 'src/components/Location/container';
import Loader from 'src/components/Loader';

/** Import assets */
import './home.scss';

const Home = ({
  latitude,
  longitude,
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
}) => {
  /** Load data after first loading */
  useEffect(() => {
    /** if visitor came recently, get its last location from local storage */
    console.log(localStorage.getItem('location'));
    if (localStorage.getItem('location') !== null) {
      const lastLatitude = JSON.parse(localStorage.getItem('location')).newLatitude;
      const lastLongitude = JSON.parse(localStorage.getItem('location')).newLongitude;
      const lastRegion = JSON.parse(localStorage.getItem('location')).newRegion;
      const lastCity = JSON.parse(localStorage.getItem('location')).newCity;
      saveCoordinates(lastLatitude, lastLongitude, lastCity, lastRegion);
    }
    fetchWeather();
    if (!displaySampleData) {
      fetchMarineWeather();
      /** if visitor came recently for same location, use tides information from local storage */
      if (latitude === localStorage.getItem('latitude') && longitude === localStorage.getItem('longitude')) {
        // TODO
      }
      /** ...else fetch API */
      fetchTides();
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
  latitude: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  longitude: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
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
};

Home.defaultProps = {
  gust: '',
};
export default Home;
