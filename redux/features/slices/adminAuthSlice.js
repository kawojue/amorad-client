import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const adminAuthSlice = createSlice({
    name: 'admin-auth',
    initialState: {
        token: Cookies.get('admin_token') || '',
        profile: null,
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
                state.user = null
                Cookies.remove('admin_token')
                Cookies.remove('admin_token_exp')
        }
    },
});

export const { setToken, setUser, Adminlogout } = adminAuthSlice.actions;

export default adminAuthSlice.reducer;
