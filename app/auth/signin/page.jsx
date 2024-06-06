'use client'
import CustomInput from '@/components/FormElements/CustomInput';
import CustomPassword from '@/components/FormElements/CustomPassword';
import AuthHeader from '@/components/auth/AuthHeader';
import Button from '@/components/ui/buttons/Button';
import { setOrganization, setToken } from '@/redux/features/slices/organization/OrganizationAuthSlice';
import authService from '@/services/authService';
import { getExpirationTimestamp } from '@/utils/Expires';
import { getErrorMessage } from '@/utils/errorUtils';
import { LoginSchema } from '@/utils/schema';
import { Form, Formik } from 'formik';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const page = () => {

    const [loading, setLoading] = useState(false)
    const router = useRouter();
    const dispatch = useDispatch()

    return (
        <>

            <AuthHeader label='Get Started' link='signup' />

            <div className="relative flex flex-col w-full max-w-full px-6 mx-auto lg:mx-12 py-10">

                <div className="bg-white shadow relative shrink-0 md:flex-0 w-full sm:w-[65%] md:w-[55%]  lg:w-[45%] xl:w-[35%] m-auto flex justify-center flex-col min-w-0 break-words bg-transparent border-0 px-5 py-7 shadow-soft-xl rounded-xl">

                    <div className="pb-5 items-center text-center m-auto">

                        <h2 className="text-xl text-dark font-bold tracking-tighter mt-7">
                            Welcome Back 👋
                        </h2>

                        <p className='text-xs pt-1 text-textColor'>Sign into your account to continue ✨</p>

                    </div>


                    <div className="main mt-5">

                        <Formik
                            initialValues={{
                                email: '',
                                password: ''
                            }}
                            validationSchema={LoginSchema}
                            onSubmit={async (values, actions) => {

                                setLoading(true);

                                try {

                                    const response = await authService.Login(values);

                                    const { access_token, ...data } = response;
                                    const profile = data.data

                                    // // SEND TOKEN AND DATA TO REDUX TOOLKIT
                                    const expire = getExpirationTimestamp(1)

                                    if (profile?.role == 'centerAdmin') {
                                        Cookies.set('organization_token', access_token, { secure: true, sameSite: 'lax' });
                                        Cookies.set('organization_token_exp', expire);
                                        Cookies.set('organization_profile', JSON.stringify(profile));

                                        dispatch(setToken(access_token));
                                        dispatch(setOrganization(profile));
                                        router.replace('/organization/dashboard')
                                        toast.success('User logged in successfully!');

                                    } else {
                                        alert("Come back later")
                                    }

                                } catch (error) {

                                    const message = getErrorMessage(error);
                                    toast.error(message);

                                } finally {
                                    setLoading(false);
                                }

                            }}
                        >

                            {(props) => (

                                <Form autoComplete='off'>

                                    <CustomInput label="Email address" name="email" type="email" placeholder="example@gmail.com" />

                                    <CustomPassword label="Password" name="password" placeholder="Password" />

                                    <div className="flex items-center justify-between my-5">

                                        <div className="flex items-center">
                                            <input type="checkbox" className="shrink-0 border-gray-200 rounded text-primary cursor-pointer w-4 h-4" id="remember" />
                                            <label htmlFor="remember" className="text-xs text-textColor ml-2 font-medium tracking-tight">Keep me logged In</label>
                                        </div>


                                        <Link href='reset-password' className='text-textColor text-xs'>Forget password?</Link>

                                    </div>

                                    <Button
                                        loading={loading}
                                        type="submit"
                                        color="btn-primary"
                                        className="mt-8 py-3 w-full"
                                    >
                                        Sign In
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