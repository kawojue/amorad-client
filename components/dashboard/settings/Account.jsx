import CustomInput from '@/components/FormElements/CustomInput'
import Button from '@/components/ui/buttons/Button'
import { Form, Formik } from 'formik'
import React from 'react'
import ProfileImage from './ProfileImage'
import { profileSchema } from '@/utils/schema'

const Account = ({ token, profile }) => {

    return (
        <>

            <div className="flex flex-col tracking-tight">
                <h2 class="text-sm font-bold text-dark capitalize">Account Settings</h2>
                <p className="text-xs text-textColor">You can change your account details here.</p>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap gap-5 mt-5">

                <div className="bg-white shadow-2xl w-full px-5 py-8 2xl:py-10 2xl:px-8 rounded-xl">

                    <Formik
                        initialValues={{
                            fullname: profile?.fullname || '',     
                            email: profile?.email || '', 
                        }}
                        validationSchema={profileSchema}
                        onSubmit={async (values, actions) => {
                        }}
                    >

                        {(props) => (

                            <Form autoComplete='off'>

                                <CustomInput label="Full name" name="fullname" type="text" placeholder="Ezemmuo Technologie" />

                                <CustomInput label="Email address" name="email" type="email" placeholder="example@gmail.com" />

                                <Button
                                    type="submit"
                                    color="btn-primary"
                                    className="mt-6 py-3.5 w-full"
                                >
                                    Sign In
                                </Button>

                            </Form>

                        )}

                    </Formik>

                </div>

                <div className="bg-white shadow-2xl w-full px-5 py-8 2xl:py-10 2xl:px-8 rounded-xl flex items-center justify-center">

                    <ProfileImage profile={profile} token={token} />

                </div>

            </div>

        </>
    )
}

export default Account