import React, { useContext } from 'react';
import { Form, Checkbox, Segment, Button } from 'semantic-ui-react';
import { FormValues } from '../../types';
import useForm from '../../hooks/useForm';
import { FormContext } from '../../context';

export default () => {
  const { values: contextValues, addValues, nextStep } = useContext(
    FormContext
  );
  const initialValues = {
    news: contextValues?.news,
    updates: contextValues?.updates,
  };

  const handleSubmit = () => {
    nextStep && nextStep();
    addValues && addValues(values);
  };

  const { values, handleChecked } = useForm<
    Pick<FormValues, 'news' | 'updates'>
  >({
    initialValues,
  });
  return (
    <Segment attached>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <Checkbox
            name="updates"
            id="udates"
            checked={values.updates}
            onChange={handleChecked}
            label={{
              children: 'Recieve updates about Tray.io product by email',
            }}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            name="news"
            id="news"
            checked={values.news}
            onChange={handleChecked}
            label={{
              children:
                'Recieve communication by email for other products created by the Tray.io team',
            }}
          />
        </Form.Field>
        <Button>Submit</Button>
      </Form>
    </Segment>
  );
};
