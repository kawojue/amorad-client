import CustomPassword from '@/components/FormElements/CustomPassword'
import Button from '@/components/ui/buttons/Button'
import DialogContainer from '@/components/ui/modals/Dialog'
import adminService from '@/services/adminService'
import { getErrorMessage } from '@/utils/errorUtils'
import { PasswordChangeSchema } from '@/utils/schema'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const SecurityModal = ({ open, setOpen, token }) => {

    const [ loading, setLoading] = useState(false)

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
                            currentPassword: '',
                            newPassword: '',
                            confirm_password: ''
                        }}
                        validationSchema={PasswordChangeSchema}
                        onSubmit={async (values, actions) => {

                            setLoading(true);

                            try {

                                const response = await adminService.changePassword(values, token);
                                toast.success(response?.message);
                                setOpen(false)

                            } catch (error) {

                                const message = getErrorMessage(error);
                                toast.error(message);

                            } finally {
                                setLoading(false);
                            }

                        }}
                    >
                        {({ values, setFieldValue, errors, touched }) => (

                            <Form autoComplete='off'>

                                <div className="border border-gray-300 p-3 md:p-5 rounded-lg mb-3">

                                    <div className="w-full">

                                        <CustomPassword className='mb-3' label="Current Password" name="currentPassword" placeholder="Enter current password" />

                                        <CustomPassword className='mb-3' label="New Password" name="newPassword" placeholder="Enter new password" />

                                        <CustomPassword className='mb-3' label="Confirm New Password" name="confirm_password" placeholder="Confirm new password" />

                                        <Button loading={loading} type='submit' className='btn-primary py-3.5 w-full mt-5'>
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