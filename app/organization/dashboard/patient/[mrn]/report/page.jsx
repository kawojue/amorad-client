'use client'

import ReportTable from '@/components/dashboard/organization/report/ReportTable'
import TableSkeletonLoader from '@/components/skeleton/TableSkeletonLoader'
import { getOrganizationToken } from '@/redux/features/slices/organization/OrganizationAuthSlice'
import organizationService from '@/services/organizationService'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const page = ({ params }) => {

    const { mrn } = params

    const token = useSelector(getOrganizationToken)
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(false)

    // FETCH DATA
    const fetchData = async () => {
        try {
            const response = await organizationService.getPatientReports(token, mrn)
            setDatas(response?.data);
        } catch (error) {
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, [mrn])

    return (
        <>

            <div className="bg-white px-2 py-3 rounded-lg">

                {loading ? (

                    <TableSkeletonLoader count={20} height={40} />

                ) : (

                    <ReportTable hideName={true} token={token} reports={datas} fetchData={fetchData} />

                )}

            </div>

        </>
    )
}

export default page