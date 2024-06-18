import Image from 'next/image';
import { useState } from 'react';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Cog8ToothIcon, HandRaisedIcon, MagnifyingGlassIcon, MagnifyingGlassPlusIcon } from '@heroicons/react/24/outline';
import { LuLayoutGrid } from 'react-icons/lu';
import Link from 'next/link';
import { GrPowerReset } from 'react-icons/gr';
import { TfiRulerAlt } from 'react-icons/tfi';

const DicomNavBar = ({ open, setOpen, onToolSelect }) => {
    const [openLen, setOpenLen] = useState(false);

    const handleToolSelect = (tool) => {
        onToolSelect(tool);
    };

    return (
        <header className="flex sm:justify-start h-16 w-full bg-blue text-xs fixed">
            <nav className="flex items-center w-full mx-auto px-3 md:px-6">
                <div className="w-full flex items-center ml-auto justify-between sm:gap-x-3 sm:order-3">
                    {/* LOGO */}
                    <div className="mr-5 md:mr-8 hidden md:block">
                        <Image
                            src='/images/logo.svg'
                            width={28} height={28}
                            alt="Logo"
                            className="h-full max-w-full transition-all duration-200 ease-soft-in-out max-h-10"
                        />
                    </div>

                    {/* MENU BAR ICON */}
                    <div onClick={() => setOpen(!open)} className="md:hidden">
                        <button type="button" className="inline-flex flex-shrink-0 justify-center items-center pr-4 gap-2 rounded-full text-white align-middle transition-all text-xs">
                            {open ? (
                                <XMarkIcon className="w-5 h-5" />
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>
                    </div>

                    <div className="ml-3 flex items-center gap-x-1 text-white text-[10px] md:text-[12px] overflow-x-scroll scrollbar-none">

                        <div className="relative">
                            <div className="flex items-center cursor-pointer">
                                <div className="flex items-center bg-primary p-2.5 rounded-s-lg">
                                    <TfiRulerAlt className="w-6 h-6" />
                                </div>
                                <div onClick={() => setOpenLen(!openLen)} className="h-full flex items-center bg-red-500 py-4 rounded-e-lg px-0.5">
                                    <ChevronDownIcon className="w-3 h-3" />
                                </div>
                            </div>
                            <div className={`${openLen ? 'flex' : 'hidden'} absolute z-10 shadow rounded-md bg-red-500 py-5 w-48`}>
                                <div className="p-3">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus exercitationem labore eos ipsum, reprehenderit veniam dolore doloremque eius ratione numquam dolores iure mollitia molestiae quibusdam voluptatum excepturi, consectetur minima nesciunt modi perferendis et hic earum velit? Iure possimus exercitationem adipisci!
                                </div>
                            </div>
                        </div>

                        {/* Tool icons */}
                        <div className="flex flex-col gap-y-1 cursor-pointer items-center hover:bg-primary p-2.5 rounded-lg" onClick={() => handleToolSelect('hand')}>
                            <HandRaisedIcon className='w-6 h-6' />
                        </div>

                        <div className="flex flex-col gap-y-1 cursor-pointer items-center hover:bg-primary p-2.5 rounded-lg" onClick={() => handleToolSelect('magnify-plus')}>
                            <MagnifyingGlassPlusIcon className='w-6 h-6' />
                        </div>

                        <div className="flex flex-col gap-y-1 cursor-pointer items-center hover:bg-primary p-2.5 rounded-lg" onClick={() => handleToolSelect('magnify')}>
                            <MagnifyingGlassIcon className='w-6 h-6' />
                        </div>

                        <div className="flex flex-col gap-y-1 cursor-pointer items-center hover:bg-primary p-2.5 rounded-lg" onClick={() => handleToolSelect('grid')}>
                            <LuLayoutGrid className='w-6 h-6' />
                        </div>

                        <div className="flex flex-col gap-y-1 cursor-pointer items-center hover:bg-primary p-2.5 rounded-lg" onClick={() => handleToolSelect('reset')}>
                            <GrPowerReset className='w-6 h-6' />
                        </div>
                    </div>

                    {/* SETTINGS LINK */}
                    <Link href="javascript:void(0)" className="hidden md:flex flex-row items-center justify-end gap-x-1 text-white">
                        <h2 className='text-xs uppercase text-white/70 tracking-wider'>Settings</h2>
                        <div className="relative">
                            <Cog8ToothIcon className='w-6 h-6' />
                        </div>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default DicomNavBar;
