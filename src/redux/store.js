import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { fashionShopApi } from "./services/api";
import authReducer from "./authSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const persitConfig = {
  key: "root",
  storage,
};

export const rootReducers = combineReducers({
  auth: authReducer,
  [fashionShopApi.reducerPath]: fashionShopApi.reducer,
});

const persistedReducer = persistReducer(persitConfig, rootReducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fashionShopApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
