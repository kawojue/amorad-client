'use client'
import Counter from '@/components/Counter'
import FacilityIcon from '@/components/icons/FacilityIcon'
import PeopleIcon from '@/components/icons/PeopleIcon'
import ReportIcon from '@/components/icons/ReportIcon'
import { getAnalyticsData } from '@/redux/features/slices/organization/organizationAnalyticsSlice'
import { fetchAnalyticsData } from '@/redux/features/thunks/organization/analyticsThunks'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Overview = () => {

    const response = useSelector(getAnalyticsData)
    const { patientCounts, totalDicomCounts, totalStaffs } = response || {};

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAnalyticsData());
    }, [dispatch]);

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5 mt-6">

            <div className="space-y-4 relative flex flex-col w-full tracking-tight p-6 bg-white rounded-xl bg-clip-border">

                <div className="flex items-center gap-x-3">

                    <div className="p-2 border border-gray_color rounded-full flex items-center justify-center">
                        <ReportIcon className='w-4 h-4' color='#1D2329' />
                    </div>

                    <h2 className="text-textColor">Dicoms</h2>
                </div>

                <h2 className='text-2xl font-medium pb-1'><Counter value={totalDicomCounts} /></h2>

            </div>

            <div className="space-y-4 relative flex flex-col w-full tracking-tight p-6 bg-white rounded-xl bg-clip-border">

                <div className="flex items-center gap-x-3">

                    <div className="p-2 border border-gray_color rounded-full flex items-center justify-center">
                        <FacilityIcon className='w-4 h-4' color='#1D2329' />
                    </div>

                    <h2 className="text-textColor">Patients</h2>
                </div>

                <h2 className='text-2xl font-medium pb-1'><Counter value={patientCounts} /></h2>

            </div>

            <div className="space-y-4 relative flex flex-col w-full tracking-tight p-6 bg-white rounded-xl bg-clip-border">

                <div className="flex items-center gap-x-3">

                    <div className="p-2 border border-gray_color rounded-full flex items-center justify-center">
                        <PeopleIcon className='w-4 h-4' color='#1D2329' />
                    </div>

                    <h2 className="text-textColor">Staffs</h2>
                </div>

                <h2 className='text-2xl font-medium pb-1'> <Counter value={totalStaffs} /> </h2>

            </div>

        </div>
    )
}

export default Overview