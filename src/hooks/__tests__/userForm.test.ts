import { renderHook, act } from '@testing-library/react-hooks';

import useForm, { Errors } from '../useForm';
const errorMessage = 'required';

interface IUser {
  name: string;
  lastName: string;
  terms: boolean;
}

const validate = (values: IUser) => {
  const errors: Errors = {};
  if (values.name === '') {
    errors.name = errorMessage;
  }
  if (values.lastName === '') {
    errors.lastName = errorMessage;
  }
  if (!values.terms) {
    errors.terms = errorMessage;
  }
  return errors;
};
const initialValues = {
  name: 'name',
  lastName: 'lastName',
  terms: true,
};

it('should return the correct object', () => {
  const { result } = renderHook(() =>
    useForm({
      initialValues,
    })
  );

  [
    'handleChange',
    'values',
    'errors',
    'handleSubmit',
    'touched',
    'handleChecked',
  ].forEach((property) => {
    expect(result.current).toHaveProperty(property);
  });
});

describe('handleChange', () => {
  it('should properly handle value change', () => {
    const persist = jest.fn();
    const { result } = renderHook(() =>
      useForm({
        initialValues,
        validate,
      })
    );

    expect(result.current.values['name']).toEqual(initialValues.name);
    const mockedEvent = {
      persist: jest.fn(),

      target: { name: 'name', value: 'testValue' },
    } as any;

    act(() => {
      result.current.handleChange(mockedEvent);
    });

    expect(result.current.values['name']).toEqual('testValue');
    const newEvent = {
      persist: jest.fn(),
      target: { name: 'name', value: '' },
    } as any;
    act(() => {
      result.current.handleChange(newEvent);
    });

    expect(result.current.values['name']).toEqual('');
  });
});

describe('handleChecked', () => {
  xit('should properly handle the value from chekcboxes', () => {
    const persist = jest.fn();

    const { result } = renderHook(() =>
      useForm({
        initialValues,
        validate,
      })
    );

    const mockedEvent = {
      persist,
      target: { name: 'terms', checked: false },
    } as any;

    act(() => {
      result.current.handleChecked(mockedEvent);
    });

    expect(result.current.values['terms']).toEqual(false);
  });
});

describe('handleSubmit', () => {
  const preventDefault = jest.fn();

  it('should properly handle submission if no validation', () => {
    const mockedCallBack = jest.fn();

    const { result } = renderHook(() =>
      useForm({
        initialValues,
        onSubmit: mockedCallBack,
      })
    );

    act(() => {
      result.current.handleSubmit({ preventDefault });
    });

    expect(mockedCallBack).toHaveBeenCalled();
  });

  it('should properly handle submission if no errors', () => {
    const mockedCallBack = jest.fn();

    const { result } = renderHook(() =>
      useForm({
        initialValues,
        validate,
        onSubmit: mockedCallBack,
      })
    );

    act(() => {
      result.current.handleSubmit({ preventDefault });
    });

    expect(mockedCallBack).toHaveBeenCalled();
  });

  it('should properly prevent submission  no errors', () => {
    const mockedCallBack = jest.fn();

    const { result } = renderHook(() =>
      useForm({
        initialValues: {
          ...initialValues,
          name: '',
        },
        validate,
        onSubmit: mockedCallBack,
      })
    );

    act(() => {
      result.current.handleSubmit({ preventDefault });
    });
    expect(result.current.errors['name']).toEqual(errorMessage);

    expect(mockedCallBack).not.toHaveBeenCalled();
  });
});
