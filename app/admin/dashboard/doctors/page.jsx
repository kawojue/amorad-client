'use client'
import FacilitySearch from '@/components/dashboard/admin/DashboardFilter'
import FacilityTable from '@/components/dashboard/admin/facility/FacilityTable'
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

    return (
        <>

            <div className="flex items-center justify-between flex-wrap gap-y-5 mb-5">

                <h2 class="text-sm font-bold text-dark capitalize">Doctors</h2>

                <FacilitySearch filter={filter} setFilter={setFilter} />

            </div>

            <FacilityTable />

        </>
    )
}

export default page