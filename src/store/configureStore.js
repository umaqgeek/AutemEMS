import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware
} from 'redux';
import Thunker from 'redux-thunk';

import eventsReducer from './reducers/events';
import alumnisReducer from './reducers/alumnis';

const rootReducer = combineReducers({
  eventData: eventsReducer,
  alumniData: alumnisReducer
});

let composeEnhancers = compose;

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(Thunker)));
};

export default configureStore;
