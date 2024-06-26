'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image';
import Link from 'next/link';
import SidebarLink from '../SidebarLink';
import { XMarkIcon } from '@heroicons/react/24/solid';
import DashboardIcon from '@/components/icons/DashboardIcon';
import ReportIcon from '@/components/icons/ReportIcon';
import UploadIcon from '@/components/icons/UploadIcon';
import InsightIcon from '@/components/icons/InsightIcon';
import BillingIcon from '@/components/icons/BillingIcon';
import FacilityIcon from '@/components/icons/FacilityIcon';
import ConfigurationIcon from '@/components/icons/ConfigurationIcon';
import SettingsIcon from '@/components/icons/SettingsIcon';
import SupportIcon from '@/components/icons/SupportIcon';
import LogoutIcon from '@/components/icons/LogoutIcon';
import UserCircleIcon from '@/components/icons/UserCircleIcon';
import Avatar from '@/components/Avatar';
import { OrganizationLogout } from '@/redux/features/slices/organization/OrganizationAuthSlice';
import { useDispatch } from 'react-redux';

const SideBar = ({ open, setOpen, user }) => {

    const pathname = usePathname()
    const dispatch = useDispatch()

    const links = [
        {
            href: '/organization/dashboard/patient',
            icon: <UserCircleIcon className='w-5 h-5' color='#FFF' />,
            activeIcon: <UserCircleIcon className='w-5 h-5' color='#186784' />,
            text: 'Patients'
        },
        {
            href: '/organization/dashboard/report',
            icon: <ReportIcon className='w-5 h-5' color='#FFF' />,
            activeIcon: <ReportIcon className='w-5 h-5' color='#186784' />,
            text: 'Report'
        },
        {
            href: '/organization/dashboard/upload', text: 'Upload',
            icon: <UploadIcon className='w-5 h-5' color='#FFF' />,
            activeIcon: <UploadIcon className='w-5 h-5' color='#186784' />
        },

        {
            href: '/organization/dashboard/insights', text: 'Insights',
            icon: <InsightIcon className='w-5 h-5' color='#FFF' />,
            activeIcon: <InsightIcon className='w-5 h-5' color='#186784' />
        },

        {
            href: '/organization/dashboard/billings', text: 'Billings',
            icon: <BillingIcon className='w-5 h-5' color='#FFF' />,
            activeIcon: <BillingIcon className='w-5 h-5' color='#186784' />
        },

        {
            href: '/organization/dashboard/facility', text: 'Facility',
            icon: <FacilityIcon className='w-5 h-5' color='#FFF' />,
            activeIcon: <FacilityIcon className='w-5 h-5' color='#186784' />
        },

        {
            href: '/organization/dashboard/configurations', text: 'Configurations',
            icon: <ConfigurationIcon className='w-5 h-5' color='#FFF' />,
            activeIcon: <ConfigurationIcon className='w-5 h-5' color='#186784' />
        },
    ];

    const handleLinkClick = () => {
        setTimeout(() => {
            setOpen(false);
        }, 100);
    };

    return (
        <>

            {open && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 block lg:hidden z-20"
                    onClick={() => setOpen(false)}
                />
            )}

            <aside className={`sidebar fixed inset-y-0 left-0 flex-wrap items-center justify-between scrollbar-none overflow-x-hidden block p-0  pb-10 transition-all duration-200 -translate-x-full bg-blue border-0 z-10 ${open && 'translate-x-0'} max-w-64 xl:translate-x-0 w-[270px] z-50`}>

                <div className="sticky top-0 bg-blue w-full z-50 pb-4">

                    <div className="xl:hidden" onClick={() => setOpen(false)}>
                        <i className="absolute top-3 right-0 p-4 opacity-50 cursor-pointer text-white"> <XMarkIcon className='h-6 w-6 ' /> </i>
                    </div>

                    <Link href="/dashboard" className="block px-8 py-8 m-auto text-center text-sm whitespace-nowrap" onClick={handleLinkClick}>
                        <Image
                            src='/images/logo.svg'
                            width={28} height={28}
                            alt="Logo"
                            className="h-full max-w-full transition-all duration-200 ease-soft-in-out max-h-10 "
                        />
                    </Link>
                </div>

                <div className="pt-4 overflow-y-auto">

                    <div className="items-center block w-full h-auto grow basis-full px-4">

                        <ul className="flex flex-col pl-0 mb-0 list-none">

                            <li className="w-full mb-2.5">
                                <SidebarLink
                                    href='/organization/dashboard'
                                    icon={<DashboardIcon className='w-5 h-5' color='#FFF' />}
                                    activeIcon={<DashboardIcon className='w-5 h-5' color='#186784' />}
                                    text='Dashboard'
                                    isActive={pathname === '/organization/dashboard'}
                                    onClick={handleLinkClick}
                                />
                            </li>

                            {links.map((link, index) => (
                                <li key={index} className="w-full mb-2.5">
                                    <SidebarLink
                                        href={link.href}
                                        icon={link.icon}
                                        text={link.text}
                                        activeIcon={link.activeIcon}
                                        isActive={pathname.startsWith(link.href)}
                                        onClick={handleLinkClick}
                                    />
                                </li>
                            ))}

                        </ul>
                    </div>

                    <div className="relative px-4">

                        <hr className="mt-3 mb-6 border-t border-white/10" />

                        <ul className="flex flex-col pl-0 mb-0 list-none">

                            <li className="w-full mb-2.5">
                                <SidebarLink
                                    href='/organization/dashboard/settings'
                                    icon={<SettingsIcon className='w-5 h-5' color='#FFF' />}
                                    activeIcon={<SettingsIcon className='w-5 h-5' color='#186784' />}
                                    text='Settings'
                                    isActive={pathname === '/organization/dashboard/settings'}
                                    onClick={handleLinkClick}
                                />
                            </li>

                            <li className="w-full mb-2.5">
                                <SidebarLink
                                    href='/organization/dashboard/support'
                                    icon={<SupportIcon className='w-5 h-5' color='#FFF' />}
                                    activeIcon={<SupportIcon className='w-5 h-5' color='#186784' />}
                                    text='Support'
                                    isActive={pathname === '/organization/dashboard/support'}
                                    onClick={handleLinkClick}
                                />
                            </li>

                        </ul>

                    </div>

                </div>

                <div className="flex items-center gap-x-3 px-4 pt-12">

                    <Avatar name={user?.fullname} size="h-10 w-10" bgColor="bg-white" textColor="text-dark" fontSize="text-base" />

                    <Link href='/organization/dashboard/settings' className="flex-1">
                        <span className='text-white text-xs font-medium overflow-hidden whitespace-nowrap overflow-ellipsis'>
                            {user?.fullname}
                        </span>

                        <p className='text-white text-[11px] font-light -mt-2'> {user?.email} </p>
                    </Link>

                    <div onClick={() => dispatch(OrganizationLogout())} className="cursor-pointer">
                        <LogoutIcon className='w-6 h-6' color='#FFF' />
                    </div>

                </div>

            </aside>

        </>
    )
}

export default SideBar