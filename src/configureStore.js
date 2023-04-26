import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import BannerReducer from "./redux/bannerSlice";
import CategoryReducer from  "./redux/categorySlice";

const persitConfig = {
  key: "root",
  storage,
};

export const rootReducers = combineReducers({
  banners: BannerReducer,
  categories: CategoryReducer
});

const persistedReducer = persistReducer(persitConfig, rootReducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export const persistor = persistStore(store);
