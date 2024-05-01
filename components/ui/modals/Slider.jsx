import React from 'react'
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from '@heroicons/react/24/solid';

const Slider = ({ open, onClose, children, backdropClick = true }) => {

    const handleBackdropClick = () => {
        if (backdropClick) {
            onClose();
        }
    };

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative" onClose={handleBackdropClick}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25 z-[100] transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden z-[500]">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">

                                    <div className="flex h-full flex-col overflow-y-scroll bg-white rounded-l-xl">

                                        <div className="pt-5 px-7">

                                            {/* CLOSE BAR */}
                                            <div onClick={() => onClose()} className="bg-[#f4edfc7c] cursor-pointer p-2.5 h-10 w-10 rounded-full flex items-center justify-center">
                                                <div className="bg-[#f2e8ff] p-1.5 h-8 w-8 rounded-full flex items-center justify-center">
                                                    <XMarkIcon className='w-5 h-5 text-gray-500' />
                                                </div>
                                            </div>

                                        </div>

                                        {children}

                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default Slider