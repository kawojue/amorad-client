'use client'
import DashboardFilter from '@/components/dashboard/admin/DashboardFilter'
import FacilityTable from '@/components/dashboard/admin/facility/FacilityTable'
import TableSkeletonLoader from '@/components/skeleton/TableSkeletonLoader'
import { getToken } from '@/redux/features/slices/adminAuthSlice'
import adminService from '@/services/adminService'
import { removeEmptyFields } from '@/utils/EmptyFields'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const page = () => {

    const token = useSelector(getToken)
    const [loading, setLoading] = useState(false)
    const [datas, setDatas] = useState([])
    const [total, setTotal] = useState(0)

    const initialFormData = {
        page: 1,
        limit: 15,
        sortBy: 'name',
        search: '',
        status: '',
        startDate: '',
        endDate: '',
    };

    const [filter, setFilter] = useState(initialFormData);
    const query = removeEmptyFields(filter);

    // FETCH DATA
    const fetchData = async () => {
        try {
            const response = await adminService.getFacilities(token, query)
            setDatas(response?.data?.facilities);
            setTotal(response?.data?.count)
        } catch (error) {
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, [filter])

    return (
        <>

            <div className="flex items-center justify-between flex-wrap gap-y-5 mb-5">

                <h2 class="text-sm font-bold text-dark capitalize">Facilities
                </h2>

                <DashboardFilter filter={filter} setFilter={setFilter} />

            </div>

            <div className="bg-white px-2 py-3 rounded-lg">

                { loading ? (

                    <TableSkeletonLoader count={12} height={40} />

                ) : (

                    <FacilityTable datas={datas} />

                )}

            </div>

        </>
    )
}

export default page