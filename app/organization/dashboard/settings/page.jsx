'use client'

import Preferences from '@/components/dashboard/organization/settings/preferences/Preferences';
import Transaction from '@/components/dashboard/organization/settings/transactions/Transaction';
import Security from '@/components/dashboard/security/Security';
import Account from '@/components/dashboard/settings/Account';
import { getOrganizationProfile, getOrganizationToken } from '@/redux/features/slices/organization/OrganizationAuthSlice';
import { EachElement } from '@/utils/Each';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const page = () => {

  const datas = [
    { name: 'Account', value: 'account' },
    { name: 'Transactions', value: 'transactions' },
    { name: 'Sign In & Security', value: 'security' },
    { name: 'Preferences', value: 'preferences' },
  ];

  const [activeTab, setActiveTab] = useState(datas[0].value);

  const handleTabClick = (status) => {
    setActiveTab(status);
  };


  const token = useSelector(getOrganizationToken)
  const profile = useSelector(getOrganizationProfile)

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
          {activeTab === 'account' && <Account profile={profile} token={token} />}

          {/* Transactions */}
          {activeTab === 'transactions' && <Transaction />}

          {/* Security */}
          {activeTab === 'security' && <Security token={token} />}

          {/* Preferences */}
          {activeTab === 'preferences' && <Preferences />}

        </div>

      </div>

    </>
  )
}

export default page