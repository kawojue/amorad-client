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


    return (
        <>

            <div className="flex items-center justify-between flex-wrap gap-y-5 mb-5">

                <h2 class="text-sm font-bold text-dark capitalize">Patients</h2>

                <ReportStatus />

            </div>

            <ReportSearch initialFormData={initialFormData} onSubmit={handleSearch} setSearch={setSearch} />

            <div className="bg-white px-2 py-3 rounded-lg">
                <ReportTable  />
            </div>

        </>
    )
}

export default page