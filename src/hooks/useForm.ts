import { useState } from 'react';

type Value = any;
export type Values = Record<string, Value>;
export type Errors = Record<string, string | undefined>; //VER ESTO
export type Touched = Record<string, boolean>;

export interface UseFormValues<T> {
  errors: Errors;
  values: T;
  handleSubmit: (values: Values) => void;
  handleChecked: (e: any) => void;
  touched: Touched;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface UseFormProps<T> {
  initialValues: T;
  validate?: (values: T) => Errors;
  onSubmit?: (values: Values) => void;
}

const useForm = <T>({
  initialValues,
  validate,
  onSubmit,
}: UseFormProps<T>): UseFormValues<T> => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();

    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    event.persist();

    setValues((values: T) => ({
      ...values,
      [name]: checked,
    }));
  };

  const handleSubmit = (event: any) => {
    if (event) event.preventDefault();

    const err = validate && validate(values);

    setTouched(
      Object.keys(initialValues).reduce(
        (acc, key) => ({
          ...acc,
          [key]: true,
        }),
        {}
      )
    );
    if ((err && Object.keys(err).length === 0) || !validate) {
      onSubmit && onSubmit(values);
    } else {
      err && setErrors(err);
    }
  };

  return {
    values,
    handleChange,
    errors,
    handleSubmit,
    handleChecked,
    touched,
  };
};
export default useForm;
