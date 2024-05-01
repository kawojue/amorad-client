import BarChart from '@/components/charts/BarChart'
import Overview from '@/components/dashboard/organization/Overview'
import Button from '@/components/ui/buttons/Button'
import { barChartDataDailyTraffic, barChartOptionsDailyTraffic } from '@/utils/charts'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
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
            <span>Export CSV</span>
          </Button>

          <Button className='text-white btn-success'>
            <span>Add Record</span>
          </Button>
        </div>

      </div>

      {/* OVERVIEW */}
      <Overview />

      {/* CHART AREA */}
      <div className="flex items-center justify-between my-6">

        <p className="text-base font-medium">Records</p>

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
          chartData={barChartDataDailyTraffic}
          chartOptions={barChartOptionsDailyTraffic}
        />
      </div>

    </>
  )
}

export default page