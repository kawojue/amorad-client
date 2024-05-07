'use client'

import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getProfile, getToken } from "@/redux/features/slices/adminAuthSlice";
import useAuthMiddleware from "@/middleware/adminAuthMiddleware";
import NavBar from "@/components/dashboard/admin/Navbar";
import SideBar from "@/components/dashboard/admin/SideBar";
import AdminTokenCheck from "@/utils/AdminTokenCheck";

const DashboardLayout = ({ children }) => {

    const { isAuthenticated, checkAuthorization } = useAuthMiddleware();

    const token = useSelector(getToken);
    AdminTokenCheck(token);

    const profile = useSelector(getProfile) || {};

    useEffect(() => {
        if (!isAuthenticated() || !checkAuthorization()) {
            redirect('/admin/login');
        }
    }, [isAuthenticated, checkAuthorization, redirect]);

    return isAuthenticated() && checkAuthorization() ? (
        <div className='m-0 text-base antialiased'>
            <SideBar user={profile} />
            <main className="relative h-full max-h-screen transition-all duration-200 ease-soft-in-out xl:ml-[16rem] 2xl:ml-[16rem]">
                <NavBar user={profile} />
                <div className="w-full p-3 md:p-6 m-auto bg-[#FAFAFA]">
                    {children}
                </div>
            </main>
        </div>
    ) : null;
};

export default DashboardLayout;
