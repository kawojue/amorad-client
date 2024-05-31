import React, { useEffect, useRef, useState } from 'react';
import ForwardIcon from "@/components/icons/ForwardIcon";
import EditIcon from "@/components/icons/EditIcon";
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import TrashIcon from '@/components/icons/TrashIcon';

const ReportAction = ({ open, index, toggleRow, setOpen, data }) => {
    const reportMenu = useRef(null);
    const [menuPosition, setMenuPosition] = useState({ top: '100%', left: 0 });

    const updateMenuPosition = () => {
        if (reportMenu.current) {
            const rect = reportMenu.current.getBoundingClientRect();
            const belowSpace = window.innerHeight - rect.bottom;
            const aboveSpace = rect.top;

            if (belowSpace < rect.height && aboveSpace > rect.height) {
                // If there's not enough space below and enough space above, show above
                setMenuPosition({
                    top: `calc(100% - ${rect.height}px)`,
                    left: 0
                });
            } else {
                // Otherwise, default position below
                setMenuPosition({
                    top: '100%',
                    left: 0
                });
            }
        }
    };

    useEffect(() => {
        if (open === index) {
            updateMenuPosition();
        }
    }, [open, index]);

    useEffect(() => {
        const handleResize = () => {
            if (open === index) {
                updateMenuPosition();
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [open, index]);

    const handleClickOutside = (event) => {
        if (reportMenu.current && !reportMenu.current.contains(event.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleOpenRow = (index) => {
        toggleRow(index);
        setOpen(false);
    };

    return (
        <>
            {open === index && (
                <div
                    ref={reportMenu}
                    style={menuPosition}
                    className={`bg-white absolute shadow-soft-xl z-50 py-3 rounded-xl text-textColor whitespace-nowrap min-w-full left-0 duration-300 ${
                        open === index ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 pointer-events-none -translate-y-2'
                    }`}
                >
                    <div className="space-y-2">
                        <div onClick={() => handleOpenRow(index)} className="flex items-center gap-x-2 text-xs hover:bg-[#F4F4FF] cursor-pointer py-1 px-4">
                            <ForwardIcon className='w-4 h-4' />
                            <span>Expand</span>
                        </div>

                        {/* <div className="flex items-center gap-x-2 text-xs hover:bg-[#F4F4FF] cursor-pointer py-1 px-4">
                            <ForwardIcon className='w-4 h-4' />
                            <span>View Details</span>
                        </div>

                        <div className="flex items-center gap-x-2 text-xs hover:bg-[#F4F4FF] cursor-pointer py-1 px-4">
                            <TrashIcon className='w-4 h-4' />
                            <span>Erase Record</span>
                        </div> */}
                    </div>
                </div>
            )}
        </>
    );
};

export default ReportAction;
