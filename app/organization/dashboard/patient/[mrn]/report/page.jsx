'use client'

import ReportTable from '@/components/dashboard/organization/report/ReportTable'
import React from 'react'

const page = ({ params }) => {

    const { mrn } = params

    return (
        <>

            <div className="bg-white px-2 py-3 rounded-lg">
                <ReportTable hideName={true} />
            </div>

        </>
    )
}

export default page