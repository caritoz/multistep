import React from 'react';
import { Container } from 'semantic-ui-react';
import { MultiForm } from './components';
import { FormContextProvider } from './context';

const initialValues = {
  name: '',
  role: '',
  email: '',
  password: '',
  news: false,
  updates: false,
};

function App() {
  return (
    <Container>
      <FormContextProvider values={initialValues} currentStep={1}>
        <MultiForm />
      </FormContextProvider>
    </Container>
  );
}

export default App;
