import React, { Component } from 'react';

import LoginLayout from '../sections/components/login-layout';
import LoginForm from '../sections/components/login-form';

class Login extends Component {
  render() {
    return (
      <LoginLayout>
        <LoginForm/>
      </LoginLayout>
    )
  }
}

export default Login;
