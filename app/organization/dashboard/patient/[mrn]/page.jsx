import Avatar from '@/components/Avatar'
import BreadCrumb from '@/components/dashboard/Breadcrumb'
import Button from '@/components/ui/buttons/Button'
import Link from 'next/link'
import React from 'react'

const page = ({ params }) => {

    const { mrn } = params

    return (
        <>

            <BreadCrumb
                segments={[
                    { title: 'Dashboard', link: '/organization/dashboard' },
                    { title: 'Patients', link: '/organization/dashboard/patient' },
                    { title: 'Patient Infomation' }
                ]}
            />

            <div className="md:w-[65%] 2xl:w-1/2 mt-8">

                <div className="flex flex-col md:flex-row md:items-center justify-between flex-wrap gap-y-3 mb-5">

                    <div className="flex items-center gap-x-2">

                        <Avatar name="Dominic Praise" size="h-16 w-16" bgColor="bg-white" textColor="text-success" fontSize="text-base" className="border-2 border-success" />

                        <div className="tracking-tight">
                            <h3 className='text-base font-medium text-dark'>Dominic Praise</h3>
                            <p className='text-[#8B8B8B] text-xs -mt-1'>dominicpraise@gmail.com</p>
                        </div>

                    </div>

                    <Link className='flex justify-end' href={`${mrn}/report`}>
                        <Button
                            color="btn-primary"
                            className="py-2.5"
                        >
                            View Patient Study
                        </Button>
                    </Link>

                </div>

                <ul class="divide-y divide-gray-100">

                    <li class="flex justify-between gap-x-6 py-5">

                        <div class="flex min-w-0 gap-x-4 items-center">

                            <div className="flex items-center justify-center h-14 w-14 flex-none rounded-full bg-gray-50 p-5">
                                H2
                            </div>

                            <div class="min-w-0 flex-auto">
                                <p class="text-sm font-semibold text-dark">First Name</p>
                                <p class="truncate -mt-1 text-xs text-textColor">Dominic</p>
                            </div>

                        </div>

                        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p class="text-sm leading-6 text-gray-900">Co-Founder / CEO</p>
                            <p class="mt-1 text-xs leading-5 text-gray-500">Last seen <time datetime="2023-01-23T13:23Z">3h ago</time></p>
                        </div>
                    </li>

                </ul>


            </div>

        </>
    )
}

export default page