import { FormValues } from '../../types';
type Values = Pick<FormValues, 'name' | 'role' | 'email' | 'password'>;

type ErrorMessagesNames =
  | 'required'
  | 'email'
  | 'shortPass'
  | 'missingLowerCase'
  | 'missingUppercase'
  | 'missingNumber';

export type ErrorMessages = { [k in ErrorMessagesNames]: string };

export const errorMessages: ErrorMessages = {
  required: 'Oops! This field is required',
  email: 'Please enter a valid email',

  shortPass: 'Password must contain at least 9 characters!',
  missingUppercase:
    'Password must contain at least one uppercase letter (A-Z)!',
  missingLowerCase:
    'Password must contain at least one lowercase letter (a-z)!',
  missingNumber: 'Password must contain at least one number',
};

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validate = (values: Values): ErrorMessages => {
  const errors: any = {};

  if (!values.name) {
    errors['name'] = errorMessages.required;
  }

  if (!values.email) {
    errors['email'] = errorMessages.required;
  }
  if (!values.password) {
    errors['password'] = errorMessages.required;
  }

  if (values.password && values.password.length < 10) {
    errors['password'] = errorMessages.shortPass;
  }

  const re = /[0-9]/;
  if (values.password && !re.test(values.password)) {
    errors['password'] = errorMessages.missingNumber;
  }
  const regLower = /[a-z]/;
  if (values.password && !regLower.test(values.password)) {
    errors['password'] = errorMessages.missingLowerCase;
  }
  const UppRegeex = /[A-Z]/;
  if (values.password && !UppRegeex.test(values.password)) {
    errors['password'] = errorMessages.missingUppercase;
  }
  if (values.email && !emailRegex.test(values.email)) {
    errors['email'] = errorMessages.email;
  }
  return errors;
};
