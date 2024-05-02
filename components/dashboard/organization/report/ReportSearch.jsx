'use client'
import SearchIcon from '@/components/icons/SearchIcon'
import Button from '@/components/ui/buttons/Button'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import DatePickerComponent from '../../DatePicker'

const ReportSearch = () => {

    const [type, setType] = useState('advance')

    return (
        <>

            {type === 'basic' ? (

                <div className="flex sm:items-center flex-col sm:flex-row gap-x-5 gap-y-3 ">

                    <div className="relative flex-grow sm:flex-1">
                        <input type="search" className="form-control border-border_color py-2 pl-10" placeholder='Search' />
                        <div className="absolute top-[13px] left-3"> <SearchIcon className='w-4 h-4' color='#586283' /> </div>
                    </div>

                    <div className="border border-border_color flex items-center w-64 sm:w-auto rounded-xl gap-x-1 justify-center">

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
                <div className="flex flex-col gap-y-5">

                    <div className="sm:flex sm:items-center rounded-lg mt-3">

                        <div className="relative">
                            <input type="text" className="py-2.5 pl-10 text-[12px]  tracking-tight px-3 block flex-shrink w-full sm:min-w-[250px] lg:min-w-[400px] border-border_color  first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none focus:border-none sm:last:rounded-es-none sm:last:rounded-e-lg relative focus:z-10" placeholder='Search by Patient Name, MRN or Accession' />
                            <div className="absolute  top-[15px] left-3 z-20"> <SearchIcon className='w-4 h-4' color='#586283' /></div>
                        </div>

                        <input type="text" className="py-2.5 text-[12px]  tracking-tight px-3 block w-full border-border_color -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none focus:border-none sm:last:rounded-es-none sm:last:rounded-e-lg  relative focus:z-10" placeholder='Specialist' />

                        <input type="text" className="py-2.5 text-[12px]  tracking-tight px-3 block w-full border-border_color -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none focus:border-none sm:last:rounded-es-none sm:last:rounded-e-lg  relative focus:z-10" placeholder='Facility' />

                        <input type="text" className="py-2.5 text-[12px]  tracking-tight px-3 block w-full border-border_color -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none focus:border-none sm:last:rounded-es-none sm:last:rounded-e-lg  relative focus:z-10" placeholder='Description' />

                        <button onClick={() => setType('basic')} className="py-2.5 px-4 inline-flex items-center min-w-fit w-full border border-border_color text-xs text-white bg-primary -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none focus:border-none sm:last:rounded-es-none sm:last:rounded-e-lg gap-x-2">
                            <SearchIcon className='w-4 h-4' />
                            Basic Search
                        </button>
                    </div>

                    <div className="flex md:items-center flex-col md:flex-row justify-between gap-y-3">

                        <div class="sm:flex rounded-lg w-full md:w-auto text-textColor">

                            <div className="text-[12px] tracking-tight flex items-center  border border-border_color first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none focus:border-none sm:last:rounded-es-none sm:last:rounded-e-lg relative">
                                <DatePickerComponent />
                            </div>

                            <div className="text-[12px]  tracking-tight flex items-center border border-border_color first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none focus:border-none sm:last:rounded-es-none sm:last:rounded-e-lg relative">
                                <DatePickerComponent />
                            </div>

                            <select className="py-2.5 text-[12px]  tracking-tight px-3 w-full md:w-[130px] border-border_color -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none focus:border-none sm:last:rounded-es-none sm:last:rounded-e-lg  relative focus:z-10" >
                                <option value="" disabled selected>Select Modality</option>
                            </select>

                            <select className="py-2.5 text-[12px]  tracking-tight px-3 w-full md:w-[130px] border-border_color -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none focus:border-none sm:last:rounded-es-none sm:last:rounded-e-lg  relative focus:z-10" >
                                <option value="" disabled selected>Select Priority</option>
                            </select>

                        </div>

                        <div className="flex items-center gap-x-3 justify-end">

                            <Button className='btn-primary text-[10px] font-medium'>
                                Search
                            </Button>

                            <Button className='btn-outline text-[10px] text-primary font-medium'>
                                Clear
                            </Button>

                        </div>

                    </div>

                </div>
            )}

        </>
    )
}

export default ReportSearch