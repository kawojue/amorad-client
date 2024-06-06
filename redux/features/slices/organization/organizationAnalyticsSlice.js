import { createSlice } from '@reduxjs/toolkit';

const OrgAnalyticsSlice = createSlice({
  name: 'organization_analytics',
  initialState: {
    analytics: null,
    chart: null,
    report: null,
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
  },
});

export const {
    setAnalytics, setChart, setReport
} = OrgAnalyticsSlice.actions;

export const getAnalyticsData = (state) => state.organization.analytics.analytics;
export const getChartData = (state) => state.organization.analytics.chart;
export const getReport = (state) => state.organization.analytics.report;


export default OrgAnalyticsSlice.reducer;
