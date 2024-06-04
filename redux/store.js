import { combineReducers, configureStore } from '@reduxjs/toolkit';
import adminAuthSlice from './features/slices/adminAuthSlice';
import analyticsSlice from './features/slices/admin/analyticsSlice';
import stepSlice from './features/slices/stepSlice';
import OrganizationAuthSlice from './features/slices/organization/OrganizationAuthSlice';

const rootReducer = combineReducers({
    admin: combineReducers({
        admin_auth: adminAuthSlice,
        analytics: analyticsSlice,
    }),
    organization: combineReducers({
        organization_auth: OrganizationAuthSlice,
        analytics: null,
    }),
    auth_step: stepSlice
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});
