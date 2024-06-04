'use client'
import DashboardPagination from '@/components/dashboard/DashboardPagination';
import DashboardFilter from '@/components/dashboard/admin/DashboardFilter'
import RadiologistTable from '@/components/dashboard/admin/radiologists/RadiologistTable';
import TableSkeletonLoader from '@/components/skeleton/TableSkeletonLoader';
import { getToken } from '@/redux/features/slices/adminAuthSlice';
import adminService from '@/services/adminService';
import { removeEmptyFields } from '@/utils/EmptyFields';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const page = () => {

    const status = [
        {
            value: "PENDING", name: "Pending"
        },
        {
            value: "ACTIVE", name: "Active"
        },
        {
            value: "SUSPENDED", name: "Suspended"
        },
    ]

    const token = useSelector(getToken)
    const [loading, setLoading] = useState(false)
    const [datas, setDatas] = useState([])
    const [total, setTotal] = useState(0)

    const initialFormData = {
        page: 1,
        limit: 15,
        sortBy: 'name',
        role: 'radiologist',
        search: '',
        status: '',
        startDate: '',
        endDate: '',
    };

    const [filter, setFilter] = useState(initialFormData);
    const query = removeEmptyFields(filter);

    // HANLDE PAGINATION PAGE CHANGE
    const handlePageChange = (newPage) => {
        setFilter((prevSearchCriteria) => ({
            ...prevSearchCriteria,
            page: newPage,
        }));
    };

    // FETCH DATA
    const fetchData = async () => {
        try {
            const response = await adminService.getPractitioners(token, query)
            setDatas(response?.data?.practitioners);
            setTotal(response?.data?.total)
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

                <h2 class="text-sm font-bold text-dark capitalize">Radiologists</h2>

                <DashboardFilter filter={filter} setFilter={setFilter} statuses={status} />

            </div>

            <div className="bg-white px-2 py-3 rounded-lg mb-5">

                {loading ? (

                    <TableSkeletonLoader count={12} height={40} />

                ) : (

                    <RadiologistTable token={token} datas={datas} fetchData={fetchData} />

                )}

            </div>

            {/* PAGINATION */}
            {!loading && <DashboardPagination
                currentPage={filter?.page}
                totalPages={total}
                perPage={filter?.limit}
                onChangePage={handlePageChange}
                title="Radiologists"
            />}

        </>
    )
}

export default page