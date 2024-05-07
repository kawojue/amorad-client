import axios from "@/utils/axiosConfig";

// LOGIN
const adminLogin = async (payload) => {
    const response = await axios.post("/adradospec/login", payload);
    return response.data;
};

function getToken() {
    return localStorage.getItem('token');
  }

  const authService = {
    adminLogin
};

export default authService;