/** Import dependancies */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

/** Import middlewares & reducer */
import locationMiddleware from 'src/middlewares/locationMiddleware';
import weatherMiddleware from 'src/middlewares/weatherMiddleware';
import marineWeatherMiddleware from 'src/middlewares/marineWeatherMiddleware';
import tidesMiddleware from 'src/middlewares/tidesMiddleware';

import reducer from 'src/reducers/rootReducer';

const enhancers = composeWithDevTools(
  applyMiddleware(
    locationMiddleware,
    weatherMiddleware,
    marineWeatherMiddleware,
    tidesMiddleware,
    // ... others middlewares
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
