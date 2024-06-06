'use client'

import FileUpload from '@/components/dashboard/FileUpload';
import Button from '@/components/ui/buttons/Button';
import { getOrganizationToken } from '@/redux/features/slices/organization/OrganizationAuthSlice';
import organizationService from '@/services/organizationService';
import { getErrorMessage } from '@/utils/errorUtils';
import { uploadDicom } from '@/utils/schema';
import { Form, Formik } from 'formik';
import React, { useCallback, useState } from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const debounce = (func, delay) => {
    let debounceTimer;
    return function (...args) {
        const context = this;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
};

const page = () => {

    const token = useSelector(getOrganizationToken)
    const [loading, setLoading] = useState(false)
    const [studyId, setStudyId] = useState('');

    // Use debounce for handling input changes
    const handleInputChange = useCallback(debounce((value) => {
        setStudyId(value);
    }, 500), []);

    return (
        <>

            <div className="flex items-center justify-between flex-wrap gap-y-3 mb-8">

                <h2 className="text-sm font-bold text-dark capitalize">Upload DICOM File</h2>

                <div className="flex items-center rounded-lg w-full sm:w-auto">

                    <input
                        type="text"
                        name="studyId"
                        onChange={(e) => handleInputChange(e.target.value)}
                        className="py-2.5 px-4 text-xs  tracking-tight block flex-shrink w-full sm:min-w-[250px] lg:min-w-[350px] border-border_color rounded-s-lg relative focus:z-10"
                        placeholder='Enter Study ID to associate upload(s) with'
                    />

                    <div className="py-2.5 flex-1 px-4 inline-flex items-center min-w-fit w-full border border-border_color bg-white text-xs text-center m-auto sm:w-auto rounded-e-lg gap-x-2">

                        <div className="flex items-center">
                            <input checked type="checkbox" className="shrink-0 border-primary rounded text-primary cursor-pointer w-4 h-4" id="id" />
                            <label htmlFor="id" className="text-xs text-textColor ml-2 tracking-tight">Study ID</label>
                        </div>

                        {/* <div className="flex items-center">
                            <input type="checkbox" className="shrink-0 border-primary rounded text-primary cursor-pointer w-4 h-4" id="mrn" />
                            <label htmlFor="mrn" className="text-xs text-textColor ml-2 tracking-tight">MRN</label>
                        </div> */}

                    </div>

                </div>

            </div>

            <div className="sm:w-[80%] md:w-[60%] xl:w-1/2 bg-secondary p-5 rounded-xl">

                <div className="mb-8">
                    <h2 className="text-base font-bold">Drag & Drop DICOM files here</h2>
                    <p className="text-xs text-textColor ">Drop files here (DICOM File | .dcm)</p>
                </div>

                <Formik
                    initialValues={{
                        file: [],
                    }}
                    validationSchema={uploadDicom}
                    onSubmit={async (values, actions) => {

                        if (!studyId) {
                            toast.error('Study ID is required');
                            return;
                        }

                        setLoading(true);

                        try {

                            const formData = new FormData();

                            if (values.file) {
                                for (let i = 0; i < values.file.length; i++) {
                                    formData.append('dicoms', values.file[i], values.file[i].name)
                                }
                            }

                            const response = await organizationService.uploadDicom(studyId, formData, token);
                            console.log(response);

                            setStudyId('');
                            actions.resetForm();
                            // toast.success(response.message);

                        } catch (error) {

                            const message = getErrorMessage(error);
                            toast.error(message, { duration: 5000 });

                        } finally {
                            setLoading(false);
                        }

                    }}
                >

                    {({ values, setFieldValue, errors, touched }) => (

                        <Form autoComplete='off'>

                            <FileUpload name="file" title="Tap to Upload" label="DICOM File .dcm | 50MB max." btnColor="btn-primary" className="py-4" multiple={true}
                                accept=".dcm, .dicom, application/dicom"
                                error={touched.file && errors.file} />

                            {touched.file && errors.file && (
                                <div className="text-red-600 text-xs font-light mt-0 pt-1">{errors.file}</div>
                            )}

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-6">

                                <Button
                                    onClick={() => setFieldValue('file', null)}
                                    type="button"
                                    color="text-success font-medium"
                                    className=" py-3 w-full order-2 sm:order-1 bg-white"
                                >
                                    Reset
                                </Button>

                                <Button
                                    type="submit"
                                    color="btn-primary"
                                    className=" py-3 w-full order-1 sm:order-2"
                                    loading={loading}
                                >
                                    Commence File Upload
                                </Button>

                            </div>

                        </Form>

                    )}

                </Formik>

            </div>

        </>
    )
}

export default page