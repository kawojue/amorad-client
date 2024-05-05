'use client'
import DashboardFilter from '@/components/dashboard/admin/DashboardFilter'
import DoctorTable from '@/components/dashboard/admin/doctor/DoctorTable'
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

                <DashboardFilter filter={filter} setFilter={setFilter} />

            </div>

            <DoctorTable />

        </>
    )
}

export default page