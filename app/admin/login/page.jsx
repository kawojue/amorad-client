'use client'
import CustomInput from '@/components/FormElements/CustomInput';
import CustomPassword from '@/components/FormElements/CustomPassword';
import AuthHeader from '@/components/auth/AuthHeader';
import Button from '@/components/ui/buttons/Button';
import useAuthMiddleware from '@/middleware/adminAuthMiddleware';
import { setToken, setUser } from '@/redux/features/slices/adminAuthSlice';
import authService from '@/services/authService';
import { getErrorMessage } from '@/utils/errorUtils';
import { LoginSchema } from '@/utils/schema';
import { Form, Formik } from 'formik';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const page = () => {

    const [loading, setLoading] = useState(false)
    const router = useRouter();
    const dispatch = useDispatch()

    const { isAuthenticated, checkAuthorization } = useAuthMiddleware();

    if (isAuthenticated() || checkAuthorization()) {
        router.replace('/admin/dashboard')
    }

    return (
        <>

            <AuthHeader label='Get Started' link='#' />

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

                                    const response = await authService.adminLogin(values);
                                    const { access_token, ...data } = response;

                                    // // SEND TOKEN AND DATA TO REDUX TOOLKIT
                                    const expirationSeconds = 30 * 24 * 60 * 60;
                                    const expire = Math.floor(Date.now() / 1000) + expirationSeconds;


                                    Cookies.set('admin_token', access_token, { secure: true, sameSite: 'lax' });
                                    Cookies.set('admin_token_exp', expire);

                                    dispatch(setToken(access_token));
                                    dispatch(setUser(data.data));

                                    // Navigate
                                    router.replace('/admin/dashboard')

                                } catch (error) {

                                    const message = getErrorMessage(error);
                                    console.log(message);

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

                                    </div>

                                    <Button
                                        disabled={loading}
                                        type="submit"
                                        color="btn-primary"
                                        className="mt-8 py-3.5 w-full"
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