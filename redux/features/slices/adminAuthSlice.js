import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const adminAuthSlice = createSlice({
    name: 'admin_auth',
    initialState: {
        token: Cookies.get('admin_token') || '',
        profile: Cookies.get('admin_profile') || null,
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setUser: (state, action) => {
            state.profile = action.payload;
        },
        Adminlogout: (state) => {
                state.token = null,
                state.profile = null
                Cookies.remove('admin_token')
                Cookies.remove('admin_token_exp')
                Cookies.remove('admin_profile')
        }
    },
});

export const { setToken, setUser, Adminlogout } = adminAuthSlice.actions;
export const getProfile = (state) => state.admin_auth.profile;

export default adminAuthSlice.reducer;
