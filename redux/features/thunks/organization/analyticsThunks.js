import organizationService from "@/services/organizationService";
import { setAnalytics, setChart } from "../../slices/organization/organizationAnalyticsSlice";

export const fetchAnalyticsData = () => async (dispatch, getState) => {

    const token = getState().organization.organization_auth.token;

    try {

        const response = await organizationService.getAnalytics(token);
        dispatch(setAnalytics(response.data));

    } catch (error) {
        console.error('Error fetching brand data:', error);
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
