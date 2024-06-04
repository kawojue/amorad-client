'use client'
import Avatar from '@/components/Avatar'
import BreadCrumb from '@/components/dashboard/Breadcrumb'
import CopyIcon from '@/components/icons/CopyIcon'
import DashboardIcon from '@/components/icons/DashboardIcon'
import Button from '@/components/ui/buttons/Button'
import { EnvelopeIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
import toast from 'react-hot-toast'

const page = ({ params }) => {

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            toast.success("Copied to clipboard")
        }).catch(err => {
            toast.error('Failed to copy: ', err)
        })
    }

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

            <div className="bg-white p-5 rounded-xl md:w-[65%] 2xl:w-1/2 mt-8">

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

                <ul className="divide-y divide-gray-100">

                    <li className="flex justify-between items-center gap-x-6 py-5">

                        <div className="flex min-w-0 gap-x-3 items-center">

                            <div className="flex items-center justify-center h-12 w-12 flex-none rounded-full bg-[#F8FFFF] p-1.5">
                                <UserIcon className='w-4 h-4 text-[#1D2329]' />
                            </div>

                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold text-dark">Full Name</p>
                                <p className="truncate -mt-1 text-xs text-textColor">Dominic</p>
                            </div>

                        </div>

                        <button onClick={() => copyToClipboard('Dominic')} className="flex-col items-end">
                            <CopyIcon className='w-5 h-5 text-textColor cursor-pointer' />
                        </button>

                    </li>

                    <li className="flex justify-between items-center gap-x-6 py-5">

                        <div className="flex min-w-0 gap-x-3 items-center">

                            <div className="flex items-center justify-center h-12 w-12 flex-none rounded-full bg-[#F8FFFF] p-1.5">
                                <EnvelopeIcon className='w-4 h-4 text-[#1D2329]' />
                            </div>

                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold text-dark">Email address</p>
                                <p className="truncate -mt-1 text-xs text-textColor">dominicpraise@gmail.com</p>
                            </div>

                        </div>

                        <button onClick={() => copyToClipboard('email')} className="flex-col items-end">
                            <CopyIcon className='w-5 h-5 text-textColor cursor-pointer' />
                        </button>

                    </li>

                    <li className="flex justify-between items-center gap-x-6 py-5">

                        <div className="flex min-w-0 gap-x-3 items-center">

                            <div className="flex items-center justify-center h-12 w-12 flex-none rounded-full bg-[#F8FFFF] p-1.5">
                                <PhoneIcon className='w-4 h-4 text-[#1D2329]' />
                            </div>

                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold text-dark">Phone Number</p>
                                <p className="truncate -mt-1 text-xs text-textColor">+2347066625389</p>
                            </div>

                        </div>

                        <button onClick={() => copyToClipboard('Phone')} className="flex-col items-end">
                            <CopyIcon className='w-5 h-5 text-textColor cursor-pointer' />
                        </button>

                    </li>

                    <li className="flex justify-between items-center gap-x-6 py-5">

                        <div className="flex min-w-0 gap-x-3 items-center">

                            <div className="flex items-center justify-center h-12 w-12 flex-none rounded-full bg-[#F8FFFF] p-1.5">
                                <DashboardIcon color='#1D2329' className='w-4 h-4 text-[#1D2329]' />
                            </div>

                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold text-dark">Home Address</p>
                                <p className="truncate -mt-1 text-xs text-textColor">House 65, Apt 5, Cele Ejirin RD, Ijebu Ode, Ogun State</p>
                            </div>

                        </div>

                        <button onClick={() => copyToClipboard('Address')} className="flex-col items-end">
                            <CopyIcon className='w-5 h-5 text-textColor cursor-pointer' />
                        </button>

                    </li>

                </ul>


            </div>

        </>
    )
}

export default page
