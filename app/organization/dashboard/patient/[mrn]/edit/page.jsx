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
import organizationService from '@/services/organizationService'
import useFetchData from '@/utils/useFetchData'
import { useSelector } from 'react-redux'
import { getOrganizationToken } from '@/redux/features/slices/organization/OrganizationAuthSlice'
import CustomDateInput from '@/components/FormElements/CustomDateInput'
import toast from 'react-hot-toast'
import { getErrorMessage } from '@/utils/errorUtils'

const page = ({ params }) => {

    const { mrn } = params
    const token = useSelector(getOrganizationToken)

    const fetchFunction = (mrn, token) => organizationService.getPatient(mrn, token);
    const { data, loading, error, refetch } = useFetchData(fetchFunction,
        [mrn, token],
        [mrn]
    );

    const [loadingBtn, setLoading] = useState(false)
    const router = useRouter()

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (

        <>

            <div className='pb-10'>

                <div className="bg-white p-5 lg:p-8 max-w-2xl rounded-xl m-auto mt-6  sm:mt-8 md:mt-10 2xl:mt-16">

                    <Breadcrumb title="Edit Patient Record " desc="Kindly note that an email containing login credentials and a link to the report download page will be sent to the patient " />

                    <Formik
                        enableReinitialize={true}
                        initialValues={{
                            fullname: data?.fullname || "",
                            email: data?.email || "",
                            nin: data?.nin || "",
                            phone: data?.phone || "",
                            dob: data?.dob || "",
                            gender: data?.gender || "",
                            marital_status: data?.maritalStatus || "",
                            address: data?.address || "",
                            zip_code: data?.zip_code || ""
                        }}
                        validationSchema={patientSchema}
                        onSubmit={async (values, actions) => {

                            setLoading(true);

                            try {

                                const response = await organizationService.updatePatient(mrn, values, token)

                                toast.success(response.message);
                                router.push('/organization/dashboard/patient')

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

                                    <CustomInput label="Email address" name="email" type="email" placeholder="dominic@mail.com" />

                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4">

                                    <CustomInput label="Nin" name="nin" type="text" placeholder="0000000000" />

                                    <CustomPhoneInput label="Phone Number" name="phone" type="text" placeholder="+234 123 4567 890" />

                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4">

                                    <CustomDateInput label="Date of Birth" name="dob" placeholder="Choose Date" />

                                    <CustomSelect label="Gender" name="gender">
                                        <option value="" disabled>Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </CustomSelect>

                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4">

                                    <CustomSelect label="Marital Status" name="marital_status">
                                        <option value="" disabled>Select Marital Status</option>
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                        <option value="Divorced">Divorced</option>
                                        <option value="Widowed">Widowed</option>
                                        <option value="Separated">Separated</option>
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
                                        Cancel
                                    </Button>

                                    <Button
                                        type="submit"
                                        color="btn-success"
                                        className=" py-3 w-full order-1 sm:order-2"
                                        loading={loadingBtn}
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