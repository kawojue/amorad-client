import FacilityIcon from '@/components/icons/FacilityIcon'
import PeopleIcon from '@/components/icons/PeopleIcon'
import ReportIcon from '@/components/icons/ReportIcon'
import React from 'react'

const Overview = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5 mt-6">

            <div className="space-y-4 relative flex flex-col w-full tracking-tight p-6 border border-[#E4E7EC]  rounded-xl bg-clip-border">

                <div className="flex items-center gap-x-3">

                    <div className="p-2 border border-gray_color rounded-full flex items-center justify-center">
                        <ReportIcon className='w-4 h-4' color='#1D2329' />
                    </div>

                    <h2 className="text-textColor">Total Patients</h2>
                </div>

                <h2 className='text-2xl font-medium pb-1'>330,340.00</h2>

            </div>

            <div className="space-y-4 relative flex flex-col w-full tracking-tight p-6 border border-[#E4E7EC]  rounded-xl bg-clip-border">

                <div className="flex items-center gap-x-3">

                    <div className="p-2 border border-gray_color rounded-full flex items-center justify-center">
                        <FacilityIcon className='w-4 h-4' color='#1D2329' />
                    </div>

                    <h2 className="text-textColor">Total Facilities</h2>
                </div>

                <h2 className='text-2xl font-medium pb-1'>8,000</h2>

            </div>

            <div className="space-y-4 relative flex flex-col w-full tracking-tight p-6 border border-[#E4E7EC]  rounded-xl bg-clip-border">

                <div className="flex items-center gap-x-3">

                    <div className="p-2 border border-gray_color rounded-full flex items-center justify-center">
                        <PeopleIcon className='w-4 h-4' color='#1D2329' />
                    </div>

                    <h2 className="text-textColor">Patient Study</h2>
                </div>

                <h2 className='text-2xl font-medium pb-1'>23,000</h2>

            </div>

        </div>
    )
}

export default Overview