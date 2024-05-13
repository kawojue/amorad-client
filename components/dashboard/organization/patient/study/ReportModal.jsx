import React from 'react'
import DialogContainer from '@/components/ui/modals/Dialog'
import Button from '@/components/ui/buttons/Button'
import { useRouter } from 'next/navigation'
import Breadcrumb from '../../Breadcrumb'

const ReportModal = ({ open, setOpen, onNextStep }) => {

    const closeDialog = () => {
        setOpen(false)
    }

    const router = useRouter()

    return (
        <DialogContainer open={open} onClose={closeDialog} backdropClick={false} size="medium" >

            <div className="px-5 py-10">

                <Breadcrumb title="Assign Record to a Doctor" desc="This process involves assigning a patient's record to a doctor for further review or treatment." />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-8">

                    <Button
                        onClick={() => router.push('/organization/dashboard/patient')}
                        type="button"
                        color="text-success font-medium"
                        className=" py-3 w-full order-2 sm:order-1"
                    >
                        Cancel
                    </Button>

                    <Button
                        type="button"
                        color="btn-success"
                        className=" py-3 w-full order-1 sm:order-2"
                        onClick={onNextStep}
                    >
                        Assign To Doctor
                    </Button>

                </div>

            </div>

        </DialogContainer>


    )
}

export default ReportModal