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
  loadingTides,
  displaySampleData,
  stopLoading,
}) => {
  /** Load data after first loading */
  useEffect(() => {
    fetchWeather();
    if (!displaySampleData) {
      fetchMarineWeather();
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
              <Card
                content="tides"
                text={
                  [
                    firstNextTideState,
                    firstNextTideDatetime,
                    secondNextTideState,
                    secondNextTideDatetime,
                  ]
                }
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
  fetchTides: PropTypes.func.isRequired,
  firstNextTideState: PropTypes.string.isRequired,
  firstNextTideDatetime: PropTypes.string.isRequired,
  secondNextTideState: PropTypes.string.isRequired,
  secondNextTideDatetime: PropTypes.string.isRequired,
  loadingWeather: PropTypes.bool.isRequired,
  loadingMarineWeather: PropTypes.bool.isRequired,
  loadingTides: PropTypes.bool.isRequired,
  displaySampleData: PropTypes.bool.isRequired,
  stopLoading: PropTypes.func.isRequired,
};

Home.defaultProps = {
  gust: '',
};
export default Home;
