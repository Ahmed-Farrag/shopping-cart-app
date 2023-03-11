import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./Reducer/Reducer";
import reduxThunk from "redux-thunk";
const initState = {};
const enhancer = window.__REDUX_DEVTOOLS_EXTINTION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initState,
  enhancer(applyMiddleware(reduxThunk))
);
export default store;
