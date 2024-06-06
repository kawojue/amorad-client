'use client'
import DashboardPagination from '@/components/dashboard/DashboardPagination'
import FacilitySearch from '@/components/dashboard/organization/facility/FacilitySearch'
import FacilityTable from '@/components/dashboard/organization/facility/FacilityTable'
import AdminModal from '@/components/dashboard/organization/facility/modal/AdminModal'
import PractitionerModal from '@/components/dashboard/organization/facility/modal/PractitionerModal'
import HealthIcon from '@/components/icons/HealthIcon'
import Profileicon from '@/components/icons/Profileicon'
import UserCircleIcon from '@/components/icons/UserCircleIcon'
import TableSkeletonLoader from '@/components/skeleton/TableSkeletonLoader'
import { getOrganizationToken } from '@/redux/features/slices/organization/OrganizationAuthSlice'
import organizationService from '@/services/organizationService'
import { removeEmptyFields } from '@/utils/EmptyFields'
import { PlusIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const page = () => {

    const token = useSelector(getOrganizationToken)
    const [loading, setLoading] = useState(false)
    const [staffs, setStaffs] = useState([])
    const [total, setTotal] = useState(0)

    const initialFormData = {
        page: 1,
        limit: 2,
        sortBy: '',
        search: '',
        role: 'centerAdmin'
    };

    const [search, setSearch] = useState(initialFormData);
    const query = removeEmptyFields(search);

    const datas = [
        { name: 'Center Admin', value: 'centerAdmin', icon: <UserCircleIcon className='w-4 h-4' /> },
        { name: 'Doctors', value: 'doctor', icon: <HealthIcon className='w-4 h-4' /> },
        { name: 'Radiologists', value: 'radiologist', icon: <Profileicon className='w-4 h-4' /> }
    ];

    const [activeTab, setActiveTab] = useState(datas[0].value);

    const handleTabClick = (status) => {
        setSearch((prevSearchCriteria) => ({
            ...prevSearchCriteria,
            role: status,
        }));
        setActiveTab(status);
    };

    const [practitionerOpen, setPractitionerOpen] = useState(false)
    const [adminOpen, setAdminOpen] = useState(false)

    const handleOpen = () => {
        if (activeTab === 'doctor' || activeTab === 'radiologist') {
            setPractitionerOpen(true);
            setAdminOpen(false);
        } else {
            setAdminOpen(true);
            setPractitionerOpen(false);
        }
    }

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
            const response = await organizationService.getStaffs(token, query)
            setStaffs(response?.data);
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

    return (
        <>

            <div className="flex items-center justify-between flex-wrap gap-y-5">

                <h2 class="text-sm font-bold text-dark capitalize">Staff</h2>

                <div className="text-white max-w-max bg-primary py-2.5 rounded-2xl sm:py-1.5 px-2 sm:rounded-full mb-5">

                    <div className="flex items-center flex-wrap gap-x-1 gap-y-2">

                        {datas.map((data) => (
                            <div
                                key={data}
                                className={`flex items-center gap-x-2 cursor-pointer ${activeTab === data.value
                                    ? 'bg-[#1F89AF] rounded-full transition-all duration-300' : ''
                                    } px-2.5 py-1 text-xs transition-all duration-300 font-medium`}
                                onClick={() => handleTabClick(data.value)}
                            >
                                {data.icon}
                                {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
                            </div>
                        ))}

                        <div onClick={handleOpen} className=" h-7 w-7 ml-1.5 p-0.5 cursor-pointer rounded-full bg-[#1F89AF] flex items-center justify-center"> <PlusIcon className='w-4 h-4 text-white' /> </div>

                    </div>

                </div>

            </div>

            <FacilitySearch data={activeTab} setSearch={setSearch} handleOpen={handleOpen} />

            <div className="bg-white px-2 py-3 rounded-lg">

                {loading ? (

                    <TableSkeletonLoader count={12} height={40} />

                ) : (

                    <FacilityTable staffs={staffs} token={token} fetchData={fetchData} />

                )}

            </div>

            {/* PAGINATION */}
            {!loading && datas.length > 0 && (
                <DashboardPagination
                    currentPage={search?.page}
                    totalPages={total}
                    perPage={search?.limit}
                    onChangePage={handlePageChange}
                    title="Patients"
                />
            )}

            {/* ADMIN */}
            <AdminModal token={token} open={adminOpen} setOpen={setAdminOpen} />

            {/* PRATICES */}
            <PractitionerModal token={token} profession={activeTab} open={practitionerOpen} setOpen={setPractitionerOpen} />

        </>
    )
}

export default page