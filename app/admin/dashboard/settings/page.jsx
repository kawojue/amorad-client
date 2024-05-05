import React from 'react'

const page = () => {
  return (
    <>

      <div className="flex flex-wrap lg:flex-row -mx-4">

        {/* FIRST LAWOUT */}

        <div className="w-full lg:w-1/3 xl:w-[25%] mb-5 px-5">

            <h2 className='text-sm font-semibold mb-4'>Settings</h2>

            <ul className='space-y-3 font-medium'>

              <li className='text-xs text-textColor cursor-pointer'>Account</li>

              <li className='text-xs text-textColor cursor-pointer'>Roles</li>

              <li className='text-xs text-textColor cursor-pointer'>Sign In & Security</li>

              <li className='text-xs text-textColor cursor-pointer'>Preferences</li>

            </ul>

        </div>

        {/* SECOND LAYOUT */}

        <div className="w-full lg:w-2/3 xl:w-[75%] px-4 bg-white rounded-s-2xl">

        </div>

      </div>

    </>
  )
}

export default page