import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "../reducers/auth.reducer";
// import userReducer from "../reducers/user.reducer.js";
// import authReducer from "../reducers/auth.reducer.js";
// import loaderReducer from "../reducers/loader.reducer.js";
// import modalReducer from "../reducers/modal.reducer.jsx";
// import statusModalReducer from "../reducers/sucess.reducer.js";
// import recordsReducer from "../reducers/record.reducer.js";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["modal", "statusModal", "records"],
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
