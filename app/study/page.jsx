'use client'
import DicomNavBar from '@/components/dicom/DicomNavBar'
import DicomSideBar from '@/components/dicom/DicomSideBar'
import React, { useState } from 'react'

const page = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className='overflow-y-auto'>

            <DicomNavBar open={open} setOpen={setOpen} />

            <DicomSideBar open={open} setOpen={setOpen} />

            <div className="md:ml-[250px] text-xs p-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima asperiores minus quos ducimus tenetur molestias molestiae repellendus consectetur pariatur, suscipit blanditiis a, quaerat similique, laboriosam ipsa reprehenderit doloremque voluptate? Modi earum a, unde exercitationem sit velit tempora delectus officiis deleniti facilis at atque, necessitatibus eum adipisci possimus rerum animi quos. Dolores maiores enim nihil doloremque error tempora expedita sunt dolore quia consequatur vitae, et doloribus numquam nesciunt dicta, ea illum. Odio velit rem quos. Numquam consectetur cupiditate provident eligendi sunt obcaecati porro maxime esse tempore rerum laborum officiis ratione aliquam, dolorem, voluptates, voluptatum optio explicabo atque minus. Totam, veniam ipsa!
            </div>

        </div>
    )
}

export default page