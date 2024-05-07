import adminService from "@/services/adminService";
import { setAnalytics, setChart } from "../../slices/admin/analyticsSlice";

export const fetchAnalyticsData = () => async (dispatch, getState) => {

    const token = getState().admin.admin_auth.token;

    try {

        const response = await adminService.getAnalytics(token);
        dispatch(setAnalytics(response.data));

    } catch (error) {
        console.error('Error fetching brand data:', error);
    }
};

export const fetchChartData = (payload) => async (dispatch, getState) => {

    const token = getState().admin.admin_auth.token;
    console.log(payload);

    try {

        const response = await adminService.getChart(token, payload);
        dispatch(setChart(response.data));

    } catch (error) {
        console.error('Error fetching brand data:', error);
    }
};
