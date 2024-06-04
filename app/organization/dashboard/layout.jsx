'use client'

import NavBar from "@/components/dashboard/organization/Navbar";
import SideBar from "@/components/dashboard/organization/SideBar";
import useAuthMiddleware from "@/middleware/organizationAuthMiddleware";
import { getOrganizationProfile, getOrganizationToken } from "@/redux/features/slices/organization/OrganizationAuthSlice";
import OrganizationTokenCheck from "@/utils/OrganizationTokenCheck";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DashboardLayout = ({ children }) => {

    const router = useRouter();
    const { isAuthenticated, checkAuthorization } = useAuthMiddleware();
    const [open, setOpen] = useState(false);

    const token = useSelector(getOrganizationToken);
    const profile = useSelector(getOrganizationProfile) || {};

    useEffect(() => {
        const redirectToLogin = async () => {
            if (!isAuthenticated() || !checkAuthorization()) {
                await router.replace('/auth/signup');
            }
        };

        redirectToLogin();
    }, [isAuthenticated, checkAuthorization, router]);

    OrganizationTokenCheck(token);

    return (
        isAuthenticated() && checkAuthorization() ? (
            <div className='m-0 text-base antialiased'>

                <SideBar user={profile} open={open} setOpen={setOpen} />

                <main className="relative h-full max-h-screen transition-all duration-200 ease-soft-in-out xl:ml-[16rem] 2xl:ml-[16rem]">

                    <NavBar user={profile} open={open} setOpen={setOpen} />

                    <div className="w-full p-3 md:p-6 m-auto bg-[#F0F2F5] min-h-screen">
                        {children}
                    </div>

                </main>
            </div>
        ) : null
    );
};

export default DashboardLayout;
