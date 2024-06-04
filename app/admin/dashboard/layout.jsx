'use client'

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getProfile, getToken } from '@/redux/features/slices/adminAuthSlice';
import useAuthMiddleware from '@/middleware/adminAuthMiddleware';
import NavBar from '@/components/dashboard/admin/Navbar';
import SideBar from '@/components/dashboard/admin/SideBar';
import AdminTokenCheck from '@/utils/AdminTokenCheck';

const DashboardLayout = ({ children }) => {

    const router = useRouter();
    const { isAuthenticated, checkAuthorization } = useAuthMiddleware();
    const [open, setOpen] = useState(false);

    const token = useSelector(getToken);
    const profile = useSelector(getProfile) || {};

    useEffect(() => {
        const redirectToLogin = async () => {
            if (!isAuthenticated() || !checkAuthorization()) {
                await router.replace('/admin/login');
            }
        };

        redirectToLogin();
    }, [isAuthenticated, checkAuthorization, router]);

        AdminTokenCheck(token);

    return (
        isAuthenticated() && checkAuthorization() ? (
            <div className='m-0 text-base antialiased'>
                <SideBar user={profile} open={open} setOpen={setOpen} />
                <main className="relative h-full max-h-screen transition-all duration-200 ease-soft-in-out xl:ml-[16rem] 2xl:ml-[16rem]">
                    <NavBar user={profile} open={open} setOpen={setOpen} />
                    <div className="w-full p-3 md:p-6 m-auto bg-[#FAFAFA]">
                        {children}
                    </div>
                </main>
            </div>
        ) : null
    );
};

export default DashboardLayout;
