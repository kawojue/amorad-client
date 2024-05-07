import { combineReducers, configureStore } from '@reduxjs/toolkit'
import adminAuthSlice from './features/slices/adminAuthSlice'

export const store = () => {

    const reducers = combineReducers({
        admin_auth: adminAuthSlice ,
      })

    return configureStore({
        reducer: reducers,
        devTools: process.env.NODE_ENV !== 'production',
    })
}