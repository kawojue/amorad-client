'use client'
import React, { useState } from 'react'
import CustomInput from '@/components/FormElements/CustomInput'
import { Form, Formik } from 'formik'
import Button from '@/components/ui/buttons/Button'
import CustomPhoneInput from '@/components/FormElements/CustomPhoneInput'
import CustomSelect from '@/components/FormElements/CustomSelect'
import { patientSchema } from '@/utils/schema'
import { useRouter } from 'next/navigation'
import Breadcrumb from '@/components/dashboard/organization/Breadcrumb'

const page = () => {

    const [loading, setLoading] = useState(false)
    const router = useRouter()

    return (

        <>

            <div className='pb-10'>

                <div className="bg-white p-5 lg:p-8 max-w-2xl rounded-xl m-auto mt-6  sm:mt-8 md:mt-10 2xl:mt-16">

                    <Breadcrumb title="Edit Patient Record " desc="Kindly note that an email containing login credentials and a link to the report download page will be sent to the patient " />

                    <Formik
                        initialValues={{
                            name: "",
                            email: "",
                            nin: "",
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
                                router.push(`/organization/dashboard/patient`)
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

                                    <CustomPhoneInput label="Phone Number" name="phone" type="text" placeholder="+234 123 4567 890" />

                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4">

                                    <CustomInput label="Date of Birth" name="dob" type="date" placeholder="Choose Date" />

                                    <CustomSelect label="Gender" name="gender">
                                        <option value="" selected disabled> Select Gender </option>
                                        <option value="male"> Male </option>
                                        <option value="female"> Female </option>
                                        <option value="other"> Other </option>
                                    </CustomSelect>

                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4">

                                    <CustomSelect label="Marital Status" name="marital">
                                        <option value="" selected disabled> Select Marital Status </option>
                                        <option value="single"> Single </option>
                                        <option value="married"> Married </option>
                                        <option value="divorce"> Divorce </option>
                                    </CustomSelect>

                                    <CustomInput label="Zip Code" name="zip_code" type="text" placeholder="11001" />


                                </div>

                                <CustomInput label="Address" name="address" type="text" placeholder="What’s your address" />

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-5">

                                    <Button
                                        onClick={() => router.push('/organization/dashboard/patient')}
                                        type="button"
                                        color="text-success font-medium"
                                        className=" py-3 w-full order-2 sm:order-1"
                                    >
                                        Cancel Report
                                    </Button>

                                    <Button
                                        type="submit"
                                        color="btn-success"
                                        className=" py-3 w-full order-1 sm:order-2"
                                        loading={loading}
                                    >
                                        Save
                                    </Button>

                                </div>

                            </Form>

                        )}

                    </Formik>

                </div>

            </div>

        </>

    )
}

export default page