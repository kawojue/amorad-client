'use client'
import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import CustomSelect from '@/components/FormElements/CustomSelect'
import Button from '@/components/ui/buttons/Button'
import { referralSchema } from '@/utils/schema'
import Breadcrumb from '../../Breadcrumb'
import { useRouter } from 'next/navigation'
import { EachElement } from '@/utils/Each'
import { getErrorMessage } from '@/utils/errorUtils'
import toast from 'react-hot-toast'
import organizationService from '@/services/organizationService'
import { useSelector } from 'react-redux'
import { getOrganizationToken } from '@/redux/features/slices/organization/OrganizationAuthSlice'

const ReferralStep = ({ doctors, params }) => {

    const token = useSelector(getOrganizationToken)
    const { mrn, studyId } = params

    const [loading, setLoading] = useState(false)
    const router = useRouter()

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

                    try {

                        const response = await organizationService.designateStudy(mrn, studyId, values?.doctor, 'Assigned', token)
                        toast.success(response.message);
                        router.push('/organization/dashboard/report')

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

                        <CustomSelect label="Choose Doctor" name="doctor">
                            <option value="" selected disabled> Choose Doctor </option>
                            <EachElement of={doctors} render={(item) => (
                                <option value={item?.id}> {item.fullname} </option>
                            )} />
                        </CustomSelect>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-8">

                            <Button
                                onClick={() => router.push('/organization/dashboard/report')}
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
                                loading={loading}
                            >
                                Submit
                            </Button>

                        </div>

                    </Form>

                )}

            </Formik>

        </>
    )
}

export default ReferralStep