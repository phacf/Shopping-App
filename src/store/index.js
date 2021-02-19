import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from "./ducks";

const reducers = combineReducers({
  reducer: Reducer,
});

const store = createStore(reducers, applyMiddleware(thunk))

export default store