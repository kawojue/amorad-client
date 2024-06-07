'use client'

import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import toast from 'react-hot-toast';
import FileUpload from '@/components/dashboard/FileUpload';
import Button from '@/components/ui/buttons/Button';
import { getOrganizationToken } from '@/redux/features/slices/organization/OrganizationAuthSlice';
import organizationService from '@/services/organizationService';
import { getErrorMessage } from '@/utils/errorUtils';
import { uploadDicom } from '@/utils/schema';
import { useRouter } from 'next/navigation';

const debounce = (func, delay) => {
    let debounceTimer;
    return function (...args) {
        const context = this;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
};

const UploadPage = () => {

    const router = useRouter()
    const token = useSelector(getOrganizationToken)
    const [loading, setLoading] = useState(false)
    const [studyId, setStudyId] = useState('');
    const [uploadProgress, setUploadProgress] = useState(0);

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
                        className="py-2.5 px-4 text-xs tracking-tight block flex-shrink w-full sm:min-w-[250px] lg:min-w-[350px] border-border_color rounded-s-lg relative focus:z-10"
                        placeholder='Enter Study ID to associate upload(s) with'
                    />
                    <div className="py-2.5 flex-1 px-4 inline-flex items-center min-w-fit w-full border border-border_color bg-white text-xs text-center m-auto sm:w-auto rounded-e-lg gap-x-2">
                        <div className="flex items-center">
                            <input checked type="checkbox" className="shrink-0 border-primary rounded text-primary cursor-pointer w-4 h-4" id="id" />
                            <label htmlFor="id" className="text-xs text-textColor ml-2 tracking-tight">Study ID</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sm:w-[80%] md:w-[60%] xl:w-1/2 bg-white p-5 rounded-xl">
                <div className="mb-8">
                    <h2 className="text-base font-bold">Drag & Drop DICOM files here</h2>
                    <p className="text-xs text-textColor">Drop files here (DICOM File | .dcm)</p>
                </div>

                <Formik
                    initialValues={{ file: [] }}
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
                                    formData.append('dicoms', values.file[i], values.file[i].name);
                                }
                            }

                            const response = await organizationService.uploadDicom(studyId, formData, token, (event) => {
                                const progress = Math.round((event.loaded * 100) / event.total);
                                setUploadProgress(progress);
                            });

                            toast.success('Dicom file successful uploaded');
                            router.push('report')

                        } catch (error) {
                            const message = getErrorMessage(error);
                            toast.error(message, { duration: 5000 });
                        } finally {
                            setStudyId('');
                            actions.resetForm();
                            setLoading(false);
                            setUploadProgress(0);
                        }
                    }}
                >
                    {({ values, setFieldValue, errors, touched }) => (
                        <Form autoComplete='off'>
                            <FileUpload
                                name="file"
                                title="Tap to Upload"
                                label="DICOM File .dcm | 50MB max."
                                btnColor="btn-primary"
                                className="py-2 border border-dashed border-dark"
                                multiple={true}
                                accept=".dcm, .dicom, application/dicom"
                                error={touched.file && errors.file}
                            />

                            {touched.file && errors.file && (
                                <div className="text-red-600 text-xs font-light mt-0 pt-1">{errors.file}</div>
                            )}

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-7">
                                <Button
                                    onClick={() => router.back()}
                                    type="button"
                                    color="text-success font-medium"
                                    className="py-3 w-full order-2 sm:order-1 border border-primary"
                                >
                                    Go Back
                                </Button>

                                <Button
                                    type="submit"
                                    color="btn-primary"
                                    className="py-3 w-full order-1 sm:order-2"
                                    loading={loading}
                                >
                                    Commence File Upload
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>

                {loading && (

                    <div className="mt-4">
                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                                <div>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-blue-200">
                                        Upload Progress
                                    </span>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs font-semibold inline-block text-primary">
                                        {uploadProgress}%
                                    </span>
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                                <div style={{ width: `${uploadProgress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
                            </div>
                        </div>
                    </div>
                    
                )}

            </div>
        </>
    );
}

export default UploadPage;
