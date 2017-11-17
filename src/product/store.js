import { createStore, combineReducers } from 'redux';
import { products, visibilityFilter } from './reducers';

const productApp = combineReducers({
  products,
  visibilityFilter,
});
const store = createStore(
  productApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
