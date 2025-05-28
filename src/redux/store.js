import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import colorReducer from './colorSlice';

const store = configureStore({
   reducer: {
     cart: cartReducer,
     color: colorReducer,
   },
   devTools: process.env.NODE_ENV !== 'production',
 });

export default store;