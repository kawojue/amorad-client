import axios from "axios";

export default axios.create({
    baseURL: 'https://amorad.onrender.com',
    headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    }
})