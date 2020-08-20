import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import { errorMessages } from '../UserDetails/validations';

import { UserDetails } from '../../components';

const onSubmit = jest.fn();

const renderComponent = () => render(<UserDetails />);

describe('<FirstName />', () => {
  it('should show required field error when submitting empty form', async () => {
    const {
      getAllByText,
      queryByText,
      getByText,
      getByLabelText,
    } = renderComponent();
    expect(queryByText(errorMessages.required)).toBeFalsy();

    fireEvent.click(getByText(/submit/i));
    expect(getAllByText(errorMessages.required)).toBeTruthy();
  });

  it('should show a specific error message if the email is invalid', async () => {
    const { queryByText, getByText, getByLabelText } = renderComponent();
    expect(queryByText(errorMessages.required)).toBeFalsy();
    const field = getByLabelText('Email');
    fireEvent.change(field, { target: { value: 'invalid_email' } });
    fireEvent.click(getByText(/submit/i));
    expect(queryByText(errorMessages.email)).toBeTruthy();
  });

  it('should show a specific error message when password is invalid and email is empty', () => {
    const { queryByText, getByText, getByLabelText } = renderComponent();
    expect(queryByText(errorMessages.required)).toBeFalsy();
    const passField = getByLabelText('Password');
    const emailField = getByLabelText('Email');
    const nameField = getByLabelText('Name');

    fireEvent.change(passField, { target: { value: 'invalidpa' } });
    fireEvent.change(emailField, { target: { value: '' } });
    fireEvent.change(nameField, { target: { value: 'Test' } });
    fireEvent.click(getByText(/submit/i));
    expect(queryByText(errorMessages.missingUppercase)).toBeTruthy();
    expect(queryByText(errorMessages.required)).toBeTruthy();
  });
});
