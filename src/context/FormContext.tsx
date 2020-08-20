import React, { createContext, useState } from 'react';
import { FormValues, FormContextType } from '../types';
export const Context = createContext<Partial<FormContextType>>({});

type FormProviderType = Pick<
  FormContextType,
  'values' | 'currentStep' | 'children'
>;

export const Provider = (props: FormProviderType) => {
  const {
    values: initialValues,
    currentStep: initialCurrentStep,
    children,
  } = props;

  const [values, setValues] = useState(initialValues);
  const [currentStep, setCurrentStep] = useState(initialCurrentStep);

  const nextStep = () => setCurrentStep(currentStep + 1);
  const addValues = (newvalues: FormValues) => {
    setValues({ ...values, ...newvalues });
  };
  const formContext = {
    values,
    addValues,
    currentStep,
    nextStep,
  };

  return <Context.Provider value={formContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;
