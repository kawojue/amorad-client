import { createSlice } from '@reduxjs/toolkit';

const initialPractitionerState = {
    password: '',
    fullname: '',
    email: '',
    phone: '',
    affiliation: '',
    practiceNumber: '',
};

const initialOrganizationState = {
    password: '',
    fullname: '',
    organizationName: '',
    email: '',
    phone: '',
};

const stepSlice = createSlice({
    name: 'auth_step',
    initialState: {
        practitioner: initialPractitionerState,
        organization: initialOrganizationState
    },
    reducers: {
        updatePractitioner(state, action) {
            state.practitioner = { ...state.practitioner, ...action.payload };
        },
        updateOrganization(state, action) {
            console.log(action.payload);
            state.organization = { ...state.organization, ...action.payload };
        },
        resetPractitioner(state) {
            state.practitioner = initialPractitionerState;
        },
        resetOrganization(state) {
            state.organization = initialOrganizationState;
        }
    }
});

export const { updatePractitioner,
    updateOrganization,
    resetPractitioner,
    resetOrganization } = stepSlice.actions;
export const getOrganization = (state) => state.auth_step.organization;
export const getPractitioner = (state) => state.auth_step.practitioner;
export default stepSlice.reducer;
