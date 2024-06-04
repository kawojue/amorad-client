'use client'
import BreadCrumb from '@/components/dashboard/Breadcrumb'
import DetailsLoader from '@/components/skeleton/DetailsLoader'
import { getToken } from '@/redux/features/slices/adminAuthSlice'
import adminService from '@/services/adminService'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PractitionerDetails from '@/components/dashboard/admin/PractitionerDetails'

const page = ({ params }) => {

    const token = useSelector(getToken)
    const { id } = params
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})

    // FETCH DATA
    const fetchData = async () => {
        try {
            const response = await adminService.getPractitioner(id, token)
            setData(response?.data);
        } catch (error) {
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, [id])

    return (
        <>

            <BreadCrumb
                segments={[
                    { title: 'Dashboard', link: '/admin/dashboard' },
                    { title: 'Radiologists', link: '/admin/dashboard/radiologists' },
                    { title: 'Radiologists Infomation' }
                ]}
            />

            {loading ? (
                <DetailsLoader />
            ) : (

                <PractitionerDetails data={data} />

            )}

        </>
    )
}

export default page
