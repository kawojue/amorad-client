import CustomInput from '@/components/FormElements/CustomInput'
import CustomSelect from '@/components/FormElements/CustomSelect'
import Button from '@/components/ui/buttons/Button'
import DialogContainer from '@/components/ui/modals/Dialog'
import adminService from '@/services/adminService'
import { getErrorMessage } from '@/utils/errorUtils'
import { addUserRole } from '@/utils/schema'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const RoleModal = ({ fetchData, open, setOpen, token }) => {

    const [ loading, setLoading] = useState(false)

    const closeDialog = () => {
        setOpen(false)
    }

    return (
        <DialogContainer open={open} onClose={closeDialog} backdropClick={true} size="medium" >

            <div className="py-2">

                <div className="flex flex-col justify-start p-5">

                    <div className="flex items-center justify-between border-b pb-4 mb-6">

                        <h2 className="font-semibold text-sm"> Invite Members </h2>

                        <div className='cursor-pointer' onClick={closeDialog}>
                            <XCircleIcon className='h-6 w-6 text-primary' />
                        </div>

                    </div>

                    <Formik
                        initialValues={{
                            fullname: '',
                            email: '',
                            role: '',
                        }}
                        validationSchema={addUserRole}
                        onSubmit={async (values, actions) => {

                            
                            setLoading(true);

                            try {

                                const response = await adminService.inviteMember(values, token);
                                toast.success(response?.message);

                                fetchData()
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

                                        <CustomInput label="Full name" name="fullname" type="text" placeholder="John Doe" />

                                        <CustomInput label="Email Address" name="email" type="email" placeholder="example@gmail.com" />

                                        <CustomSelect label="Role" name="role">
                                            <option value="" disabled> Select Role </option>
                                            <option value="admin"> Admin </option>
                                            <option value="specialist"> Specialist </option>
                                        </CustomSelect>

                                        <Button loading={loading} type='submit' className='btn-primary py-3.5 w-full mt-5'>
                                            <span>Add User</span>
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

export default RoleModal