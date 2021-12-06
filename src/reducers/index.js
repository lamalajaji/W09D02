import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";


const reducers = combineReducers({ users, todos });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
