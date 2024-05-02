import { ChevronDownIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useRef, useState } from 'react'

const SortByDropdown = () => {

    const [open, setOpen] = useState(false);

    const toggleDropdown = () => {
        setOpen(!open);
    };

    // USE REF AND OUTSIDE CLICK
    const sortMenu = useRef(null);

    const handleClickOutside = (event) => {
        if (sortMenu.current && !sortMenu.current.contains(event.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={sortMenu} className="relative">

            <div onClick={toggleDropdown} className="flex items-center gap-x-2 py-2 text-textColor cursor-pointer px-3">

                <p className="text-xs tracking-tight">Sort By</p>

                <ChevronDownIcon className='h-3 w-3' />

            </div>

            <div className={`bg-white absolute shadow-soft-xl top-12 z-50 p-3 rounded-xl font-semibold w-60 whitespace-nowrap duration-300 ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 pointer-events-none -translate-y-2'} `}>

                <div className="px-4 py-2 mb-3 text-center bg-primary rounded-t-xl text-white font-medium text-xs">
                    Sort By
                </div>

                <div className="flex flex-col gap-y-2">

                    <button className="px-3 btn rounded-lg bg-[#EDF6FF] text-textColor w-full py-2 text-[11px] text-left">Newest</button>

                    <button className="px-3 btn rounded-lg bg-[#FFEDED] text-danger w-full py-2 text-[11px] text-left">Oldest</button>

                    <button className="px-3 btn rounded-lg bg-[#FFFAED] text-[#97741A] w-full py-2 text-[11px] text-left">Least Recently Updated</button>

                    <button className="px-3 btn rounded-lg bg-[#EDFCFF] text-[#093A44] w-full py-2 text-[11px] text-left">Alphabetical (Name)</button>

                </div>

            </div>

        </div>
    )
}

export default SortByDropdown