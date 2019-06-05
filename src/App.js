import React from 'react';
import 'reset-css';

// Styled Components
import {
  AppContainer,
  FormContainer,
  FormInput,
  FormBtn
} from './AppStyles';


class App extends React.Component {

  render() {
    return (
        <AppContainer>
          <FormContainer>
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