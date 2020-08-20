import React, { FC } from 'react';
import { Step } from 'semantic-ui-react';
import { Steps as StepsTypes } from '../../types';

const Steps: FC<{ steps: StepsTypes }> = ({ steps, children }) => {
  return (
    <>
      <Step.Group size="small" attached="top">
        {steps.map((step: any) => {
          return (
            <Step
              key={step.key}
              data-testid={'step-title'}
              active={step.active}
              disabled={step.disabled}
            >
              <Step.Content>
                <Step.Title>{step.title}</Step.Title>
              </Step.Content>
            </Step>
          );
        })}
      </Step.Group>
      {children}
    </>
  );
};

export default Steps;
