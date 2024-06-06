import Button from '@/components/ui/buttons/Button'
import React, { useState } from 'react'
import SecurityModal from './SecurityModal'

const Security = ({ token }) => {

    const [ open, setOpen ] = useState(false)

    return (
        <>

            <div className='w-full md:w-[80%]'>

                <div className="flex flex-col tracking-tight border-b border-border_color pb-3">
                    <h2 class="text-sm font-bold text-dark capitalize">Security</h2>
                    <p className="text-xs text-textColor">Manage your account security.</p>
                </div>

                <div className="py-4 border-b border-border_color">
                    <p className="text-sm text-textColor font-medium mb-5">PASSWORD</p>

                    <div className="flex sm:items-center flex-col sm:flex-row justify-between flex-wrap gap-y-5">

                        <div className="">
                            <h2 className="text-sm font-medium">Account Password</h2>
                            <p className="text-xs text-textColor">Change your account password</p>
                        </div>

                        <Button type='button' onClick={() => setOpen(true)} className='btn-outline text-[12px] border-[#586283]'>
                            Change Password
                        </Button>

                    </div>

                </div>

            </div>

            <SecurityModal token={token} open={open} setOpen={setOpen} />

        </>
    )
}

export default Security