import organizationService from "@/services/organizationService";
import { setAnalytics, setChart, setDoctors, setReport } from "../../slices/organization/organizationAnalyticsSlice";

export const fetchAnalyticsData = () => async (dispatch, getState) => {

    const token = getState().organization.organization_auth.token;

    try {

        const response = await organizationService.getAnalytics(token);
        dispatch(setAnalytics(response.data));

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export const fetchDoctors = () => async (dispatch, getState) => {

    const token = getState().organization.organization_auth.token;

    try {

        const response = await organizationService.getStaffs(token, { role: 'doctor' });
        console.log(response.data);
        dispatch(setDoctors(response.data));

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export const fetchReportAnalytics = () => async (dispatch, getState) => {

    const token = getState().organization.organization_auth.token;

    try {

        const response = await organizationService.getReportAnalytics(token);
        dispatch(setReport(response.data));

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export const fetchChartData = (payload) => async (dispatch, getState) => {

    const token = getState().organization.organization_auth.token;

    try {

        const response = await organizationService.getChart(token, payload);
        dispatch(setChart(response.data));

    } catch (error) {
        console.error('Error fetching brand data:', error);
    }
};
