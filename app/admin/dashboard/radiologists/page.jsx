'use client'
import DashboardFilter from '@/components/dashboard/admin/DashboardFilter'
import RadiologistTable from '@/components/dashboard/admin/radiologists/RadiologistTable';
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

                <h2 class="text-sm font-bold text-dark capitalize">Radiologists</h2>

                <DashboardFilter filter={filter} setFilter={setFilter} />

            </div>

            <div className="bg-white px-2 py-3 rounded-lg">

                <RadiologistTable />

            </div>

        </>
    )
}

export default page