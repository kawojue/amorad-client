'use client'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { Adminlogout } from "@/redux/features/slices/adminAuthSlice";
import { OrganizationLogout } from "@/redux/features/slices/organization/OrganizationAuthSlice";

const OrganizationTokenCheck = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        const token = Cookies.get("organization_token");
        const expirationDate = Cookies.get("organization_token_exp");

        if (!token || !expirationDate) {
            dispatch(Adminlogout());
            return;
        }

        const interval = setInterval(() => {
            const currentTime = Math.floor(Date.now() / 1000);
            if (currentTime >= expirationDate) {
                clearInterval(interval);
                dispatch(OrganizationLogout());
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [dispatch]);

    return null;
};

export default OrganizationTokenCheck;
