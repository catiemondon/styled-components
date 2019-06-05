import React from 'react';
import 'reset-css';

// Styled Components
import {
  AppContainer,
  FormContainer,
  FormHeader,
  FormTitle,
  FormInput,
  FormBtn
} from './AppStyles';


class App extends React.Component {

  render() {
    return (
        <AppContainer>
          <FormContainer>
            <FormHeader>
              <FormTitle>Styled Components</FormTitle>
            </FormHeader>
            <FormInput email="email" />
            <FormInput />
            <FormBtn>Submit</FormBtn>
            <FormBtn register>Register</FormBtn>
          </FormContainer>
        </AppContainer>
    );
  }
};

export default App;