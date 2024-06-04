'use client'
import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import CustomInput from '@/components/FormElements/CustomInput';
import Button from '@/components/ui/buttons/Button';
import { organizationAddressSchema } from '@/utils/schema';
import authService from '@/services/authService';
import toast from 'react-hot-toast';
import { getErrorMessage } from '@/utils/errorUtils';
import { useRouter } from 'next/navigation';
import { resetOrganization } from '@/redux/features/slices/stepSlice';
import { useDispatch } from 'react-redux';

const OrganizationAddress = ({ onPrev, organization }) => {

    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const router = useRouter();

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

                            const data = { ...organization, ...values };

                            setLoading(true);

                            try {

                                const response = await authService.registerOrganization(data);

                                toast.success(response.message, { duration: 6000 });
                                dispatch(resetOrganization())

                                // Navigate
                                router.replace('/auth/signin')

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

                                <CustomInput label="OrganizationAddress" name="address" type="text" placeholder="What’s your Organization Address?" />

                                <div className="grid grid-cols-2 gap-5">

                                    <CustomInput label="City" name="city" type="text" placeholder="Ikeja" />

                                    <CustomInput label="State" name="state" type="text" placeholder="Lagos" />

                                </div>

                                <CustomInput label="Zip Code" name="zip_code" type="text" placeholder="110011" />

                                <CustomInput label="Country" name="country" type="text" placeholder="Nigeria" />


                                <Button
                                    loading={loading}
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
