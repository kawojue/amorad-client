import axios from "@/utils/axiosConfig";
import Cookies from "js-cookie";

// LOGIN
const adminLogin = async (payload) => {
    const response = await axios.post("/adradospec/login", payload);
    return response.data;
};

function getToken() {
    return Cookies.get('admin_token');
  }

  const authService = {
    adminLogin,
    getToken
};

export default authService;