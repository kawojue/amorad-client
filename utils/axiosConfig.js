import axios from "axios";

export default axios.create({
    baseURL: 'https://amorad.onrender.com',
    // baseURL: 'https://9073-129-205-124-192.ngrok-free.app',
    headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    }
})