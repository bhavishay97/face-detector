import React, { Fragment, useState, useEffect } from 'react';
import Navbar from '../Navbar';
import ParticlesBackground from '../ParticlesBackground';
import Card from '../comman/Card';
import Input from '../comman/Input';
import Button from '../comman/Button';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { errorToast } from '../comman/Toast';
import { register } from '../../services/userService';
import auth from '../../services/authService';

function Register(props) {
  const [values, setValues] = useState({
    firstname: '',
    email: '',
    password: '',
    error: '',
  });

  const { firstname, email, password, error } = values;

  useEffect(() => {
    if (error) errorToast(error);
  }, [error]);

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
      });

      props.history.push('/');
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const { data } = ex.response;

        setValues({
          ...values,
          error: data.errors,
        });
      }
    }
  };

  return (
    <Fragment>
      <Navbar />
      <ParticlesBackground />
      <ToastContainer />
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
