'use client'
import DicomNavBar from '@/components/dicom/DicomNavBar'
import DicomSideBar from '@/components/dicom/DicomSideBar'
import React, { useState } from 'react'

const page = () => {

    const [ open, setOpen ] = useState(false)

    return (
        <div className='overflow-y-auto'>

            <DicomNavBar open={open} setOpen={setOpen} />

            <DicomSideBar open={open} setOpen={setOpen} />

        </div>
    )
}

export default page