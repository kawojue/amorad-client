import BarChart from '@/components/charts/BarChart'
import Overview from '@/components/dashboard/organization/Overview'
import RecordChart from '@/components/dashboard/organization/RecordChart'
import ExportIcon from '@/components/icons/ExportIcon'
import Button from '@/components/ui/buttons/Button'
import { RecordsData, RecordsOptions } from '@/utils/charts'
import { ArrowUpRightIcon, ExclamationCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-5">

        <div className="flex flex-col tracking-tight">
          <h2 class="text-sm font-bold text-dark capitalize">Dashboard</h2>
          <p className="text-xs text-textColor">Showing data over the last 30 days</p>
        </div>

        <div className="flex items-center justify-end gap-x-3">
          <Button className='text-dark btn-secondary'>
            <ExportIcon className='h-4 w-4' />
            <span className='text-xs'>Export CSV</span>
          </Button>

          {/* <Link href='dashboard/record/add'>
            <Button className='text-white btn-success'>
              <PlusCircleIcon className='h-5 w-5' />
              <span className='text-xs'>Add Record</span>
            </Button>
          </Link> */}

        </div>

      </div>

      {/* OVERVIEW */}
      <Overview />

      {/* CHART AREA */}
      <RecordChart />

    </>
  )
}

export default page