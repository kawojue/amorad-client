import React, { useState } from 'react'
import AuthBg from '../AuthBg'
import OrganizationRegisteration from './OrganizationRegisteration';
import OrganizationAddress from './OrganizationAddress';
import { useSelector } from 'react-redux';
import { getOrganization } from '@/redux/features/slices/stepSlice';

const OrganizationAccount = () => {

  const steps = [
    { id: 'details', component: OrganizationRegisteration },
    { id: 'address', component: OrganizationAddress },
  ];

  const organization = useSelector(getOrganization)

  const [currentStep, setCurrentStep] = useState(steps[0].id);

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
      return <StepComponent organization={organization} onPrev={handlePreviousStep} onNextStep={handleNextStep} />;
    }

    return null;
  };


  return (

    <div className="relative flex items-center p-0 overflow-hidden">

      <div className="relative flex flex-wrap lg:flex-nowrap w-full min-h-screen">

        <div className="px-3 mx-auto lg:m-0 w-[95%] lg:pl-16 xl:pr-16 xl:pl-32 2xl:pl-56 2xl:pr-0 md:w-7/12 lg:w-[45%] pt-16 sm:py-5 2xl:py-10 h-full">

        {renderStepContent()}

        </div>

        {/* AUTH BG */}
        <AuthBg />

      </div>

    </div>

  )
}

export default OrganizationAccount