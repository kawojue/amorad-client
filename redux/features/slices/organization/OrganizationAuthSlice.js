import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const profile = Cookies.get('organization_profile') || null;
const user = JSON.parse(profile)

const organizationAuthSlice = createSlice({
    name: 'organization_auth',
    initialState: {
        token: Cookies.get('organization_token') || '',
        profile: user || null,
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setOrganization: (state, action) => {
            state.profile = action.payload;
        },
        OrganizationLogout: (state) => {
            state.token = null,
                state.profile = null
            Cookies.remove('organization_token')
            Cookies.remove('organization_token_exp')
            Cookies.remove('organization_profile')
        }
    },
});

export const { setToken, setOrganization, OrganizationLogout } = organizationAuthSlice.actions;
export const getOrganizationProfile = (state) => state.organization.organization_auth.profile;
export const getOrganizationToken = (state) => state.organization.organization_auth.token;
export const getRole = (state) => state.organization.organization_auth.profile.role;

export default organizationAuthSlice.reducer;
