import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';

import thunk from 'redux-thunk';
import IPReducers from './reducers/ip-info';
import WeatherReducers from './reducers/weather-info';

const reducers = combineReducers({ IPReducers, WeatherReducers });

function configureStore() {
  const store = createStore(reducers, applyMiddleware(thunk));
  return store;
}

export default configureStore();
