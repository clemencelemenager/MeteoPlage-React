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
          // console.log(response.data);
          /** save next tides of the day */
          // eslint-disable-next-line max-len
          const nextTides = response.data.extremes.filter((tide) => tide.datetime > response.data.datetime);
          store.dispatch(saveDailyTides(nextTides));
          /** save all tides of the week */
          store.dispatch(saveAllTides(response.data.heights));
          /** save location source of tides data */
          store.dispatch(saveOriginTides(response.data.origin));
          /** save data in local storage */
          localStorage.setItem('tidesOfTheDay', nextTides);
          localStorage.setItem('allTides', response.data.heights);
          localStorage.setItem('tidesOrigin', response.data.origin);
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
