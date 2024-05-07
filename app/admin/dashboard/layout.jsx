'use client'

import NavBar from "@/components/dashboard/admin/Navbar";
import SideBar from "@/components/dashboard/admin/SideBar";
import useAuthMiddleware from "@/middleware/adminAuthMiddleware";
import { getProfile } from "@/redux/features/slices/adminAuthSlice";
import AdminTokenCheck from "@/utils/AdminTokenCheck";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

const DashboardLayout = ({ children }) => {

    const { isAuthenticated, checkAuthorization } = useAuthMiddleware();
    const router = useRouter();
    const { admin_token } = useSelector((state) => state.admin.admin_auth);

    AdminTokenCheck(admin_token);

    const [open, setOpen] = useState(false);

    if (!isAuthenticated() || !checkAuthorization()) {
        router.replace('/admin/login');
    }

    const profile = useSelector(getProfile) || {}; // Set a default empty object if getProfile returns falsy
    const user = profile;    
    console.log(user);

    return (
        <div className='m-0 text-base antialiased'>

            <SideBar user={user} open={open} setOpen={setOpen} />

            <main className="relative h-full max-h-screen transition-all duration-200 ease-soft-in-out xl:ml-[16rem] 2xl:ml-[16rem]">

                <NavBar user={user} open={open} setOpen={setOpen} />

                <div className="w-full p-3 md:p-6 m-auto bg-[#FAFAFA]">
                    {children}
                </div>

            </main>
        </div>
    );
};

export default DashboardLayout;
