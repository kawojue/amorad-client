import { createSlice } from '@reduxjs/toolkit';

const OrgAnalyticsSlice = createSlice({
  name: 'organization_analytics',
  initialState: {
    analytics: null,
    chart: null,
  },
  reducers: {
    setAnalytics: (state, action) => {
      state.analytics = action.payload;
    },
    setChart: (state, action) => {
      state.chart = action.payload;
    },
  },
});

export const {
    setAnalytics, setChart
} = OrgAnalyticsSlice.actions;

export const getAnalyticsData = (state) => state.organization.analytics.analytics;
export const getChartData = (state) => state.organization.analytics.chart;


export default OrgAnalyticsSlice.reducer;
