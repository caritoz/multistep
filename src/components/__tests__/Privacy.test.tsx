import React from 'react';
import { render } from '@testing-library/react';
import { Privacy } from '../index';
import { FormContextProvider } from '../../context';

const initialValues = {
  name: '',
  role: '',
  email: '',
  password: '',
  news: true,
  updates: false,
};

describe('Multi Form', () => {
  it('it should with te correct values', () => {
    const { getByLabelText, queryAllByTestId } = render(
      <FormContextProvider values={initialValues} currentStep={1}>
        <Privacy />
      </FormContextProvider>
    );
    const checkbox = getByLabelText(
      'Recieve communication by email for other products created by the Tray.io team'
    ) as HTMLInputElement;
    expect(checkbox.checked).toBeTruthy();
  });
});
