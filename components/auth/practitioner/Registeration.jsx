'use client'
import React from 'react';
import { Form, Formik } from 'formik';
import CustomInput from '@/components/FormElements/CustomInput';
import CustomPassword from '@/components/FormElements/CustomPassword';
import { practitionerRegisterSchema } from '@/utils/schema';
import Button from '@/components/ui/buttons/Button';
import CustomPhoneInput from '@/components/FormElements/CustomPhoneInput';
import TermsCheck from '@/components/auth/TermsCheck';
import Link from 'next/link';

const Registeration = ({ onNextStep }) => {

    return (
        <>

            <Link href='signup' className="flex items-center text-sm text-textColor text-xs tracking-tighter cursor-pointer">
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
            </Link>

            <div className="pb-8 mt-8">

                <div className="text-left m-auto">

                    <h2 className="text-xl text-dark font-bold tracking-tighter mt-7">
                        Welcome Here 👋
                    </h2>

                    <p className='text-xs pt-1 text-textColor'>Create an account to continue</p>

                </div>

                <div className="main w-full mt-5">

                    <Formik
                        initialValues={{
                            affiliation: '',
                            practiceNumber: '',
                            email: '',
                            password: '',
                            phone: '',
                            terms: false
                        }}
                        validationSchema={practitionerRegisterSchema}
                        onSubmit={async (values, actions) => {
                            onNextStep()
                        }}
                    >

                        {(props) => (

                            <Form autoComplete='off'>

                                <CustomInput label="Affiliation" name="affiliation" type="text" placeholder=" Ezemmuo Enterprises" />

                                <CustomInput label="Practice Number" name="practiceNumber" type="text" placeholder="0938899499" />

                                <CustomInput label="Email Address" name="email" type="email" placeholder="example@gmail.com" />

                                <CustomPhoneInput name="phone" label="Phone Number*" />

                                <CustomPassword label="Password" name="password" placeholder="Password" />

                                <TermsCheck className="text-primary"
                                    label=""
                                    name="terms" />

                                <Button
                                    type="submit"
                                    color="btn-primary"
                                    className="mt-8 w-full py-3.5"
                                >
                                    Get Started
                                </Button>

                            </Form>

                        )}

                    </Formik>

                </div>

            </div>

        </>
    );
};

export default Registeration;
