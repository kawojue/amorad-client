import ForwardIcon from "@/components/icons/ForwardIcon";
import EditIcon from "@/components/icons/EditIcon";
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import ActionBar from '../../ActionBar';

const PatientAction = ({ data }) => {

    const handleLinkClick = (onClose) => (event) => {
        if (onClose) {
            onClose();
        }
    };

    return (
        <>
            <ActionBar
                trigger={
                    <span className="block text-xs font-medium">
                        Expand
                    </span>
                }
            >
                {({ onClose }) => (
                    <div className="py-1">
                        <Link href={`patient/${data.mrn}`} passHref>
                            <div
                                className="flex items-center gap-x-2 px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 cursor-pointer"
                                onClick={handleLinkClick(onClose)}
                            >
                                <ForwardIcon className='w-4 h-4' />
                                <span>View Details</span>
                            </div>
                        </Link>
                        <Link href={`patient/${data.mrn}/edit`} passHref>
                            <div
                                className="flex items-center gap-x-2 px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 cursor-pointer"
                                onClick={handleLinkClick(onClose)}
                            >
                                <EditIcon className='w-4 h-4' />
                                <span>Edit Patient</span>
                            </div>
                        </Link>
                        <Link href={`patient/${data.mrn}/study`}  passHref>
                            <div
                                className="flex items-center gap-x-2 px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 cursor-pointer"
                                onClick={handleLinkClick(onClose)}
                            >
                                <PlusCircleIcon className='w-4 h-4' />
                                <span>Add Patient Study</span>
                            </div>
                        </Link>
                    </div>
                )}
            </ActionBar>
        </>
    );
};

export default PatientAction;
