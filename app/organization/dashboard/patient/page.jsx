'use client'
import DashboardPagination from '@/components/dashboard/DashboardPagination'
import DashboardFilter from '@/components/dashboard/admin/DashboardFilter'
import PatientStatus from '@/components/dashboard/organization/patient/PatientStatus'
import PatientTable from '@/components/dashboard/organization/patient/PatientTable'
import TableSkeletonLoader from '@/components/skeleton/TableSkeletonLoader'
import Button from '@/components/ui/buttons/Button'
import { getOrganizationToken } from '@/redux/features/slices/organization/OrganizationAuthSlice'
import organizationService from '@/services/organizationService'
import { removeEmptyFields } from '@/utils/EmptyFields'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const page = () => {

    const token = useSelector(getOrganizationToken)
    const [loading, setLoading] = useState(false)
    const [datas, setDatas] = useState([])
    const [total, setTotal] = useState(0)

    const initialFormData = {
        page: 1,
        limit: 20,
        sortBy: 'date',
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
            const response = await organizationService.getPatients(token, query)
            setDatas(response?.data);
            setTotal(response?.metadata?.totalCount)
        } catch (error) {
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, [filter])


    const statuses = [
        { name: 'All', value: '' },
        { name: 'New', value: 'New' },
        { name: 'Archived', value: 'Archived' }
    ];

    const status = [
        {
            value: "New", name: "New"
        },
        {
            value: "Archived", name: "Archived"
        }
    ]

    const [activeTab, setActiveTab] = useState(statuses[0].value)

    const handleTabClick = (status) => {
        setActiveTab(status)
        setFilter((prevSearchCriteria) => ({
            ...prevSearchCriteria,
            status: status,
        }));
    };

    return (
        <>

            <div className="flex items-center justify-between flex-wrap gap-y-5 mb-5">

                <h2 class="text-sm font-bold text-dark capitalize">Patients</h2>

                <PatientStatus />

            </div>

            <DashboardFilter filter={filter} setFilter={setFilter} statuses={status} />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-3 my-5">

                <div className="bg-primary text-white max-w-max py-1.5 px-2 rounded-full">
                    <div className="flex flex-wrap space-x-1">
                        {statuses.map((status) => (
                            <div
                                key={status}
                                className={`cursor-pointer ${activeTab === status.value
                                    ? 'bg-[#1F89AF] rounded-full transition-all duration-300' : ''
                                    } px-4 py-1 text-xs transition-all duration-300 font-medium`}
                                onClick={() => handleTabClick(status.value)}
                            >
                                {status.name.charAt(0).toUpperCase() + status.name.slice(1)}
                            </div>
                        ))}
                    </div>
                </div>

                <Link className='flex justify-end' href='patient/add'>
                    <Button className='text-white btn-success'>
                        <PlusCircleIcon className='h-5 w-5' />
                        <span className='text-xs'>Add Patient</span>
                    </Button>
                </Link>

            </div>

            <div className="bg-white px-2 py-3 rounded-lg">

                {loading ? (

                    <TableSkeletonLoader count={12} height={40} />

                ) : (

                    <PatientTable token={token} patients={datas} fetchData={fetchData} />

                )}

            </div>

            {/* PAGINATION */}
            {!loading && datas?.length > 0 && (
                <DashboardPagination
                    currentPage={filter?.page}
                    totalPages={total}
                    perPage={filter?.limit}
                    onChangePage={handlePageChange}
                    title="Patients"
                />
            )}


        </>
    )
}

export default page