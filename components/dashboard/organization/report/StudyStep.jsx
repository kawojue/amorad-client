import React, { useState } from 'react'
import Breadcrumb from './Breadcrumb'
import CustomInput from '@/components/FormElements/CustomInput'
import { Form, Formik } from 'formik'
import Button from '@/components/ui/buttons/Button'
import CustomSelect from '@/components/FormElements/CustomSelect'
import { studySchema } from '@/utils/schema'
import TextArea from '@/components/FormElements/TextArea'
import ReportModal from './ReportModal'
import FileUpload from '../../FileUpload'

const StudyStep = ({ onNextStep, onPrevStep }) => {

    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)

    return (

        <>

            <Breadcrumb title="Patient Study" desc="Kindly note that an email containing login credentials and a link to the report download page will be sent to the patient " />

            <Formik
                initialValues={{
                    body_part: '',
                    priority: '',
                    cpt_code: '',
                    modality: '',
                    description: '',
                    clinical_info: '',
                    site: '',
                    access_code: '',
                    reporting_status: '',
                    paperworks: null,
                }}
                validationSchema={studySchema}
                onSubmit={async (values, actions) => {

                    // setLoading(true);
                    console.log(values);

                    // setTimeout(() => {
                    //     setLoading(false)
                    //     setOpen(true)
                    // }, 1000);

                }}
            >

                {({ values, setFieldValue, errors, touched }) => (

                    <Form autoComplete='off'>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">

                            <CustomSelect label="Body Part (Procedure Name)" name="body_part">
                                <option value="" selected disabled> Select the body part being examined </option>
                                <option value="leg"> Leg </option>
                                <option value="Oesophagus"> Oesophagus </option>
                            </CustomSelect>

                            <CustomSelect label="Priority" name="priority">
                                <option value="" selected disabled> Select Priority</option>
                                <option value="routine"> Routine </option>
                            </CustomSelect>

                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">

                            <CustomInput label="CPT Code" name="cpt_code" type="text" placeholder="CPT code" />

                            <CustomSelect label="Modality" name="modality">
                                <option value="" selected disabled> Select Modality </option>
                                <option value="CT"> CT </option>
                            </CustomSelect>


                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">

                            <TextArea name="description" className="h-32" label="Description" />

                            <TextArea name="clinical_info" className="h-32" label="Clinical Information / History" />

                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">

                            <CustomInput label="Site" name="site" type="text" placeholder="Site" />

                            <CustomInput label="Accession No" name="access_code" type="text" placeholder="98G7AQ5E6901FJ" />

                        </div>

                        <CustomSelect label="Reporting Status" name="reporting_status">
                            <option value="" selected disabled> Select status </option>
                            <option value="Unread"> Unread </option>
                            <option value="Closed/Opened"> Closed/Opened </option>
                        </CustomSelect>

                        <div className="mt-4">
                            <FileUpload name="paperworks" title="Paper Work Attachment(s)" label="Paper Work Attachment(s)
                                Drop files here (PDF, doc, docx, PNG, JPG, JPEG, GIF)" btnColor="btn-primary" className="border border-dashed border-[#D0D5DD]" multiple={true}
                                accept="image/jpeg,image/png,application/pdf"
                           error={touched.paperworks && errors.paperworks} />

                            {touched.paperworks && errors.paperworks && (
                                <div className="text-red-600 text-xs font-light mt-0 pt-1">{errors.paperworks}</div>
                            )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-8">

                            <Button
                                onClick={onPrevStep}
                                type="button"
                                color="text-success font-medium"
                                className=" py-3 w-full"
                            >
                                Back to Previous
                            </Button>

                            <Button
                                type="submit"
                                color="btn-success"
                                className=" py-3 w-full"
                                loading={loading}
                            >
                                Save
                            </Button>

                        </div>

                    </Form>

                )}

            </Formik>

            <ReportModal open={open} setOpen={setOpen} onNextStep={onNextStep} />

        </>

    )
}

export default StudyStep