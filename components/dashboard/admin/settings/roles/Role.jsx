import Button from '@/components/ui/buttons/Button'
import React from 'react'
import RoleTable from './RoleTable'

const Role = () => {
    return (
        <div className='w-full md:w-[80%]'>

            <div className="flex sm:items-center flex-col sm:flex-row justify-between flex-wrap gap-y-5">

                <div className="flex flex-col tracking-tight">
                    <h2 class="text-sm font-bold text-dark capitalize">Roles</h2>
                    <p className="text-xs text-textColor">Invite your colleagues to work faster and collaborate together.</p>
                </div>

               <div className="flex justify-end">
               <Button className='btn-outline border-[#586283]'>
                    Add New Member
                </Button>
               </div>

            </div>

            <div className="mt-10">
                <RoleTable />
            </div>

        </div>
    )
}

export default Role