import React, { Fragment, useState } from 'react';
import Navbar from '../Navbar';
import ParticlesBackground from '../ParticlesBackground';
import Card from '../comman/Card';
import Input from '../comman/Input';
import Button from '../comman/Button';
import { register } from '../../services/userService';
import auth from '../../services/authService';

function Register(props) {
  const [values, setValues] = useState({
    firstname: '',
    email: '',
    password: '',
    error: '',
    success: false,
  });

  const { firstname, email, password } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });

    try {
      const response = await register({ firstname, email, password });
      auth.loginWithJWT(response.headers['x-auth-token']);

      setValues({
        firstname: '',
        email: '',
        password: '',
        error: '',
        success: false,
      });

      props.history.push('/');
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const { data } = ex.response;

        setValues({
          ...values,
          error: data.errors,
          success: false,
        });
      }
    }
  };

  return (
    <Fragment>
      <Navbar />
      <ParticlesBackground />
      <Card title='Register'>
        <Input
          name='text'
          label='First name'
          onInputChange={handleChange('firstname')}
        />
        <Input
          name='email'
          label='Email'
          onInputChange={handleChange('email')}
        />
        <Input
          name='password'
          label='Password'
          onInputChange={handleChange('password')}
        />
        <Button text='Register' onSubmit={handleSubmit} />
      </Card>
    </Fragment>
  );
}

export default Register;
