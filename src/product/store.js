import { createStore } from "redux";
import { product } from "./reducers";

const store = createStore(
  product,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
