import React from 'react';
import { render } from '@testing-library/react';
import { MultiForm, UserDetails } from '../index';
import { FormContextProvider } from '../../context';

const initialValues = {
  name: '',
  role: '',
  email: '',
  password: '',
  news: false,
  updates: true,
};

describe('Multi Form', () => {
  describe('it should render the correct step', () => {
    it('when current step is 1', () => {
      const { getByLabelText, queryAllByTestId } = render(
        <FormContextProvider values={initialValues} currentStep={1}>
          <MultiForm />
        </FormContextProvider>
      );
      expect(getByLabelText('Name')).toBeInTheDocument();
      expect(getByLabelText('Role')).toBeInTheDocument();
      expect(getByLabelText('Email')).toBeInTheDocument();
      expect(getByLabelText('Password')).toBeInTheDocument();
      const steps = queryAllByTestId('step-title');
      expect(steps[0].className).toBe('active step');
      expect(steps[1].className).toBe('disabled step');
    });
    it('when current step is 1', () => {
      const { getByText, queryAllByTestId } = render(
        <FormContextProvider values={initialValues} currentStep={2}>
          <MultiForm />
        </FormContextProvider>
      );
      expect(
        getByText('Recieve updates about Tray.io product by email')
      ).toBeInTheDocument();
      const steps = queryAllByTestId('step-title');
      expect(steps[0].className).toBe('disabled step');
      expect(steps[1].className).toBe('active step');
    });

    it('when current step is 2', () => {
      const { getByText } = render(
        <FormContextProvider values={initialValues} currentStep={3}>
          <MultiForm />
        </FormContextProvider>
      );
      expect(
        getByText(
          'Please verify your email address, you should have receives and email from us already!'
        )
      ).toBeInTheDocument();
    });
  });
});
