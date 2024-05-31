// PatientAction.js

import ForwardIcon from "@/components/icons/ForwardIcon";
import EditIcon from "@/components/icons/EditIcon";
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import ActionBar from '../../ActionBar';
import { useState } from "react";

const PatientAction = ({ data }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const onClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <ActionBar
                trigger={
                    <span className="block text-xs font-medium">
                        Expand
                    </span>
                }
                setAnchorEl={setAnchorEl} // Pass setAnchorEl to ActionBar
            >
                <div className="py-1">
                    {/* Pass handleClose to onClick of Link */}
                    <Link href={`patient/${data.mrn}`} onClick={onClose} className='w-full whitespace-nowrap'>
                        <div className="flex items-center gap-x-2 px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 cursor-pointer">
                            <ForwardIcon className='w-4 h-4' />
                            <span>View Details</span>
                        </div>
                    </Link>
                    <Link href={`patient/${data.mrn}/edit`} onClick={onClose} className='w-full whitespace-nowrap'>
                        <div className="flex items-center gap-x-2 px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 cursor-pointer">
                            <EditIcon className='w-4 h-4' />
                            <span>Edit Patient</span>
                        </div>
                    </Link>
                    <Link href="javascript:void(0)" onClick={onClose} className='w-full whitespace-nowrap'>
                        <div className="flex items-center gap-x-2 px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 cursor-pointer">
                            <PlusCircleIcon className='w-4 h-4' />
                            <span>Add Patient Study</span>
                        </div>
                    </Link>
                </div>
            </ActionBar>
        </>
    );
};

export default PatientAction;
