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
    city,
  } = store.getState().settings;

  /** Netlify function to fetch tides for requested position */
  const fetchTidesUrl = `/.netlify/functions/fetchTides?latitude=${latitude}&longitude=${longitude}`;

  switch (action.type) {
    case FETCH_TIDES: {
      axios.get(`${fetchTidesUrl}`)
        .then((response) => {
          // console.log(response.data);
          // eslint-disable-next-line max-len
          const nextTides = response.data.extremes.filter((tide) => tide.datetime > response.data.datetime);
          // eslint-disable-next-line max-len
          const allTides = response.data.heights.filter((tide) => tide.datetime > response.data.datetime);
          const tidesOrigin = response.data.origin;
          // /** save next tides of the day */
          store.dispatch(saveDailyTides(nextTides));
          /** save all tides of the week */
          store.dispatch(saveAllTides(allTides));
          /** save location source of tides data */
          store.dispatch(saveOriginTides(tidesOrigin));
          /** save data in local storage */
          const dateOfTidesRequest = new Date();
          const tidesForLocalStorage = JSON.stringify({
            city, nextTides, allTides, tidesOrigin, dateOfTidesRequest,
          });
          localStorage.setItem('tides', tidesForLocalStorage);
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
