import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "./user-slice";
import membersReducer from "./member-slice";

const reducer = combineReducers({
  user: userReducer,
  members: membersReducer,
});

const store = configureStore({
  reducer,
});

export default store;
