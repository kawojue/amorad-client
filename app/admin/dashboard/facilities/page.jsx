'use client'
import FacilitySearch from '@/components/dashboard/admin/DashboardFilter'
import FacilityTable from '@/components/dashboard/admin/facility/FacilityTable'
import HealthIcon from '@/components/icons/HealthIcon'
import Profileicon from '@/components/icons/Profileicon'
import UserCircleIcon from '@/components/icons/UserCircleIcon'
import { PlusIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'

const page = () => {

    const initialFormData = {
        sortBy: '',
        search: '',
        status: 'all',
        startDate: '',
        endDate: '',
    };

    const [filter, setFilter] = useState(initialFormData);

    const datas = [
        { name: 'Doctors', value: 'doctor', icon: <HealthIcon className='w-4 h-4' /> },
        { name: 'Radiologists', value: 'radiologists', icon: <Profileicon className='w-4 h-4' /> },
        { name: 'Center Admin', value: 'center-admin', icon: <UserCircleIcon className='w-4 h-4' /> }
    ];
    const [activeTab, setActiveTab] = useState(datas[0].value);

    const handleTabClick = (status) => {
        setActiveTab(status);
    };

    return (
        <>

            <div className="flex items-center justify-between flex-wrap gap-y-5">

                <h2 class="text-sm font-bold text-dark capitalize">Facilities</h2>

                <div className="text-white max-w-max bg-primary py-2.5 rounded-2xl sm:py-1.5 px-3 sm:rounded-full mb-5">

                    <div className="flex items-center flex-wrap gap-x-1 gap-y-2">

                        {datas.map((data) => (
                            <div
                                key={data}
                                className={`flex items-center gap-x-2 cursor-pointer ${activeTab === data.value
                                    ? 'bg-[#1F89AF] rounded-full transition-all duration-300' : ''
                                    } px-2.5 py-1 text-xs transition-all duration-300 font-medium`}
                                onClick={() => handleTabClick(data.value)}
                            >
                                {data.icon}
                                {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
                            </div>
                        ))}

                        <div className=" h-7 w-7 ml-1.5 p-0.5 cursor-pointer rounded-full bg-[#1F89AF] flex items-center justify-center"> <PlusIcon className='w-4 h-4 text-white' /> </div>

                    </div>

                </div>

            </div>

            <div className="mb-5">
                <FacilitySearch filter={filter} data={activeTab} setFilter={setFilter} />
            </div>

            <div className="bg-white px-2 py-3 rounded-lg">

                <FacilityTable />

            </div>

        </>
    )
}

export default page