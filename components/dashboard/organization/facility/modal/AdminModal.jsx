import DialogContainer from '@/components/ui/modals/Dialog'
import React, { useState } from 'react'
import Breadcrumb from '../../Breadcrumb'
import { Form, Formik } from 'formik'
import Button from '@/components/ui/buttons/Button'
import CustomInput from '@/components/FormElements/CustomInput'
import CustomPhoneInput from '@/components/FormElements/CustomPhoneInput'
import { addCenterAdmin } from '@/utils/schema'
import CustomPassword from '@/components/FormElements/CustomPassword'
import organizationService from '@/services/organizationService'
import { getErrorMessage } from '@/utils/errorUtils'
import toast from 'react-hot-toast'

const AdminModal = ({ open, setOpen, token, }) => {

    const closeDialog = () => {
        setOpen(false)
    }

    const [loading, setLoading] = useState(false)

    return (
        <>

            <DialogContainer open={open} onClose={closeDialog} backdropClick={true} size="medium" >

                <div className="p-5">

                    <Breadcrumb title="Invite New Center Admin" desc="Kindly note that an email containing login credentials and a link to the report download page will be sent to the patient " />

                    <Formik
                        initialValues={{
                            fullname: '',
                            phone: '',
                            email: '',
                            password: '',
                        }}
                        validationSchema={addCenterAdmin}
                        onSubmit={async (values, actions) => {

                            setLoading(true)

                            try {

                                const response = await organizationService.addAdmin(values, token)
                                toast.success(response.message);
                                setOpen(false)

                            } catch (error) {

                                const message = getErrorMessage(error);
                                toast.error(message, { duration: 5000 });

                            } finally {
                                setLoading(false);
                            }

                        }}
                    >

                        {(props) => (

                            <Form autoComplete='off'>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4">

                                    <CustomInput label="Full Name" name="fullname" type="text" placeholder="Dominic Praise" />

                                    <CustomPhoneInput label="Phone Number" name="phone" type="text" placeholder="+234 123 4567 890" />

                                </div>

                                <CustomInput label="Email Address" name="email" type="email" placeholder="Enter email address" />

                                <CustomPassword label="Password" name="password" placeholder="Enter Password" />

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-7">

                                    <Button
                                        onClick={() => setOpen(false)}
                                        type="button"
                                        color="text-success font-medium"
                                        className=" py-3 w-full order-2 sm:order-1"
                                    >
                                        Cancel Record
                                    </Button>

                                    <Button
                                        type="submit"
                                        color="btn-success"
                                        className=" py-3 w-full order-1 sm:order-2"
                                        loading={loading}
                                    >
                                        Invite Now
                                    </Button>

                                </div>

                            </Form>

                        )}

                    </Formik>

                </div>

            </DialogContainer>

        </>
    )
}

export default AdminModal