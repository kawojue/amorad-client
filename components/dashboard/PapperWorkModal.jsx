import DialogContainer from '@/components/ui/modals/Dialog'
import React, { useState } from 'react'

const PapperWorkModal = ({ open, setOpen }) => {

    const closeDialog = () => {
        setOpen(false)
    }

    const [loading, setLoading] = useState(false)

    return (
        <>

            <DialogContainer open={open} onClose={closeDialog} backdropClick={true} size="medium" >

                <div className="p-5"></div>

            </DialogContainer>

        </>
    )
}

export default PapperWorkModal