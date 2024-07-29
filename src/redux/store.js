import { configureStore } from "@reduxjs/toolkit";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { fashionShopApi } from "./services/api";
import authReducer from "./authSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const authConfig = {
  key: "auth",
  storage,
};

const authPersistedReducer = persistReducer(authConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    [fashionShopApi.reducerPath]: fashionShopApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      fashionShopApi.middleware
    ),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
