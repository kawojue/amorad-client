'use client'
import PatientSearch from '@/components/dashboard/organization/patient/PatientSearch'
import PatientStatus from '@/components/dashboard/organization/patient/PatientStatus'
import PatientTable from '@/components/dashboard/organization/patient/PatientTable'
import Button from '@/components/ui/buttons/Button'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {

    const initialFormData = {
        patientName: '',
        specialist: '',
        facility: '',
        description: '',
        startDate: '',
        endDate: '',
        modality: '',
        priority: '',
        sortBy: '',
        search: ''
    };

    const [search, setSearch] = useState(initialFormData);

    const handleSearch = (data) => {
        setSearch(data);
    };

    const statuses = [
        { name: 'All', value: 'all' },
        // { name: 'Assigned', value: 'assigned' },
        { name: 'Archived', value: 'archived' }
    ];
    const [activeTab, setActiveTab] = useState(statuses[0].value);

    const handleTabClick = (status) => {
        setActiveTab(status);
    };

    return (
        <>

            <div className="flex items-center justify-between flex-wrap gap-y-5 mb-5">

                <h2 class="text-sm font-bold text-dark capitalize">Patients</h2>

                <PatientStatus />

            </div>

            <PatientSearch initialFormData={initialFormData} onSubmit={handleSearch} setSearch={setSearch} />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-3 mb-5">

                <div className="bg-primary text-white max-w-max py-1.5 px-2 rounded-full">
                    <div className="flex flex-wrap space-x-1">
                        {statuses.map((status) => (
                            <div
                                key={status}
                                className={`cursor-pointer ${activeTab === status.value
                                    ? 'bg-[#1F89AF] rounded-full transition-all duration-300' : ''
                                    } px-4 py-1 text-xs transition-all duration-300 font-medium`}
                                onClick={() => handleTabClick(status.value)}
                            >
                                {status.name.charAt(0).toUpperCase() + status.name.slice(1)}
                            </div>
                        ))}
                    </div>
                </div>

                <Link className='flex justify-end' href='patient/add'>
                    <Button className='text-white btn-success'>
                        <PlusCircleIcon className='h-5 w-5' />
                        <span className='text-xs'>Add Patient</span>
                    </Button>
                </Link>

            </div>

            <div className="bg-white px-2 py-3 rounded-lg">
                <PatientTable selectedStatus={activeTab} />
            </div>

        </>
    )
}

export default page