import React from 'react';
import { render } from '@testing-library/react';
import { Steps } from '../index';

const mockedSteps = [
  {
    key: 'user',
    title: 'User',
    disabled: true,
    active: false,
  },
  {
    key: 'privacy',
    title: 'Privacy',
    disabled: true,
    active: false,
  },
  {
    key: 'confirmation',
    disabled: false,
    active: true,
    title: 'Done',
  },
];

describe('Multi Form', () => {
  it('it should render the correct step', () => {
    const { getByText, container, queryAllByTestId } = render(
      <Steps steps={mockedSteps} />
    );
    expect(getByText('User')).toBeInTheDocument();
    expect(getByText('Privacy')).toBeInTheDocument();
    expect(getByText('Done')).toBeInTheDocument();

    const steps = queryAllByTestId('step-title');
    expect(steps[0].className).toBe('disabled step');
    expect(steps[1].className).toBe('disabled step');
    expect(steps[2].className).toBe('active step');
  });
});
