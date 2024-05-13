import React, { useState } from 'react'
import Breadcrumb from './Breadcrumb'
import { Form, Formik } from 'formik'
import CustomSelect from '@/components/FormElements/CustomSelect'
import Button from '@/components/ui/buttons/Button'
import { referralSchema } from '@/utils/schema'

const ReferralStep = ({ onPrevStep }) => {

    const [ loading, setLoading ] = useState(false)

    return (
        <>

            <Breadcrumb title="Referring Doctor" desc="To assign a Doctor to the study, select a registered Doctor from the dropdown. The selected Doctor will be attached to this study and the study will be submitted to the Doctor." />

            <Formik
                initialValues={{
                    doctor: '',
                }}
                validationSchema={referralSchema}
                onSubmit={async (values, actions) => {

                    setLoading(true);

                    setTimeout(() => {
                        setLoading(false)
                    }, 1000);

                }}
            >

                {(props) => (

                    <Form autoComplete='off'>

                        <CustomSelect label="Choose Doctor" name="doctor">
                            <option value="" selected disabled> Choose Doctor </option>
                            <option value="dominic"> Donimic </option>
                        </CustomSelect>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-8">

                            <Button
                                onClick={onPrevStep}
                                type="button"
                                color="text-success font-medium"
                                className=" py-3 w-full order-2 sm:order-1"
                            >
                                Back to Previous
                            </Button>

                            <Button
                                type="submit"
                                color="btn-success"
                                className=" py-3 w-full order-1 sm:order-2"
                                loading={loading}
                            >
                                Submit Record
                            </Button>

                        </div>

                    </Form>

                )}

            </Formik>

        </>
    )
}

export default ReferralStep