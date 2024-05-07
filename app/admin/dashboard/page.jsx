import Overview from '@/components/dashboard/admin/Overview'
import RecordChart from '@/components/dashboard/admin/RecordChart'
import ExportIcon from '@/components/icons/ExportIcon'
import Button from '@/components/ui/buttons/Button'
import React from 'react'

const page = () => {

  return (
    <>

      <div className="flex items-center justify-between gap-y-5">

        <div className="flex flex-col tracking-tight">
          <h2 class="text-sm font-bold text-dark capitalize">Dashboard</h2>
          <p className="text-xs text-textColor">Showing data over the last 30 days</p>
        </div>

        <Button className='text-dark btn-secondary'>
          <ExportIcon className='h-4 w-4' />
          <span>Export CSV</span>
        </Button>

      </div>

      {/* OVERVIEW */}
      <Overview />

      {/* CHART AREA */}
      <RecordChart />


    </>
  )
}

export default page