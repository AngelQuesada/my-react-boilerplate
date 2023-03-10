import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { myAppSlice } from './myapp/myAppSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
		myApp: myAppSlice.reducer
  }
});