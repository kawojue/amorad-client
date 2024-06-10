'use client'

import Image from 'next/image';
import { ArrowsPointingOutIcon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Cog8ToothIcon, HandRaisedIcon, MagnifyingGlassIcon, MagnifyingGlassPlusIcon } from '@heroicons/react/24/outline';
import { LuLayoutGrid } from "react-icons/lu";
import Link from 'next/link';

const DicomNavBar = ({ open, setOpen }) => {

    return (
        <header className="flex  sm:justify-start z-50 h-16 w-full bg-primary text-xs">

            <nav className="flex basis-full items-center w-full mx-auto px-3 md:px-6">

                <div className="w-full flex items-center ml-auto justify-between sm:gap-x-3 sm:order-3">

                    {/* LOGO */}
                    <div className="mr-5 md:mr-8 hidden md:block">
                        <Image
                            src='/images/logo.svg'
                            width={28} height={28}
                            alt="Logo"
                            className="h-full max-w-full transition-all duration-200 ease-soft-in-out max-h-10 "
                        />
                    </div>

                    {/* MENU BAR ICON */}
                    <div onClick={() => setOpen(!open)} className="md:hidden">
                        <button type="button" className="inline-flex flex-shrink-0 justify-center items-center pr-4 gap-2 rounded-full font-mediu text-white align-middle transition-all text-xs">
                            {open ? (
                                <XMarkIcon className="w-5 h-5" />
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>
                    </div>

                    <div className="ml-3 flex items-center gap-x-4 md:gap-x-7 text-white text-[10px] md:text-[12px] overflow-x-scroll scrollbar-none">

                        <div className="flex flex-col gap-y-1 cursor-pointer items-center hover:bg-blue p-3">
                            <ArrowsPointingOutIcon className='w-5 h-5' />
                            <p className="truncate max-w-[50px]">Move</p>
                        </div>

                        <div className="flex flex-col gap-y-1 cursor-pointer items-center hover:bg-blue p-3">
                            <HandRaisedIcon className='w-5 h-5' />
                            <p className="truncate max-w-[50px]">Pan</p>
                        </div>

                        <div className="flex flex-col gap-y-1 cursor-pointer items-center hover:bg-blue p-3">
                            <MagnifyingGlassPlusIcon className='w-5 h-5' />
                            <p className="truncate max-w-[50px]">Zoom</p>
                        </div>

                        <div className="flex flex-col gap-y-1 cursor-pointer items-center hover:bg-blue p-3">
                            <MagnifyingGlassIcon className='w-5 h-5' />
                            <p className="truncate max-w-[50px]">Magnifier</p>
                        </div>

                        <div className="flex flex-col gap-y-1 cursor-pointer items-center hover:bg-blue p-3">
                            <LuLayoutGrid className='w-5 h-5' />
                            <p className="truncate max-w-[50px]">Magnifier</p>
                        </div>

                    </div>

                    {/* SETTINGS LINK */}
                    <Link href="javascript:void(0)" className="hidden md:flex flex-row items-center justify-end gap-x-1 text-white">
                        <h2 className='text-xs uppercase text-white/70 tracking-wider '>Settings</h2>
                        <div className="relative">
                            <Cog8ToothIcon className='w-6 h-6' />
                        </div>

                    </Link>

                </div>

            </nav>
        </header>
    )
}

export default DicomNavBar
