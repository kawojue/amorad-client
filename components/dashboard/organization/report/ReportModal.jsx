import React from 'react'
import Breadcrumb from './Breadcrumb'
import DialogContainer from '@/components/ui/modals/Dialog'
import Button from '@/components/ui/buttons/Button'
import { useRouter } from 'next/navigation'

const ReportModal = ({ open, setOpen, onNextStep }) => {

    const closeDialog = () => {
        setOpen(false)
    }

    const router = useRouter()

    return (
        <DialogContainer open={open} onClose={closeDialog} backdropClick={false} size="medium" >

            <div className="px-5 py-10">

                <Breadcrumb title="Patient Study" desc="Kindly note that an email containing login credentials and a link to the report download page will be sent to the patient " />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-8">

                    <Button
                        onClick={() => router.push('/organization/dashboard/patients')}
                        type="button"
                        color="text-success font-medium"
                        className=" py-3 w-full"
                    >
                        Cancel
                    </Button>

                    <Button
                        type="button"
                        color="btn-success"
                        className=" py-3 w-full"
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