import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../auth/login/reduxSlice';
export const store = configureStore({
    reducer: {
        login: loginSlice
    }
});
