import CustomPassword from '@/components/FormElements/CustomPassword'
import Button from '@/components/ui/buttons/Button'
import DialogContainer from '@/components/ui/modals/Dialog'
import { PasswordChangeSchema } from '@/utils/schema'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { Form, Formik } from 'formik'
import React from 'react'

const SecurityModal = ({ open, setOpen }) => {

    const closeDialog = () => {
        setOpen(false)
    }

    return (
        <DialogContainer open={open} onClose={closeDialog} backdropClick={true} size="medium" >

            <div className="py-2">

                <div className="flex flex-col justify-start p-5">

                    <div className="flex items-center justify-between border-b pb-4 mb-6">

                        <h2 className="font-semibold text-sm"> Manage Password </h2>

                        <div className='cursor-pointer' onClick={closeDialog}>
                            <XCircleIcon className='h-6 w-6 text-primary' />
                        </div>

                    </div>

                    <Formik
                        initialValues={{
                            password: '',
                            current_password: '',
                            confirm_password: ''
                        }}
                        validationSchema={PasswordChangeSchema}
                        onSubmit={(values, actions) => {

                        }}
                    >
                        {({ values, setFieldValue, errors, touched }) => (

                            <Form autoComplete='off'>

                                <div className="border border-gray-300 p-3 md:p-5 rounded-lg mb-3">

                                        <div className="w-full">

                                            <CustomPassword className='mb-3' label="Current Password" name="current_password" placeholder="Enter current password" />

                                            <CustomPassword className='mb-3' label="New Password" name="password" placeholder="Enter new password" />

                                            <CustomPassword className='mb-3' label="Confirm New Password" name="confirm_password" placeholder="Confirm new password" />

                                            <Button type='submit' className='btn-primary py-3.5 w-full mt-5'>
                                                <span>Update Password</span>
                                            </Button>

                                        </div>

                                </div>

                            </Form>
                        )}
                    </Formik>

                </div>

            </div>

        </DialogContainer>
    )
}

export default SecurityModal