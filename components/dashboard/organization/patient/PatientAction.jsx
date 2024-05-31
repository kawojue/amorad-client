import React, { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import ForwardIcon from "@/components/icons/ForwardIcon";
import EditIcon from "@/components/icons/EditIcon";
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const PatientAction = ({ data }) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div onClick={handleClick} className="flex cursor-pointer items-center gap-x-2 text-textColor">
                <span className="block text-xs font-medium">
                    Expand
                </span>
                <ChevronDownIcon className="w-3 h-3" />
            </div>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        boxShadow: 'none', // Remove shadow
                        borderRadius: '0.5rem', // Customize border radius
                        border: '1px solid #F2F2F2'
                    },
                }}
            >
                <div className="py-1">
                    <Link className='w-full whitespace-nowrap' href={`patient/${data.mrn}`}>
                        <div className="flex items-center gap-x-2 px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 cursor-pointer">
                            <ForwardIcon className='w-4 h-4' />
                            <span>View Details</span>
                        </div>
                    </Link>
                    <Link className='w-full whitespace-nowrap' href={`patient/${data.mrn}/edit`}>
                        <div className="flex items-center gap-x-2 px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 cursor-pointer">
                            <EditIcon className='w-4 h-4' />
                            <span>Edit Patient</span>
                        </div>
                    </Link>
                    <Link className='w-full whitespace-nowrap' href={`patient/${data.mrn}/study`}>
                        <div className="flex items-center gap-x-2 px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 cursor-pointer">
                            <PlusCircleIcon className='w-4 h-4' />
                            <span>Add Patient Study</span>
                        </div>
                    </Link>
                </div>
            </Menu>
        </>
    );
};

export default PatientAction;