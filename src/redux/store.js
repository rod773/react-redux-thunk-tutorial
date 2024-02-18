import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import reducers from "./reducers/index";

const store = createStore(
  reducers,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
