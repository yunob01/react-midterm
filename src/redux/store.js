import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './cartSlice';
import colorReducer from './colorSlice';
import usersReducer from './usersSlice'; // ✅ 加入 users reducer（非 persist）

// persist 設定
const cartPersistConfig = {
  key: 'cart',
  storage,
};

const colorPersistConfig = {
  key: 'color',
  storage,
};

// persist 封裝 reducer
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);
const persistedColorReducer = persistReducer(colorPersistConfig, colorReducer);

// 建立 store
export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    color: persistedColorReducer,
    users: usersReducer, // ✅ 不需要 persist 的 slice
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// 匯出 persist 控制器
export const persistor = persistStore(store);
