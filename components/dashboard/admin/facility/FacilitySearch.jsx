'use client'
import SearchIcon from '@/components/icons/SearchIcon'
import React, { useEffect, useState } from 'react'
import SortByDropdown from '../../SortByDropdown'
import FilterByDropdown from '../../FilterByDropdown'

const FacilitySearch = ({ setSearch, filter }) => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSortChange = (value) => {
        setSearch((prevSearchCriteria) => ({
            ...prevSearchCriteria,
            sortBy: value,
        }));
    };

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
    };

    useEffect(() => {
        const typingTimeout = setTimeout(() => {
            setSearch((prevSearchCriteria) => ({
                ...prevSearchCriteria,
                search: searchQuery,
            }));
        }, 500);
        return () => clearTimeout(typingTimeout);
    }, [searchQuery]);


    return (
        <div className='mb-5'>

            <div className="flex sm:items-center justify-end flex-wrap gap-x-5 gap-y-3">

                <div className="relative flex-grow sm:flex-1">
                    <input type="search" className="form-control border-border_color py-2 pl-10" placeholder='Search' value={searchQuery} onChange={handleSearchChange} />
                    <div className="absolute top-[13px] left-3"> <SearchIcon className='w-4 h-4' color='#586283' /> </div>
                </div>

                <div className="border border-border_color flex items-center rounded-xl gap-x-1 justify-center">

                    <SortByDropdown onSortChange={handleSortChange} />

                    <FilterByDropdown filter={filter} setStatus={setSearch} />

                </div>

            </div>

        </div>
    )
}

export default FacilitySearch
