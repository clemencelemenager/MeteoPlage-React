/** Import dependancies */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

/** Import middlewares & reducer */
import weatherMiddleware from 'src/middlewares/weatherMiddleware';
import marineWeatherMiddleware from 'src/middlewares/marineWeatherMiddleware';
import reducer from 'src/reducers/rootReducer';

const enhancers = composeWithDevTools(
  applyMiddleware(
    weatherMiddleware,
    marineWeatherMiddleware,
    // ... others middlewares
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
