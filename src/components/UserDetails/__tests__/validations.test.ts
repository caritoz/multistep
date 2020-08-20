import { validate, errorMessages } from '../validations';

describe('User Details validations', () => {
  it.each`
    values                                                                   | result
    ${{ name: '', email: '', password: '' }}                                 | ${{ name: errorMessages.required, email: errorMessages.required, password: errorMessages.required }}
    ${{ name: 'Test Name', email: 'email', password: 'fakepassWord' }}       | ${{ email: errorMessages.email, password: errorMessages.missingNumber }}
    ${{ name: 'Test Name', email: '', password: 'passWord6' }}               | ${{ email: errorMessages.required, password: errorMessages.shortPass }}
    ${{ name: 'Test Name', email: 'emailcom', password: 'YUYNBHGG9999GGG' }} | ${{ email: errorMessages.email, password: errorMessages.missingLowerCase }}
    ${{ name: 'Test Name', email: 'emailcom', password: 'fakepass23' }}      | ${{ email: errorMessages.email, password: errorMessages.missingUppercase }}
  `('should validate correctly', ({ values, result }) => {
    expect(validate(values)).toEqual(result);
  });
});
