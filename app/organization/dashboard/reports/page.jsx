'use client'
import ReportSearch from '@/components/dashboard/organization/report/ReportSearch'
import ReportStatus from '@/components/dashboard/organization/report/ReportStatus'
import ReportTable from '@/components/dashboard/organization/report/ReportTable'
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
        { name: 'Assigned', value: 'assigned' },
        { name: 'Archived', value: 'archived' }
    ];
    const [activeTab, setActiveTab] = useState(statuses[0].value);

    const handleTabClick = (status) => {
        setActiveTab(status);
    };

    return (
        <>

            <div className="flex items-center justify-between flex-wrap gap-y-5 mb-5">

                <h2 class="text-sm font-bold text-dark capitalize">Reporting</h2>

                <ReportStatus />

            </div>

            <ReportSearch initialFormData={initialFormData} onSubmit={handleSearch} setSearch={setSearch} />

            <div className="bg-primary text-white max-w-max py-1.5 px-2 rounded-full mb-5">
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


            <div className="bg-white px-2 py-3 rounded-lg">
                <ReportTable selectedStatus={activeTab} />
            </div>

        </>
    )
}

export default page