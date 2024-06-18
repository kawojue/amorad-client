'use client'

import React, { useState } from 'react';
import DicomNavBar from '@/components/dicom/DicomNavBar';
import DicomSideBar from '@/components/dicom/DicomSideBar';
import DicomViewer from '@/components/dicom/DiconViewer';

const Page = () => {

    const images = [
        'wadouri:https://static.lunit.io/fixtures/dcm-files/series/CT000001.dcm',
        'wadouri:https://static.lunit.io/fixtures/dcm-files/series/CT000002.dcm',
        'wadouri:https://static.lunit.io/fixtures/dcm-files/series/CT000003.dcm'
    ];

    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const [selectedTool, setSelectedTool] = useState(null);

    const handleToolSelect = (tool) => {
        setSelectedTool(tool);
    };

    return (
        <div className='overflow-y-auto bg-black max-h-screen'>

            <DicomNavBar open={open} setOpen={setOpen} onToolSelect={handleToolSelect}  />

            <DicomSideBar images={images} open={open} setOpen={setOpen} onSelectImage={setSelectedImage} />

            <div className="md:ml-[250px] text-xs p-2">
                <div className="border-2 border-primary rounded-lg p-5 text-white mt-16">
                    <DicomViewer selectedTool={selectedTool} imageUrl={selectedImage} />
                </div>
            </div>

        </div>
    );
};

export default Page;
