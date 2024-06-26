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

const getFacilities = async (token, query) => {
    const response = await axios.get('adradospec/facilities', {
        params: query,
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const getFacitlity = async (id, token) => {
    const response = await axios.get(`/adradospec/facilities/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const toggleFacilites = async (payload, token) => {
    const response = await axios.patch(`/adradospec/facilities/${payload?.id }/toggle-status?status=${payload?.status}`, { },
        {
            headers: { Authorization: `Bearer ${token}` }
        });
    return response.data;
};

const getPractitioners = async (token, query) => {
    const response = await axios.get('/adradospec/practitioners', {
        params: query,
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const getPractitioner = async (id, token) => {
    const response = await axios.get(`/adradospec/practitioners/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const togglePractitioners = async (payload, token) => {
    const response = await axios.patch(`/adradospec/practitioners/${payload?.practitionerId }/toggle-status?status=${payload?.status}`, { },
        {
            headers: { Authorization: `Bearer ${token}` }
        });
    return response.data;
};

const getMembers = async (token) => {
    const response = await axios.post('/adradospec/fetch-members', {}, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const inviteMember = async (payload, token) => {
    const response = await axios.post("/adradospec/invite-member", payload, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const changePassword = async (payload, token) => {
    const response = await axios.patch("/auth/change-password", payload, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const uploadProfileImage = async (payload, token) => {
    const response = await axios.put("/auth/upload/profile-photo", payload, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    });
    return response.data;
};

const adminService = {
    getAnalytics,
    getChart,
    getFacilities,
    getPractitioners,
    getMembers,
    inviteMember,
    changePassword,
    uploadProfileImage,
    togglePractitioners,
    toggleFacilites,
    getPractitioner,
    getFacitlity
};

export default adminService;