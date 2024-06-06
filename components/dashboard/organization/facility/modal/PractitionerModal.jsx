import DialogContainer from '@/components/ui/modals/Dialog'
import React, { useState } from 'react'
import Breadcrumb from '../../Breadcrumb'
import Button from '@/components/ui/buttons/Button'
import { Form, Formik } from 'formik'
import CustomInput from '@/components/FormElements/CustomInput'
import CustomPhoneInput from '@/components/FormElements/CustomPhoneInput'
import CustomSelect from '@/components/FormElements/CustomSelect'
import { addPractitioner } from '@/utils/schema'
import CustomPassword from '@/components/FormElements/CustomPassword'
import organizationService from '@/services/organizationService'
import toast from 'react-hot-toast'
import { getErrorMessage } from '@/utils/errorUtils'

const PractitionerModal = ({ open, setOpen, profession, token }) => {

    const closeDialog = () => {
        setOpen(false)
    }

    const [loading, setLoading] = useState(false)

    return (
        <>

            <DialogContainer open={open} onClose={closeDialog} backdropClick={true} size="large" >

                <div className="p-5">

                    <Breadcrumb title="Invite A New Practitioner" desc="Kindly note that an email containing login credentials and a link to the report download page will be sent to the patient  " />

                    <Formik
                        initialValues={{
                            fullname: '',
                            phone: '',
                            profession: profession ? profession : '',
                            practiceNumber: '',
                            email: '',
                            address: '',
                            country: '',
                            state: '',
                            city: '',
                            zip_code: '',
                            password: ''
                        }}
                        validationSchema={addPractitioner}
                        onSubmit={async (values, actions) => {

                            setLoading(true);

                            try {

                                const response = await organizationService.addPractitioner(values, token)
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

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4">

                                    <CustomSelect name="profession" label="Profession">
                                        <option value="" selected disabled> Select Profession </option>
                                        <option value="doctor">Doctor</option>
                                        <option value="radiologist"> Radiologist </option>
                                    </CustomSelect>

                                    <CustomInput label="Practice Number" name="practiceNumber" type="text" placeholder="What’s your practice number" />

                                </div>

                                <CustomInput label="Email Address" name="email" type="email" placeholder="Enter email address" />

                                <CustomInput label="Address" name="address" type="text" placeholder="What’s your address" />

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4">

                                    <CustomInput label="Country" name="country" type="text" placeholder="Nigeria" />

                                    <CustomInput label="State" name="state" type="text" placeholder="Lagos" />

                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4">

                                    <CustomInput label="City" name="city" type="text" placeholder="Lagos" />

                                    <CustomInput label="Zip Code" name="zip_code" type="text" placeholder="11001" />

                                </div>

                                <CustomPassword label="Password" name="password" placeholder="Enter Password" />

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-5">

                                    <Button
                                        onClick={() => setOpen(false)}
                                        type="button"
                                        color="text-success font-medium"
                                        className=" py-3 w-full order-2 sm:order-1"
                                    >
                                        Cancel
                                    </Button>

                                    <Button
                                        type="submit"
                                        color="btn-success"
                                        className=" py-3 w-full order-1 sm:order-2"
                                        loading={loading}
                                    >
                                        Create Now
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

export default PractitionerModal