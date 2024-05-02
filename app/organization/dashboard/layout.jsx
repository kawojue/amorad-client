'use client'

import NavBar from "@/components/dashboard/organization/Navbar";
import SideBar from "@/components/dashboard/organization/SideBar";
import { useState } from "react";

const DashboardLayout = ({ children }) => {

    const [open, setOpen] = useState(false);

    return (
        <div className='m-0 text-base antialiased'>

            <SideBar open={open} setOpen={setOpen} />

            <main className="relative h-full max-h-screen transition-all duration-200 ease-soft-in-out xl:ml-[16rem] 2xl:ml-[16rem]">

                <NavBar open={open} setOpen={setOpen} />

                <div className="w-full p-3 md:p-6 m-auto bg-white">
                    {children}
                </div>
                
            </main>
        </div>
    );
};

export default DashboardLayout;
