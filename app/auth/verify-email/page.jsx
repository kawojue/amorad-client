'use client'

import Image from 'next/image';
import Link from 'next/link';
import ButtonOne from '@/components/ui/buttons/ButtonOne';
import { useState } from 'react';
import useCountdownTimer from '@/utils/useCountdownTimer';
import { useRouter } from 'next/navigation';
import OtpInput from 'react-otp-input';
import Dialog from '@/components/ui/modals/Dialog';

const page = () => {

    const router = useRouter()

    // MODAL
    const [open, setOpen] = useState(false)

    const closeDialog = () => {
        setOpen(false);
    };

    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("adeoyesolomon2693@gmail.com")

    const { formattedTime } = useCountdownTimer(300, true);

    // HANDLE RESEND
    const handleResend = () => {
        alert("Done")
    }

    // OPT
    const [otp, setOtp] = useState('');
    const isOtpValid = otp.length === 6;

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        setTimeout(() => {
            setOpen(true)
            setLoading(false)
        }, 1000);
    };



    return (
        <>

            <div className="relative flex items-center p-0 overflow-hidden bg-center bg-cover">

                <div className="container mx-auto z-1">

                    <div className="relative flex flex-wrap">

                        <div className="relative flex flex-col w-full max-w-full px-6 mx-auto lg:mx-12 py-5 min-h-screen">

                            <div className="mb-4">
                                <a onClick={() => router.back()} className='flex items-center text-sm text-dark' href='javascript:void(0)'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                                    <span className=' tracking-tight'>Back to previous page</span> </a>
                            </div>

                            <div className="relative shrink-0 md:flex-0 w-full md:w-6/12 lg:w-[40%] m-auto flex justify-center flex-col sm:pt-10 min-w-0 break-words bg-transparent border-0 shadow-none py-10">

                                <div className="pb-3 items-center text-center m-auto">
                                    <Image
                                        src='/images/logo.svg'
                                        width={120}
                                        height={120}
                                        alt="Logo"
                                        className='text-center m-auto'
                                    />

                                    <p className='py-4 font-bold text-lg '>Email verfication</p>

                                    <p className="text-dark/80 text-xs sm:text-sm mb-3 tracking-tight"> We sent a reset passsword link to your email address <span className="font-medium text-primary">{email}</span> </p>

                                    {/* EXPIRES TIMER */}
                                    <p className="text-dark/80 text-xs sm:text-sm mb-5 tracking-tight"> Expires in 5 minutes: <span className="font-semibold text-primary"> {formattedTime} </span> </p>

                                </div>


                                <div className="main mb-4">

                                    <OtpInput
                                        value={otp}
                                        onChange={setOtp}
                                        inputType="tel"
                                        numInputs={6}
                                        inputStyle={{ width: '50px' }}
                                        containerStyle="flex items-center gap-x-1 sm:gap-x-3 m-auto justify-center"
                                        renderInput={(props) => <input {...props} className="form-control text-lg font-semibold text-dark bg-[#F1F6FB]" />}
                                    />

                                    <ButtonOne
                                        type="submit"
                                        color="btn-success"
                                        className="mt-8"
                                        onClick={handleSubmit}
                                        disabled={!isOtpValid || loading}
                                        loading={loading}
                                        iconColor='text-success'
                                    >
                                        Proceed
                                    </ButtonOne>

                                </div>

                                <Link className='text-xs pt-3 text-center text-dark' href="#">Didn’t receive the OTP code ? Please check your spam folder or
                                    try to resend the OTP code. <span onClick={handleResend} className='text-primary font-bold'> Resend code</span> </Link>

                            </div>


                        </div>

                    </div>


                </div>

            </div>

            <Dialog open={open} onClose={closeDialog} backdropClick={false} size="small" >

                <div className="flex justify-center flex-col gap-y-5 text-center p-10">

                    <Image src='/images/auth/success.png' width={68} height={68} className='m-auto object-cover' />

                    <p className="text-sm md:text-lg font-semibold">Account created successfully</p>

                    <ButtonOne onClick={() => {
                        router.push('/dashboard');
                        closeDialog();
                    }}
                        type="submit"
                        color="btn-success"
                        iconColor='text-success'
                    >
                        Proceed
                    </ButtonOne>

                </div>

            </Dialog>

        </>
    );
};

export default page;
