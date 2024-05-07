import { combineReducers, configureStore } from '@reduxjs/toolkit';
import adminAuthSlice from './features/slices/adminAuthSlice';
import analyticsSlice from './features/slices/admin/analyticsSlice';

const rootReducer = combineReducers({
    admin: combineReducers({
        admin_auth: adminAuthSlice,
        analytics: analyticsSlice,
    }),
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});
