import DialogContainer from '@/components/ui/modals/Dialog'
import React, { useState } from 'react'
import Button from '../ui/buttons/Button'
import { CloudArrowDownIcon } from '@heroicons/react/24/outline'

const PapperWorkModal = ({ open, setOpen, data }) => {

    const closeDialog = () => {
        setOpen(false)
    }

    const [loading, setLoading] = useState(false)

    return (
        <>

            <DialogContainer open={open} onClose={closeDialog} backdropClick={true} size="medium" >

                <div className="p-5">

                    <div className="flex items-center gap-x-2">
                        <h2 className="text-lg font-semibold tracking-tight">Paper Works</h2>
                        <span class="bg-[#FF3333] text-white text-xs px-2 py-0.5 rounded-full">30</span>
                    </div>

                    <div className="mt-6">

                        <ul className='space-y-3'>

                            <li className="border border-dashed rounded-2xl flex justify-between items-center p-3">

                                <div className="flex min-w-0 gap-x-3 items-center">

                                    <div className="flex items-center justify-center h-10 w-10 flex-none rounded-full bg-[#F9FAFB] p-1.5">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.453 11.3064L12.3663 6.43309C11.6596 4.77976 10.3596 4.71309 9.48629 6.28643L8.22629 8.55976C7.58629 9.71309 6.39296 9.81309 5.56629 8.77976L5.41963 8.59309C4.55963 7.51309 3.34629 7.64643 2.72629 8.87976L1.57963 11.1798C0.772958 12.7798 1.93963 14.6664 3.72629 14.6664H12.233C13.9663 14.6664 15.133 12.8998 14.453 11.3064Z" stroke="#475367" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4.64648 5.33301C5.75105 5.33301 6.64648 4.43758 6.64648 3.33301C6.64648 2.22844 5.75105 1.33301 4.64648 1.33301C3.54191 1.33301 2.64648 2.22844 2.64648 3.33301C2.64648 4.43758 3.54191 5.33301 4.64648 5.33301Z" stroke="#475367" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                    </div>

                                    <div className="min-w-0 flex-auto tracking-tight">
                                        <p className="text-sm font-medium text-dark">Bone Marrow Paperwork</p>
                                    </div>

                                </div>

                                <Button className='text-white btn-primary px-2'>
                                    <CloudArrowDownIcon className='h-5 w-5' />
                                    <span className='text-xs font-medium'>Download</span>
                                </Button>

                            </li>

                        </ul>

                    </div>

                </div>

            </DialogContainer>

        </>
    )
}

export default PapperWorkModal