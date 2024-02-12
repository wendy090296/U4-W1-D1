// qui creo la memoria centralizzata dell'applicativo, ovvero il redux store

import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";

const store = configureStore({
  // reducer é obbligatorio
  reducer: mainReducer,
});
export default store;
