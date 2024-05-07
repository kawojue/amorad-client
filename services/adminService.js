import axios from "@/utils/axiosConfig";

const getAnalytics = async (token) => {
    const response = await axios.get(`adradospec/analytics`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const getChart = async (token, payload) => {
    const response = await axios.get(`adradospec/charts?q=${payload}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

  const adminService = {
    getAnalytics,
    getChart
};

export default adminService;