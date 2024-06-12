'use client'
import React, { useState } from 'react';
import DicomNavBar from '@/components/dicom/DicomNavBar';
import DicomSideBar from '@/components/dicom/DicomSideBar';
import DicomViewer from '@/components/dicom/DiconViewer';

const Page = () => {
    const [open, setOpen] = useState(false);
    const [selectedTool, setSelectedTool] = useState(null);

    const handleToolSelect = (tool) => {
        setSelectedTool(tool);
    };

    const handleReset = () => {
        // Implement reset functionality here
    };

    const imageUrl = 'wadouri:https://static.lunit.io/fixtures/dcm-files/series/CT000001.dcm';

    return (
        <div className='overflow-y-auto bg-black max-h-screen'>

            <DicomNavBar open={open} setOpen={setOpen} onToolSelect={handleToolSelect} onReset={handleReset} />

            <DicomSideBar open={open} setOpen={setOpen} />

            <div className="md:ml-[250px] text-xs p-2">

                <div className="border-2 border-primary rounded-lg p-5 text-white mt-16">
                    <DicomViewer tool={selectedTool} imageUrl={imageUrl} />
                </div>

            </div>

        </div>
    );
};

export default Page;
