import React, { useContext } from 'react';
import { Form, Button, Input, Segment } from 'semantic-ui-react';
import { FormValues } from '../../types';
import useForm from '../../hooks/useForm';
import { validate } from './validations';
import { FormContext } from '../../context';
import PassWordRequirements from './PassWordRequirements';
type FormProps = Pick<FormValues, 'name' | 'role' | 'email' | 'password'>;

const initialValues: FormProps = {
  name: '',
  role: '',
  email: '',
  password: '',
};

export default () => {
  const { addValues, nextStep } = useContext(FormContext);

  const handleFormSubmit = (e: any) => {
    addValues && addValues(values);
    nextStep && nextStep();
  };
  const { values, handleChange, errors, handleSubmit, touched } = useForm<
    FormProps
  >({
    initialValues,
    validate,
    onSubmit: handleFormSubmit,
  });

  return (
    <Segment attached>
      <Form warning onSubmit={handleSubmit}>
        <Form.Field
          label="Name"
          id="name"
          name="name"
          type="text"
          value={values['name']}
          control={Input}
          onChange={handleChange}
          {...(errors?.name && touched.name && { error: errors.name })}
        />
        <Form.Field
          label="Role"
          id="role"
          name="role"
          onChange={handleChange}
          type="text"
          control={Input}
          value={values.role}
        />
        <Form.Field
          label="Email"
          id="email"
          name="email"
          control={Input}
          onChange={handleChange}
          type="text"
          value={values.email}
          {...(errors?.email && touched.email && { error: errors.email })}
        />
        <Form.Field
          label="Password"
          id="password"
          name="password"
          control={Input}
          type="password"
          value={values.password}
          onChange={handleChange}
          autoComplete="on"
          {...(errors?.password &&
            touched.password && { error: errors.password })}
        />
        <PassWordRequirements />

        <Button type="submit">Submit</Button>
      </Form>
    </Segment>
  );
};
