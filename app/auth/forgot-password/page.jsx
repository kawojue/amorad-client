'use client'
import CustomInput from '@/components/FormElements/CustomInput';
import AuthHeader from '@/components/auth/AuthHeader';
import Button from '@/components/ui/buttons/Button';
import { ForgotPassword } from '@/utils/schema';
import { Form, Formik } from 'formik';
import React from 'react'

const page = () => {
    
    return (
        <>

            <AuthHeader label='Sign In' link='signin' />

            <div className="relative flex flex-col w-full max-w-full px-6 mx-auto lg:mx-12 py-10">

                <div className="bg-white shadow relative shrink-0 md:flex-0 w-full sm:w-[65%] md:w-[55%]  lg:w-[45%] xl:w-[35%] m-auto flex justify-center flex-col min-w-0 break-words bg-transparent border-0 px-5 py-7 shadow-soft-xl rounded-xl">

                    <div className="pb-5 items-center text-center m-auto">

                        <h2 className="text-xl text-dark font-bold tracking-tighter mt-7">
                            Reset Password
                        </h2>

                        <p className='text-xs pt-1 text-textColor'>Reset your account password to continue ✨</p>

                    </div>


                    <div className="main mt-5">

                        <Formik
                            initialValues={{
                                email: '',
                            }}
                            validationSchema={ForgotPassword}
                            onSubmit={async (values, actions) => {
                            }}
                        >

                            {(props) => (

                                <Form autoComplete='off'>

                                    <CustomInput label="Email address" name="email" type="email" placeholder="example@gmail.com" />

                                    <Button
                                        type="submit"
                                        color="btn-primary"
                                        className="mt-8 w-full py-3.5"
                                    >
                                        Get Reset Link
                                    </Button>

                                </Form>

                            )}

                        </Formik>

                    </div>

                </div>


            </div>


        </>
    )
}

export default page