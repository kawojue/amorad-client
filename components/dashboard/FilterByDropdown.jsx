import { FunnelIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useRef, useState } from 'react'
import DatePickerComponent from './DatePicker';

const FilterByDropdown = ({ setFilter, filter }) => {

    const [open, setOpen] = useState(false);

    const toggleDropdown = () => {
        setOpen(!open);
    };

    const filterMenu = useRef(null);

    const handleClickOutside = (event) => {
        if (filterMenu.current && !filterMenu.current.contains(event.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSortOptionClick = (data) => {
        setFilter((prevSearchCriteria) => ({
            ...prevSearchCriteria,
            status: data,
        }));
    };

    // HANDLE START DATE
    const handleDateSelect = (selectedDate) => {
        setFilter((prevSearchCriteria) => ({
            ...prevSearchCriteria,
            startDate: selectedDate,
        }));
    };

    // HANDLE END DATE
    const handleEndDateSelect = (selectedDate) => {
        setFilter((prevSearchCriteria) => ({
            ...prevSearchCriteria,
            endDate: selectedDate,
        }));
    };

    return (

        <div ref={filterMenu} className="relative">

            <div onClick={toggleDropdown} className="flex items-center gap-x-2 border-l border-border_color capitalize text-xs py-2 text-textColor bg-white cursor-pointer px-3 rounded-r-xl">
                Filter By
                <FunnelIcon className='w-4 h-4' />
            </div>

            <div className={`bg-white absolute shadow-soft-xl top-12 z-50 p-3 right-0 rounded-xl whitespace-nowrap duration-300 ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 pointer-events-none -translate-y-2'}`}>

                <div className="px-4 py-2 mb-3 text-center bg-primary rounded-t-xl text-white font-medium text-xs">Filter By</div>

                {/* STATUS */}
                <div className="flex items-center gap-x-4 mb-4">
                    <span className="text-xs text-textColor">Status:</span>

                    <ul className="text-[12px] font-medium text-center text-gray-500 rounded-lg flex border border-border_color capitalize">

                        <li onClick={() => handleSortOptionClick('all')} className="w-full focus-within:z-10">
                            <span className={`inline-block w-full py-2 px-4 ${filter.status === 'all' ? 'bg-primary text-white' : 'bg-white'} border-r border-border_color rounded-s-lg cursor-pointer`}>all</span>
                        </li>

                        <li onClick={() => handleSortOptionClick('active')} className="w-full focus-within:z-10">
                            <span className={`inline-block w-full py-2 px-4 ${filter.status === 'active' ? 'bg-primary text-white' : 'bg-white'} border-r border-border_color cursor-pointer`}>active</span>
                        </li>

                        <li onClick={() => handleSortOptionClick('inactive')} className="w-full focus-within:z-10">
                            <span className={`inline-block w-full py-2 px-4 ${filter.status === 'inactive' ? 'bg-primary text-white' : 'bg-white'} border-s-0 border-border_color cursor-pointer  rounded-e-lg`}>inactive</span>
                        </li>

                    </ul>

                </div>

                <div className="flex items-center gap-x-4">
                    <span className="text-xs text-textColor">Date Range:</span>

                    <ul className="text-[12px] font-medium text-center text-gray-500 rounded-lg flex border border-border_color capitalize">

                        <span className='inline-block border-r w-full sm:w-32 border-border_color rounded-s-lg cursor-pointer'>
                            <DatePickerComponent onSelectDate={handleDateSelect} title='Start Date' />
                        </span>

                        <span className='inline-block border-s-0 w-full sm:w-32 border-border_color cursor-pointer  rounded-e-lg'>
                            <DatePickerComponent onSelectDate={handleEndDateSelect} title='End Date' />
                        </span>

                    </ul>

                </div>

            </div>

        </div>
    )
}

export default FilterByDropdown;
