import StudyStep from '@/components/dashboard/organization/patient/study/StudyStep'
import React from 'react'

const page = ({ params }) => {

    const { mrn } = params

    return (
        <div className='pb-10'>

            <div className="bg-white p-5 lg:p-8 max-w-2xl rounded-xl m-auto mt-6  sm:mt-8 md:mt-10 2xl:mt-16">

                <StudyStep mrn={mrn} />

            </div>

        </div>
    )
}

export default page