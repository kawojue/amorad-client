import BarChart from '@/components/charts/BarChart'
import Overview from '@/components/dashboard/organization/Overview'
import ExportIcon from '@/components/icons/ExportIcon'
import Button from '@/components/ui/buttons/Button'
import { RecordsData, RecordsOptions } from '@/utils/charts'
import { ArrowUpRightIcon, ExclamationCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
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
            <ExportIcon className='h-5 w-5' />
            <span>Export CSV</span>
          </Button>

          <Button className='text-white btn-success'>
            <PlusCircleIcon className='h-5 w-5' />
            <span>Add Record</span>
          </Button>
        </div>

      </div>

      {/* OVERVIEW */}
      <Overview />

      {/* CHART AREA */}
      <div className="flex items-center justify-between my-6">

        <div className="flex items-center gap-x-2">
          <p className="text-base font-medium">Records</p>
          <ExclamationCircleIcon className='w-5 h-5' />
        </div>

        <div className="flex items-center gap-x-3">

          <select name="" id="" className="form-control pr-6 text-black py-1.5 cursor-pointer rounded-full">
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>

          <div className="flex items-center gap-x-1 bg-secondary p-1.5 px-3.5 text-[12px] tracking-tight text-green rounded-full">
            <span>39.4%</span>
            <ArrowUpRightIcon className='w-2 h-2' />
          </div>

        </div>

      </div>

      <div className="h-[350px] w-full pb-0">
        <BarChart
          chartData={RecordsData}
          chartOptions={RecordsOptions}
        />
      </div>

    </>
  )
}

export default page