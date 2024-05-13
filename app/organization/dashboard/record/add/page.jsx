'use client'

import PatientStep from '@/components/dashboard/organization/report/PatientStep';
import ReferralStep from '@/components/dashboard/organization/report/ReferralStep';
import StudyStep from '@/components/dashboard/organization/report/StudyStep';
import React, { useState } from 'react'

const page = () => {

    const steps = [
        { id: 'patient', component: PatientStep },
        { id: 'study', component: StudyStep },
        { id: 'referral', component: ReferralStep },
    ];

    const [currentStep, setCurrentStep] = useState(steps[1].id);

    const handleNextStep = () => {
        const currentStepIndex = steps.findIndex(step => step.id === currentStep);
        if (currentStepIndex < steps.length - 1) {
            setCurrentStep(steps[currentStepIndex + 1].id);
        }
    };

    const handlePreviousStep = () => {
        const currentStepIndex = steps.findIndex(step => step.id === currentStep);
        if (currentStepIndex > 0) {
            setCurrentStep(steps[currentStepIndex - 1].id);
        }
    };

    const renderStepContent = () => {

        const currentStepObj = steps.find(step => step.id === currentStep);

        if (currentStepObj) {
            const StepComponent = currentStepObj.component;
            return <StepComponent onPrevStep={handlePreviousStep} onNextStep={handleNextStep} />;
        }

        return null;
    };


    return (
        <div className='pb-10'>

            <div className="bg-white p-5 lg:p-8 max-w-2xl rounded-xl m-auto mt-6  sm:mt-8 md:mt-10 2xl:mt-16">

                {renderStepContent()}

            </div>

        </div>
    )
}

export default page