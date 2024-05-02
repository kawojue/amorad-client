'use client'
import SearchIcon from '@/components/icons/SearchIcon'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'

const ReportSearch = () => {

    const [type, setType] = useState('basic')

    return (
        <>

            {type === 'basic' ? (

                <div className="flex sm:items-center flex-col sm:flex-row gap-x-5 gap-y-3 ">

                    <div className="relative flex-grow sm:flex-1">
                        <input type="search" className="form-control border-[#F6FAFF] py-2 pl-10" placeholder='Search' />
                        <div className="absolute top-[13px] left-3"> <SearchIcon className='w-4 h-4' color='#586283' /> </div>
                    </div>

                    <div className="border border-[#F6FAFF] flex items-center w-64 sm:w-auto rounded-xl gap-x-1 justify-center">

                        <div className="flex items-center gap-x-2 py-2 text-textColor cursor-pointer px-3">

                            <p className="text-xs tracking-tight">Sort By</p>

                            <ChevronDownIcon className='h-3 w-3' />

                        </div>

                        <div onClick={() => setType('advance')} className="flex items-center gap-x-2 text-xs py-2 text-white bg-primary cursor-pointer px-3 rounded-r-xl">
                            <SearchIcon className='w-4 h-4' />
                            Advanced Search
                        </div>

                    </div>

                </div>

            ) : (

                <div className="sm:flex sm:items-center rounded-lg mt-3">

                    <input type="text" className="py-2.5 text-xs  tracking-tight px-3 block flex-shrink w-full sm:min-w-[250px] lg:min-w-[400px] border-[#F6FAFF]  first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg relative focus:z-10" placeholder='Search by Patient Name, MRN or Accession' />

                    <input type="text" className="py-2.5 text-xs  tracking-tight px-3 block w-full border-[#F6FAFF] -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg  relative focus:z-10" placeholder='Specialist' />

                    <input type="text" className="py-2.5 text-xs  tracking-tight px-3 block w-full border-[#F6FAFF] -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg  relative focus:z-10" placeholder='Facility' />

                    <input type="text" className="py-2.5 text-xs  tracking-tight px-3 block w-full border-[#F6FAFF] -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg  relative focus:z-10" placeholder='Description' />

                    <button onClick={() => setType('basic')} className="py-2.5 px-4 inline-flex items-center min-w-fit w-full border border-[#F6FAFF] text-xs text-white bg-primary -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg gap-x-2">
                        <SearchIcon className='w-4 h-4' />
                        Basic Search
                    </button>
                </div>

            )}

        </>
    )
}

export default ReportSearch