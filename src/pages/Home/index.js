/** Import dependancies */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

/** Import components */
import Card from 'src/components/Card';
import Location from 'src/components/Location';
import Loader from 'src/components/Loader';

/** Import assets */
import './home.scss';

const Home = ({
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
  displaySampleData,
  stopLoading,
}) => {
  /** Load data */
  useEffect(() => {
    fetchWeather();
    if (!displaySampleData) {
      fetchMarineWeather();
    }
    /** Demo mode : display sample data and stop loading */
    if (displaySampleData) {
      console.warn('Chargement de données exemples');
      stopLoading();
    }
  }, []);

  return (
    <>
      {
        (loadingWeather || loadingMarineWeather) && (<Loader />)
      }
      {
        (!loadingWeather && !loadingMarineWeather) && (
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
              <Card
                content="tides"
                text="Tides information - soon coming"
              />
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
  loadingWeather: PropTypes.bool.isRequired,
  loadingMarineWeather: PropTypes.bool.isRequired,
  displaySampleData: PropTypes.bool.isRequired,
  stopLoading: PropTypes.func.isRequired,
};

Home.defaultProps = {
  gust: '',
};
export default Home;
