'use client'
import Counter from '@/components/Counter'
import FacilityIcon from '@/components/icons/FacilityIcon'
import PeopleIcon from '@/components/icons/PeopleIcon'
import ReportIcon from '@/components/icons/ReportIcon'
import { getAnalyticsData } from '@/redux/features/slices/admin/analyticsSlice'
import { fetchAnalyticsData } from '@/redux/features/thunks/admin/analyticsThunks'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Overview = () => {

    const response = useSelector(getAnalyticsData)
    const { patientCounts, totalDicomCounts, facilityCounts, caseStudyCounts } = response || {};

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAnalyticsData());
    }, [dispatch]);

    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">

            <div className="space-y-4 relative flex flex-col w-full tracking-tight p-6 bg-white rounded-xl bg-clip-border">

                <div className="flex items-center gap-x-3">

                    <div className="p-2 border border-gray_color rounded-full flex items-center justify-center">
                        <ReportIcon className='w-4 h-4' color='#1D2329' />
                    </div>

                    <h2 className="text-textColor">Dicoms</h2>
                </div>

                <h2 className='text-2xl font-medium'> <Counter value={totalDicomCounts} /> </h2>

            </div>

            <div className="space-y-4 relative flex flex-col w-full tracking-tight p-6 bg-white rounded-xl bg-clip-border">

                <div className="flex items-center gap-x-3">

                    <div className="p-2 border border-gray_color rounded-full flex items-center justify-center">
                        <ReportIcon className='w-4 h-4' color='#1D2329' />
                    </div>

                    <h2 className="text-textColor">Total Patients</h2>
                </div>

                <h2 className='text-2xl font-medium'> <Counter value={patientCounts} /> </h2>

            </div>

            <div className="space-y-4 relative flex flex-col w-full tracking-tight p-6 bg-white  rounded-xl bg-clip-border">

                <div className="flex items-center gap-x-3">

                    <div className="p-2 border border-gray_color rounded-full flex items-center justify-center">
                        <FacilityIcon className='w-4 h-4' color='#1D2329' />
                    </div>

                    <h2 className="text-textColor">Total Facilities</h2>
                </div>

                <h2 className='text-2xl font-medium'> <Counter value={facilityCounts} /> </h2>

            </div>

            <div className="space-y-4 relative flex flex-col w-full tracking-tight p-6 bg-white  rounded-xl bg-clip-border">

                <div className="flex items-center gap-x-3">

                    <div className="p-2 border border-gray_color rounded-full flex items-center justify-center">
                        <PeopleIcon className='w-4 h-4' color='#1D2329' />
                    </div>

                    <h2 className="text-textColor">Case Study</h2>
                </div>

                <h2 className='text-2xl font-medium'> <Counter value={caseStudyCounts} /> </h2>

            </div>

        </div>
    )
}

export default Overview