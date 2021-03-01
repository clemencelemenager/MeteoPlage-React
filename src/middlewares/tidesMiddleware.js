/** Import dependancies */
import axios from 'axios';

/** Import actions */
import {
  FETCH_TIDES,
  saveDailyTides,
  saveAllTides,
  saveOriginTides,
} from 'src/actions/tides';

const tidesMiddleware = (store) => (next) => (action) => {
  const {
    latitude,
    longitude,
  } = store.getState().settings;

  /** Netlify function to fetch tides for requested position */
  const fetchTidesUrl = `/.netlify/functions/fetchTides?latitude=${latitude}&longitude=${longitude}`;

  switch (action.type) {
    case FETCH_TIDES: {
      axios.get(`${fetchTidesUrl}`)
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveDailyTides(response.data.extremes));
          store.dispatch(saveAllTides(response.data.heights));
          store.dispatch(saveOriginTides(response.data.origin));
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
export default tidesMiddleware;
