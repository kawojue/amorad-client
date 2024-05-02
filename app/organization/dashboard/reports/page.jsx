import ReportSearch from '@/components/dashboard/organization/report/ReportSearch'
import ReportStatus from '@/components/dashboard/organization/report/ReportStatus'
import React from 'react'

const page = () => {

    return (
        <>

            <div className="flex items-center justify-between flex-wrap gap-y-5 mb-5">

                <h2 class="text-sm font-bold text-dark capitalize">Reporting</h2>

                <ReportStatus />

            </div>

            <ReportSearch />
            

        </>
    )
}

export default page