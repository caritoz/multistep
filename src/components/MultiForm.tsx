import React, { useContext } from 'react';
import { UserDetails, Privacy, Confirmation, Steps } from '../components';
import { FormContext } from '../context';

const MultiForm = () => {
  const { currentStep } = useContext(FormContext);
  const steps = [
    {
      key: 'user',
      title: 'User',
      disabled: currentStep !== 1,
      active: currentStep === 1,
    },
    {
      key: 'privacy',
      title: 'Privacy',
      disabled: currentStep !== 2,
      active: currentStep === 2,
    },
    {
      key: 'confirmation',
      disabled: currentStep !== 3,
      active: currentStep === 3,
      title: 'Done',
    },
  ];
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <UserDetails />;
      case 2:
        return <Privacy />;
      case 3:
        return <Confirmation />;
      default:
        return null;
    }
  };

  return <Steps steps={steps}>{renderStep()}</Steps>;
};
export default MultiForm;
