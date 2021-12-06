import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Users from "./users";
import Todos from "./list";

const reducers = combineReducers({ users, todos });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
