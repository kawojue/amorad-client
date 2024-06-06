'use client'

import DashboardPagination from '@/components/dashboard/DashboardPagination'
import ReportSearch from '@/components/dashboard/organization/report/ReportSearch'
import ReportStatus from '@/components/dashboard/organization/report/ReportStatus'
import ReportTable from '@/components/dashboard/organization/report/ReportTable'
import TableSkeletonLoader from '@/components/skeleton/TableSkeletonLoader'
import { getOrganizationToken } from '@/redux/features/slices/organization/OrganizationAuthSlice'
import organizationService from '@/services/organizationService'
import { removeEmptyFields } from '@/utils/EmptyFields'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const page = () => {

    const initialFormData = {
        page: 1,
        limit: 20,
        sortBy: 'date',
        // patientName: '',
        // specialist: '',
        // facility: '',
        // description: '',
        startDate: '',
        endDate: '',
        modality: '',
        priority: '',
        sortBy: '',
        search: ''
    };

    const [search, setSearch] = useState(initialFormData);

    const token = useSelector(getOrganizationToken)
    const [loading, setLoading] = useState(false)
    const [datas, setDatas] = useState([])
    const [total, setTotal] = useState(0)
    const query = removeEmptyFields(search);

    // HANLDE PAGINATION PAGE CHANGE
    const handlePageChange = (newPage) => {
        setSearch((prevSearchCriteria) => ({
            ...prevSearchCriteria,
            page: newPage,
        }));
    };

    // FETCH DATA
    const fetchData = async () => {
        try {
            const response = await organizationService.getReports(token, query)
            setDatas(response?.data);
            setTotal(response?.metadata?.total)
        } catch (error) {
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, [search])

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

                {loading ? (

                    <TableSkeletonLoader count={12} height={40} />

                ) : (

                    <ReportTable token={token} reports={datas} />

                )}

            </div>


            {/* PAGINATION */}
            {!loading && datas?.length > 0 && (
                <DashboardPagination
                    currentPage={search?.page}
                    totalPages={total}
                    perPage={search?.limit}
                    onChangePage={handlePageChange}
                    title="Reports"
                />
            )}

        </>
    )
}

export default page