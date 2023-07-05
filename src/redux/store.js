import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import BannerReducer from "./bannerSlice";
import CategoryReducer from  "./categorySlice";
import CollectionReducer from "./collectionSlice";
import ProductReducer from "./productSlice";
import ShopReducer from "./shopSlice";
import UserReducer from "./userSlice"

const persitConfig = {
  key: "root",
  storage,
};

export const rootReducers = combineReducers({
  banners: BannerReducer,
  categories: CategoryReducer,
  collections: CollectionReducer,
  products: ProductReducer,
  shop: ShopReducer,
  user: UserReducer
});

const persistedReducer = persistReducer(persitConfig, rootReducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export const persistor = persistStore(store);
