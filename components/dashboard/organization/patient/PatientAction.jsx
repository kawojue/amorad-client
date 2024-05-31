import React, { useState, useRef, useEffect } from 'react';
import ForwardIcon from "@/components/icons/ForwardIcon";
import EditIcon from "@/components/icons/EditIcon";
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const PatientAction = ({ data }) => {
    const [open, setOpen] = useState(false);
    const [position, setPosition] = useState('down');
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setOpen(!open);
    };

    useEffect(() => {
        if (dropdownRef.current) {
            const dropdownRect = dropdownRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const spaceBelow = viewportHeight - dropdownRect.bottom;
            const spaceAbove = dropdownRect.top;
            if (spaceBelow < dropdownRect.height && spaceAbove > dropdownRect.height) {
                setPosition('up');
            } else {
                setPosition('down');
            }
        }
    }, [open]);

    return (
        <div className="relative inline-block text-left">
            <div onClick={toggleDropdown} className="flex items-center gap-x-2 text-textColor cursor-pointer">
                <span className="block text-xs font-medium">Expand</span>
                <ChevronDownIcon className="w-3 h-3" />
            </div>
            {open && (
                <div
                    ref={dropdownRef}
                    className={`absolute ${position === 'up' ? 'bottom-full mb-2' : 'top-full mt-2'} w-48 bg-white rounded-lg border border-gray-200 z-50`}
                >
                    <div className="py-1">
                        <Link href={`patient/${data.mrn}`}>
                            <div className="flex items-center gap-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                                <ForwardIcon className='w-4 h-4' />
                                <span>View Details</span>
                            </div>
                        </Link>
                        <Link href={`patient/${data.mrn}/edit`}>
                            <div className="flex items-center gap-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                                <EditIcon className='w-4 h-4' />
                                <span>Edit Patient</span>
                            </div>
                        </Link>
                        <Link href={`patient/${data.mrn}/study`}>
                            <div className="flex items-center gap-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                                <PlusCircleIcon className='w-4 h-4' />
                                <span>Add Patient Study</span>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PatientAction;
