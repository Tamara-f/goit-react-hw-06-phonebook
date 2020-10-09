import { createStore, combineReducers } from 'redux';
import phoneReducer from './phoneReducer';

const rootReducer = combineReducers({
  contacts: phoneReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
