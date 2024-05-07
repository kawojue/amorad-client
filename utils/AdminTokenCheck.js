import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { Adminlogout, LogoutAccount } from "@/redux/features/slices/adminAuthSlice";

const AdminTokenCheck = () => {
    const dispatch = useDispatch();

    useEffect(() => {

        const token = Cookies.get("admin_token");
        const expirationDate = Cookies.get("admin_token_exp");

        if (!token || !expirationDate) {
            dispatch(Adminlogout());
            return;
        }

        const interval = setInterval(() => {
            const currentTime = Math.floor(Date.now() / 1000); 
            console.log(currentTime >= expirationDate);
            if (currentTime >= expirationDate) {
                clearInterval(interval);
                dispatch(Adminlogout());
            }
        }, 1000); 

        return () => clearInterval(interval);
    }, [dispatch]);

    return null; 
};

export default AdminTokenCheck;
