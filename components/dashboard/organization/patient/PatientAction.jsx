import { useRef, useEffect, useState } from 'react';
import ForwardIcon from "@/components/icons/ForwardIcon";
import EditIcon from "@/components/icons/EditIcon";
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const PatientAction = ({ open, index, setOpen, data }) => {
    const containerRef = useRef(null);
    const [position, setPosition] = useState('down');

    const updatePosition = () => {
        if (containerRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const spaceBelow = window.innerHeight - containerRect.bottom;
            const spaceAbove = containerRect.top;

            if (spaceBelow < containerRect.height && spaceAbove > containerRect.height) {
                setPosition('up');
            } else {
                setPosition('down');
            }
        }
    };

    useEffect(() => {
        if (open === index) {
            updatePosition();
        }

        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setOpen(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open, index, setOpen]);

    useEffect(() => {
        window.addEventListener('resize', updatePosition);

        return () => {
            window.removeEventListener('resize', updatePosition);
        };
    }, []);

    return (
        <>
            {open === index && (
                <div
                    ref={containerRef}
                    className={`bg-white absolute shadow-soft-xl z-50 py-3 rounded-xl text-textColor whitespace-nowrap min-w-full left-0 duration-300 ${
                        open === index ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    } ${position === 'up' ? 'bottom-full mb-2' : 'top-full mt-2'}`}
                >
                    <div className="space-y-2">
                        <Link href={`patient/${data.mrn}`}>
                            <div className="flex items-center gap-x-2 text-xs hover:bg-[#F4F4FF] cursor-pointer py-1 px-4">
                                <ForwardIcon className="w-4 h-4" />
                                <span>View Details</span>
                            </div>
                        </Link>

                        <Link href={`patient/${data.mrn}/edit`}>
                            <div className="flex items-center gap-x-2 text-xs hover:bg-[#F4F4FF] cursor-pointer py-1 px-4">
                                <EditIcon className="w-4 h-4" />
                                <span>Edit Patient</span>
                            </div>
                        </Link>

                        <Link href={`patient/${data.mrn}/study`}>
                            <div className="flex items-center gap-x-2 text-xs hover:bg-[#F4F4FF] cursor-pointer py-1 px-4">
                                <PlusCircleIcon className="w-4 h-4" />
                                <span>Add Patient Study</span>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default PatientAction;
