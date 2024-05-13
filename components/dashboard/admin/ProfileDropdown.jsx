import React, { useEffect, useRef, useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { Adminlogout } from '@/redux/features/slices/adminAuthSlice';
import Avatar from '@/components/Avatar';
import Image from 'next/image';

const ProfileDropdown = ({ user }) => {

    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()

    const avatar = user?.avatar

    const toggleDropdown = () => {
        setOpen(!open);
    };

    // USE REF AND OUTSIDE CLICK
    const profileMenu = useRef(null);

    const handleClickOutside = (event) => {
        if (profileMenu.current && !profileMenu.current.contains(event.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        // Add event listener to detect clicks outside of the mega menu
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Remove the event listener when the component unmounts
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const closeDropdown = () => {
        setTimeout(() => {
            setOpen(false);
        }, 500);
    };

    return (
        <div ref={profileMenu} className="relative inline-flex">

            <div onClick={toggleDropdown} className="flex items-center gap-x-2 cursor-pointer w-full">

                {avatar ? (

                    <Image className="inline-block h-[2rem] w-[2rem] object-cover mb-0 pb-0 rounded-full" src={avatar.url} width={500} height={500} alt="Profile Image" />

                ) : (

                    <Avatar name={user?.fullname} size="h-9 w-9" bgColor="bg-primary" textColor="text-white" fontSize="text-[12px]" />

                )}

                <div className="flex-1 tracking-tighter hidden sm:block">
                    <span className='text-dark text-xs font-semibold overflow-hidden whitespace-nowrap overflow-ellipsis'> {user?.fullname} </span>
                    <p className='text-textColor text-[11px] font-light -mt-2 overflow-hidden whitespace-nowrap overflow-ellipsis'> {user?.email} </p>
                </div>

                <div className="hidden sm:block">
                    {open ? (
                        <ChevronUpIcon className="h-3.5 w-3.5 text-black" />
                    ) : (
                        <ChevronDownIcon className="h-3.5 w-3.5 text-black" />
                    )}
                </div>

            </div>

            <div className={`z-10 duration-300 ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 pointer-events-none -translate-y-2'}  right-1 top-12 bg-white rounded-lg shadow min-w-52 absolute py-4`}>

                <div className="border-b border-[#5862831A] pb-4 mb-3">

                    <div className="flex items-center gap-x-3 px-4">

                        {avatar ? (

                            <Image className="inline-block h-[2rem] w-[2rem] object-cover mb-0 pb-0 rounded-full" src={avatar.url} width={32} height={32} alt="Profile Image" />

                        ) : (

                            <Avatar name={user?.fullname} size="h-9 w-9" bgColor="bg-primary" textColor="text-white" fontSize="text-[12px]" />

                        )}

                        <div className="flex-1 tracking-tight">
                            <div className='text-dark text-xs font-semibold overflow-hidden whitespace-nowrap overflow-ellipsis'> {user?.fullname} </div>
                            <p className='text-textColor text-[11px] font-light -mt-2 overflow-hidden whitespace-nowrap overflow-ellipsis'> {user?.email} </p>
                        </div>

                    </div>

                </div>

                <div className="px-4 space-y-3">

                    <Link onClick={closeDropdown} href="/admin/dashboard/settings" class="block w-full cursor-pointer text-textColor hover:text-dark">
                        Account Settings
                    </Link>

                    <Link onClick={closeDropdown} href="#" class="block w-full cursor-pointer text-textColor hover:text-dark">
                        Help Desk
                    </Link>

                    <Link onClick={() => dispatch(Adminlogout())} href="javascript:vold(0)" class="block w-full cursor-pointer text-textColor hover:text-dark">
                        Sign Out
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default ProfileDropdown