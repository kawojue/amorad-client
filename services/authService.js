import axios from "@/utils/axiosConfig";

// LOGIN
const adminLogin = async (payload) => {
    const response = await axios.post("/adradospec/login", payload);
    return response.data;
};

// REGISTER ORGANIZATION
const registerOrganization = async (payload) => {
    const response = await axios.post("/auth/register/organization", payload);
    return response.data;
};

// REGISTER practitioner
const registerPractitioner = async (payload) => {
    const response = await axios.post("/auth/register/practitioner", payload);
    return response.data;
};

// FORGOTTEN PASSWORD
const forgottenPassword = async (payload) => {
    const response = await axios.patch("/auth/reset-password", payload);
    return response.data;
};

  const authService = {
    adminLogin,
    registerPractitioner,
    registerOrganization,
    forgottenPassword
};

export default authService;