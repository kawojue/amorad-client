import React from 'react'
import Avatar from '@/components/Avatar'
import CopyIcon from '@/components/icons/CopyIcon'
import DashboardIcon from '@/components/icons/DashboardIcon'
import { EnvelopeIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/outline'
import toast from 'react-hot-toast'

const PractitionerDetails = ({ data }) => {

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            toast.success("Copied to clipboard")
        }).catch(err => {
            toast.error('Failed to copy: ', err)
        })
    }

    return (
        <div className="bg-white p-5 rounded-xl w-full mt-8">

            <div className="flex items-center flex-wrap gap-3 mb-5">

                <Avatar name={data.fullname} size="h-16 w-16" bgColor="bg-white" textColor="text-success" fontSize="text-base" className="border-2 border-success" />

                <div className="tracking-tight">
                    <h3 className='text-base font-medium text-dark'> {data.fullname} </h3>
                    <p className='text-[#8B8B8B] text-xs -mt-1'> {data.email} </p>
                </div>

            </div>

            <div className="flex flex-col lg:flex-row lg:items-start gap-x-12">

                <ul className="w-full lg:w-1/2 divide-y divide-gray-100">

                    <li className="flex justify-between items-center gap-x-6 py-5">

                        <div className="flex min-w-0 gap-x-3 items-center">

                            <div className="flex items-center justify-center h-12 w-12 flex-none rounded-full bg-[#F8FFFF] p-1.5">
                                <UserIcon className='w-4 h-4 text-[#1D2329]' />
                            </div>

                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold text-dark">Full Name</p>
                                <p className="truncate -mt-1 text-xs text-textColor"> {data.fullname} </p>
                            </div>

                        </div>

                        <button onClick={() => copyToClipboard(data.fullname)} className="flex-col items-end">
                            <CopyIcon className='w-5 h-5 text-textColor cursor-pointer' />
                        </button>

                    </li>

                    <li className="flex justify-between items-center gap-x-6 py-5">

                        <div className="flex min-w-0 gap-x-3 items-center">

                            <div className="flex items-center justify-center h-12 w-12 flex-none rounded-full bg-[#F8FFFF] p-1.5">
                                <UserIcon className='w-4 h-4 text-[#1D2329]' />
                            </div>

                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold text-dark">Type</p>
                                <p className="truncate -mt-1 capitalize text-xs text-textColor"> {data.type} </p>
                            </div>

                        </div>

                        <button onClick={() => copyToClipboard(data.type)} className="flex-col items-end">
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
                                <p className="truncate -mt-1 text-xs text-textColor"> {data.email} </p>
                            </div>

                        </div>

                        <button onClick={() => copyToClipboard(data.email)} className="flex-col items-end">
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
                                <p className="truncate -mt-1 text-xs text-textColor"> {data.phone} </p>
                            </div>

                        </div>

                        <button onClick={() => copyToClipboard(data.phone)} className="flex-col items-end">
                            <CopyIcon className='w-5 h-5 text-textColor cursor-pointer' />
                        </button>

                    </li>

                    <li className="flex justify-between items-center gap-x-6 py-5">

                        <div className="flex min-w-0 gap-x-3 items-center">

                            <div className="flex items-center justify-center h-12 w-12 flex-none rounded-full bg-[#F8FFFF] p-1.5">
                                <DashboardIcon color='#1D2329' className='w-4 h-4 text-[#1D2329]' />
                            </div>

                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold text-dark">Address</p>
                                <p className="truncate -mt-1 text-xs text-textColor"> {data.address} </p>
                            </div>

                        </div>

                        <button onClick={() => copyToClipboard(data.address)} className="flex-col items-end">
                            <CopyIcon className='w-5 h-5 text-textColor cursor-pointer' />
                        </button>

                    </li>

                </ul>

                <ul className="w-full lg:w-1/2 divide-y divide-gray-100">

                    <li className="flex justify-between items-center gap-x-6 py-5">

                        <div className="flex min-w-0 gap-x-3 items-center">

                            <div className="flex items-center justify-center h-12 w-12 flex-none rounded-full bg-[#F8FFFF] p-1.5">
                                <UserIcon className='w-4 h-4 text-[#1D2329]' />
                            </div>

                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold text-dark">Affiliation</p>
                                <p className="truncate -mt-1 text-xs text-textColor"> {data.affiliation} </p>
                            </div>

                        </div>

                        <button onClick={() => copyToClipboard(data.affiliation)} className="flex-col items-end">
                            <CopyIcon className='w-5 h-5 text-textColor cursor-pointer' />
                        </button>

                    </li>

                    <li className="flex justify-between items-center gap-x-6 py-5">

                        <div className="flex min-w-0 gap-x-3 items-center">

                            <div className="flex items-center justify-center h-12 w-12 flex-none rounded-full bg-[#F8FFFF] p-1.5">
                                <UserIcon className='w-4 h-4 text-[#1D2329]' />
                            </div>

                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold text-dark">Practice Number</p>
                                <p className="truncate -mt-1 text-xs text-textColor"> {data.practiceNumber} </p>
                            </div>

                        </div>

                        <button onClick={() => copyToClipboard(data.practiceNumber)} className="flex-col items-end">
                            <CopyIcon className='w-5 h-5 text-textColor cursor-pointer' />
                        </button>

                    </li>

                    <li className="flex justify-between items-center gap-x-6 py-5">

                        <div className="flex min-w-0 gap-x-3 items-center">

                            <div className="flex items-center justify-center h-12 w-12 flex-none rounded-full bg-[#F8FFFF] p-1.5">
                                <UserIcon className='w-4 h-4 text-[#1D2329]' />
                            </div>

                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold text-dark">Center</p>
                                <p className="truncate -mt-1 text-xs text-textColor"> {data.centerId} </p>
                            </div>

                        </div>

                        <button onClick={() => copyToClipboard(data.centerId)} className="flex-col items-end">
                            <CopyIcon className='w-5 h-5 text-textColor cursor-pointer' />
                        </button>

                    </li>

                    <li className="flex justify-between items-center gap-x-6 py-5">

                        <div className="flex min-w-0 gap-x-3 items-center">

                            <div className="flex items-center justify-center h-12 w-12 flex-none rounded-full bg-[#F8FFFF] p-1.5">
                                <DashboardIcon color='#1D2329' className='w-4 h-4 text-[#1D2329]' />
                            </div>

                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold text-dark">City</p>
                                <p className="truncate -mt-1 text-xs text-textColor"> {data.city} </p>
                            </div>

                        </div>

                        <button onClick={() => copyToClipboard(data.city)} className="flex-col items-end">
                            <CopyIcon className='w-5 h-5 text-textColor cursor-pointer' />
                        </button>

                    </li>

                    <li className="flex justify-between items-center gap-x-6 py-5">

                        <div className="flex min-w-0 gap-x-3 items-center">

                            <div className="flex items-center justify-center h-12 w-12 flex-none rounded-full bg-[#F8FFFF] p-1.5">
                                <DashboardIcon color='#1D2329' className='w-4 h-4 text-[#1D2329]' />
                            </div>

                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold text-dark">State</p>
                                <p className="truncate -mt-1 text-xs text-textColor"> {data.state} </p>
                            </div>

                        </div>

                        <button onClick={() => copyToClipboard(data.state)} className="flex-col items-end">
                            <CopyIcon className='w-5 h-5 text-textColor cursor-pointer' />
                        </button>

                    </li>

                </ul>

            </div>

        </div>
    )
}

export default PractitionerDetails