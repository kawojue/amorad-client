'use client'
import DashboardFilter from '@/components/dashboard/admin/DashboardFilter'
import FacilityTable from '@/components/dashboard/admin/facility/FacilityTable'
import React, { useState } from 'react'

const page = () => {

    const initialFormData = {
        page: 1,
        limit: 10,
        sortBy: '',
        search: '',
        status: 'active',
        startDate: '',
        endDate: '',
    };

    const [filter, setFilter] = useState(initialFormData);

    return (
        <>

            <div className="flex items-center justify-between flex-wrap gap-y-5 mb-5">

                <h2 class="text-sm font-bold text-dark capitalize">Facilities
                </h2>

                <DashboardFilter filter={filter} setFilter={setFilter} />

            </div>

            <div className="bg-white px-2 py-3 rounded-lg">

                <FacilityTable />

            </div>

        </>
    )
}

export default page