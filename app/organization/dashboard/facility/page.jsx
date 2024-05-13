'use client'
import FacilitySearch from '@/components/dashboard/organization/facility/FacilitySearch'
import FacilityTable from '@/components/dashboard/organization/facility/FacilityTable'
import AdminModal from '@/components/dashboard/organization/facility/modal/AdminModal'
import PractitionerModal from '@/components/dashboard/organization/facility/modal/PractitionerModal'
import HealthIcon from '@/components/icons/HealthIcon'
import Profileicon from '@/components/icons/Profileicon'
import UserCircleIcon from '@/components/icons/UserCircleIcon'
import { PlusIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'

const page = () => {

    const initialFormData = {
        sortBy: '',
        search: ''
    };

    const [search, setSearch] = useState(initialFormData);

    const datas = [
        { name: 'Doctors', value: 'doctor', icon: <HealthIcon className='w-4 h-4' /> },
        { name: 'Radiologists', value: 'radiologists', icon: <Profileicon className='w-4 h-4' /> },
        { name: 'Center Admin', value: 'center-admin', icon: <UserCircleIcon className='w-4 h-4' /> }
    ];
    const [activeTab, setActiveTab] = useState(datas[0].value);

    const handleTabClick = (status) => {
        setActiveTab(status);
    };

    const [practitionerOpen, setPractitionerOpen] = useState(false)
    const [adminOpen, setAdminOpen] = useState(false)

    const handleOpen = () => {
        if (activeTab === 'doctor' || activeTab === 'radiologists') {
            setPractitionerOpen(true);
            setAdminOpen(false);
        } else {
            setAdminOpen(true);
            setPractitionerOpen(false);
        }
    }

    return (
        <>

            <div className="flex items-center justify-between flex-wrap gap-y-5">

                <h2 class="text-sm font-bold text-dark capitalize">Staff</h2>

                <div className="text-white max-w-max bg-primary py-2.5 rounded-2xl sm:py-1.5 px-2 sm:rounded-full mb-5">

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

                        <div onClick={handleOpen} className=" h-7 w-7 ml-1.5 p-0.5 cursor-pointer rounded-full bg-[#1F89AF] flex items-center justify-center"> <PlusIcon className='w-4 h-4 text-white' /> </div>

                    </div>

                </div>

            </div>

            <FacilitySearch data={activeTab} setSearch={setSearch} handleOpen={handleOpen} />

            <div className="bg-white px-2 py-3 rounded-lg">
                <FacilityTable />
            </div>

            {/* ADMIN */}
            <AdminModal open={adminOpen} setOpen={setAdminOpen} />

            {/* PRATICES */}
            <PractitionerModal open={practitionerOpen} setOpen={setPractitionerOpen} />

        </>
    )
}

export default page