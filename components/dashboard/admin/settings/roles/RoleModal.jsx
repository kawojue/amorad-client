import CustomInput from '@/components/FormElements/CustomInput'
import CustomPassword from '@/components/FormElements/CustomPassword'
import CustomPhoneInput from '@/components/FormElements/CustomPhoneInput'
import CustomSelect from '@/components/FormElements/CustomSelect'
import Button from '@/components/ui/buttons/Button'
import DialogContainer from '@/components/ui/modals/Dialog'
import { addUserRole } from '@/utils/schema'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { Form, Formik } from 'formik'
import React from 'react'

const RoleModal = ({ open, setOpen }) => {

    const closeDialog = () => {
        setOpen(false)
    }

    return (
        <DialogContainer open={open} onClose={closeDialog} backdropClick={true} size="medium" >

            <div className="py-2">

                <div className="flex flex-col justify-start p-5">

                    <div className="flex items-center justify-between border-b pb-4 mb-6">

                        <h2 className="font-semibold text-sm"> Manage Roles </h2>

                        <div className='cursor-pointer' onClick={closeDialog}>
                            <XCircleIcon className='h-6 w-6 text-primary' />
                        </div>

                    </div>

                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            phone: '',
                            role: '',
                            password: '',
                        }}
                        validationSchema={addUserRole}
                        onSubmit={(values, actions) => {

                        }}
                    >
                        {({ values, setFieldValue, errors, touched }) => (

                            <Form autoComplete='off'>

                                <div className="border border-gray-300 p-3 md:p-5 rounded-lg mb-3">

                                    <div className="w-full">

                                        <CustomInput label="Full name" name="name" type="text" placeholder="John Doe" />

                                        <CustomInput label="Email Address" name="email" type="email" placeholder="example@gmail.com" />

                                        <CustomPhoneInput name="phone" label="Phone Number" />

                                        <CustomSelect label="Role" name="role">
                                            <option value="" disabled> Select Role </option>
                                            <option value="doctor"> Doctor </option>
                                            <option value="radiologist"> Radiologist </option>
                                        </CustomSelect>

                                        <CustomPassword label="Password" name="password" placeholder="Password" />

                                        <Button type='submit' className='btn-primary py-3.5 w-full mt-5'>
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