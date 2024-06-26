'use client'

import Account from '@/components/dashboard/settings/Account';
import Preferences from '@/components/dashboard/admin/settings/preferences/Preferences';
import Role from '@/components/dashboard/admin/settings/roles/Role';
import Security from '@/components/dashboard/security/Security';
import { getProfile, getToken } from '@/redux/features/slices/adminAuthSlice';
import { EachElement } from '@/utils/Each';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const page = () => {

  const datas = [
    { name: 'Account', value: 'account' },
    { name: 'Roles', value: 'roles' },
    { name: 'Sign In & Security', value: 'security' },
    { name: 'Preferences', value: 'preferences' },
  ];

  const [activeTab, setActiveTab] = useState(datas[0].value);

  const handleTabClick = (status) => {
    setActiveTab(status);
  };

  const token = useSelector(getToken)
  const profile = useSelector(getProfile)

  return (
    <>

      <div className="flex flex-wrap lg:flex-row -mx-4 mt-5">

        {/* FIRST LAWOUT */}

        <div className="w-full lg:w-[20%] mb-5 px-5">

          <h2 className='text-sm font-semibold mb-4'>Settings</h2>

          <ul className='space-y-1 font-medium'>

            <EachElement of={datas} render={(item, index) => (
              <li onClick={() => handleTabClick(item.value)} className={`text-xs ${activeTab === item.value ? 'text-[#186784] font-semibold' : 'text-textColor'} cursor-pointer py-1`}> {item.name} </li>
            )} />

          </ul>

        </div>

        {/* SECOND LAYOUT */}

        <div className="w-full lg:w-[80%] p-5 bg-white rounded-s-2xl">

          {/* Account */}
          {activeTab === 'account' && <Account profile={profile} token={token} /> }

          {/* Roles */}
          {activeTab === 'roles' && <Role token={token} /> }

          {/* Security */}
          {activeTab === 'security' && <Security token={token} /> }

          {/* Preferences */}
          {activeTab === 'preferences' && <Preferences /> }

        </div>

      </div>

    </>
  )
}

export default page