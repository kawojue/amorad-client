import React, { useState } from 'react'
import Breadcrumb from './Breadcrumb'
import CustomInput from '@/components/FormElements/CustomInput'
import { Form, Formik } from 'formik'
import Button from '@/components/ui/buttons/Button'
import CustomPhoneInput from '@/components/FormElements/CustomPhoneInput'
import CustomSelect from '@/components/FormElements/CustomSelect'
import { patientSchema } from '@/utils/schema'
import { useRouter } from 'next/navigation'

const PatientStep = ({ onNextStep }) => {

    const [loading, setLoading] = useState(false)
    const router = useRouter()

    return (

        <>

            <Breadcrumb title="Create New Patient Record " desc="Kindly note that an email containing login credentials and a link to the report download page will be sent to the patient " />

            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    nin: "",
                    mrn: "",
                    phone: "",
                    dob: "",
                    gender: "",
                    marital: "",
                    address: "",
                    zip_code: ""
                }}
                validationSchema={patientSchema}
                onSubmit={async (values, actions) => {

                    setLoading(true);

                    setTimeout(() => {
                        onNextStep()
                    }, 1000);

                }}
            >

                {(props) => (

                    <Form autoComplete='off'>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4">

                            <CustomInput label="Full Name" name="name" type="text" placeholder="Dominic Praise" />

                            <CustomInput label="Email address" name="email" type="email" placeholder="dominic@mail.com" />

                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4">

                            <CustomInput label="Nin" name="nin" type="text" placeholder="0000000000" />

                            <CustomInput label="MRN" name="mrn" type="text" placeholder="Leave blank for new record" />

                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4">

                            <CustomPhoneInput label="Phone Number" name="phone" type="text" placeholder="+234 123 4567 890" />

                            <CustomInput label="Date of Birth" name="dob" type="date" placeholder="Choose Date" />

                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4">

                            <CustomSelect label="Gender" name="gender">
                                <option value="" selected disabled> Select Gender </option>
                                <option value="male"> Male </option>
                                <option value="female"> Female </option>
                                <option value="other"> Other </option>
                            </CustomSelect>

                            <CustomSelect label="Marital Status" name="marital">
                                <option value="" selected disabled> Select Marital Status </option>
                                <option value="single"> Single </option>
                                <option value="married"> Married </option>
                                <option value="divorce"> Divorce </option>
                            </CustomSelect>

                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4">

                            <CustomInput label="Address" name="address" type="text" placeholder="What’s your address" />

                            <CustomInput label="Zip Code" name="zip_code" type="text" placeholder="11001" />

                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-5">

                            <Button
                                onClick={() => router.push('/organization/dashboard/patients')}
                                type="button"
                                color="text-success font-medium"
                                className=" py-3 w-full"
                            >
                                Cancel Report
                            </Button>

                            <Button
                                type="submit"
                                color="btn-success"
                                className=" py-3 w-full"
                                loading={loading}
                            >
                                Save
                            </Button>

                        </div>

                    </Form>

                )}

            </Formik>

        </>

    )
}

export default PatientStep