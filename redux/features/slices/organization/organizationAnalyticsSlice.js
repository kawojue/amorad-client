import { createSlice } from '@reduxjs/toolkit';

const OrgAnalyticsSlice = createSlice({
  name: 'organization_analytics',
  initialState: {
    analytics: null,
    chart: null,
    report: null,
    doctors: null,
  },
  reducers: {
    setAnalytics: (state, action) => {
      state.analytics = action.payload;
    },
    setChart: (state, action) => {
      state.chart = action.payload;
    },
    setReport: (state, action) => {
      state.report = action.payload;
    },
    setDoctors: (state, action) => {
      state.doctors = action.payload;
    },
  },
});

export const {
    setAnalytics, setChart, setReport, setDoctors
} = OrgAnalyticsSlice.actions;

export const getAnalyticsData = (state) => state.organization.analytics.analytics;
export const getChartData = (state) => state.organization.analytics.chart;
export const getReport = (state) => state.organization.analytics.report;
export const getDoctors = (state) => state.organization.analytics.doctors;


export default OrgAnalyticsSlice.reducer;
