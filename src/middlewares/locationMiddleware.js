/** Import dependancies */
import axios from 'axios';

/** Import actions */
import { FETCH_COORDINATES, saveCoordinates } from 'src/actions/settings';
import { fetchWeather } from 'src/actions/weather';
import { fetchMarineWeather } from 'src/actions/marineWeather';
import { fetchTides } from 'src/actions/tides';

const locationMiddleware = (store) => (next) => (action) => {
  const {
    city,
    displaySampleData,
  } = store.getState().settings;

  const fetchCoordinatesUrl = `https://api-adresse.data.gouv.fr/search/?q=${city}&type=municipality&autocomplete=1`;

  switch (action.type) {
    case FETCH_COORDINATES: {
      axios.get(`${fetchCoordinatesUrl}`)
        .then((response) => {
          // console.log(response.data);
          const newCity = response.data.features[0].properties.city;
          const newLatitude = response.data.features[0].geometry.coordinates[1];
          const newLongitude = response.data.features[0].geometry.coordinates[0];
          const newRegion = response.data.features[0].properties.context;
          store.dispatch(saveCoordinates(newLatitude, newLongitude, newCity, newRegion));
          /** Update data with new coordinates (if demo mode desactivated) */
          store.dispatch(fetchWeather());
          if (!displaySampleData) {
            store.dispatch(fetchTides());
            store.dispatch(fetchMarineWeather());
          }
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default locationMiddleware;
