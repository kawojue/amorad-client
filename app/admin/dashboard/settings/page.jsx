import React from 'react'

const page = () => {
  return (
    <>

      <div className="flex flex-wrap lg:flex-row -mx-4 mt-5">

        {/* FIRST LAWOUT */}

        <div className="w-full lg:w-[20%] mb-5 px-5">

            <h2 className='text-sm font-semibold mb-4'>Settings</h2>

            <ul className='space-y-3 font-medium'>

              <li className='text-xs text-textColor cursor-pointer'>Account</li>

              <li className='text-xs text-textColor cursor-pointer'>Roles</li>

              <li className='text-xs text-textColor cursor-pointer'>Sign In & Security</li>

              <li className='text-xs text-textColor cursor-pointer'>Preferences</li>

            </ul>

        </div>

        {/* SECOND LAYOUT */}

        <div className="w-full lg:w-[80%] p-5 bg-white rounded-s-2xl">

        <div className="flex flex-col tracking-tight">
          <h2 class="text-sm font-bold text-dark capitalize">Dashboard</h2>
          <p className="text-xs text-textColor">Showing data over the last 30 days</p>
        </div>

        </div>

      </div>

    </>
  )
}

export default page