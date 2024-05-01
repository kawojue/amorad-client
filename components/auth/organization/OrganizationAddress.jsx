'use client'
import React from 'react';
import { Form, Formik } from 'formik';
import CustomInput from '@/components/FormElements/CustomInput';
import Button from '@/components/ui/buttons/Button';
import { organizationAddressSchema } from '@/utils/schema';

const OrganizationAddress = ({ onPrev }) => {

    return (
        <>

            <div onClick={() => onPrev()} className="flex items-center text-sm text-textColor text-xs tracking-tighter cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-3 h-3 mr-2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                Back to previous step
            </div>

            <div className="pb-8 mt-8">

                <div className="text-left m-auto">

                    <h2 className="text-xl text-dark font-bold tracking-tighter mt-7">
                    Additional Information
                    </h2>

                    <p className='text-xs pt-1 text-textColor'>Proceed with the remaining info to continue.</p>

                </div>

                <div className="main w-full mt-5">

                    <Formik
                        initialValues={{
                            address: '',
                            city: '',
                            state: '',
                            zip_code: '',
                            country: '',
                        }}
                        validationSchema={organizationAddressSchema}
                        onSubmit={async (values, actions) => {
                            onNextStep()
                        }}
                    >

                        {(props) => (

                            <Form autoComplete='off'>

                                <CustomInput label="OrganizationAddress" name="OrganizationAddress" type="text" placeholder="What’s your OrganizationAddress?" />

                                <div className="grid grid-cols-2 gap-5">

                                    <CustomInput label="City" name="city" type="text" placeholder="Ikeja" />

                                    <CustomInput label="State" name="state" type="text" placeholder="Lagos" />

                                </div>

                                <CustomInput label="Zip Code" name="zip_code" type="text" placeholder="110011" />

                                <CustomInput label="Country" name="country" type="text" placeholder="Nigeria" />


                                <Button
                                    type="submit"
                                    color="btn-primary"
                                    className="mt-8 w-full py-3.5"
                                >
                                    Create an Account
                                </Button>

                            </Form>

                        )}

                    </Formik>

                </div>

            </div>

        </>
    );
};

export default OrganizationAddress;
