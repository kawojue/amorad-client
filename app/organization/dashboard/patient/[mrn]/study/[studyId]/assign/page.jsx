'use client'
import ReferralStep from '@/components/dashboard/organization/patient/study/ReferralStep'
import { getDoctors } from '@/redux/features/slices/organization/organizationAnalyticsSlice';
import { fetchDoctors } from '@/redux/features/thunks/organization/analyticsThunks';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const page = ({ params }) => {

  const response = useSelector(getDoctors)

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchDoctors());
  }, [dispatch]);

  return (
    <div className='pb-10'>

      <div className="bg-white p-5 lg:p-8 max-w-2xl rounded-xl m-auto mt-6  sm:mt-8 md:mt-10 2xl:mt-16">

        <ReferralStep params={params} doctors={response} />

      </div>

    </div>
  )
}

export default page