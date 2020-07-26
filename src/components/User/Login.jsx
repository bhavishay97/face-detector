import React, { Fragment, useState } from 'react';
import Navbar from '../Navbar';
import ParticlesBackground from '../ParticlesBackground';
import Card from '../comman/Card';
import Input from '../comman/Input';
import Button from '../comman/Button';
import auth from '../../services/authService';

function Login(props) {
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
  });

  const { email, password } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });

    try {
      const { data: jwt } = await auth.login({ email, password });
      auth.loginWithJWT(jwt);
      props.history.push('/');
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const { data } = ex.response;

        setValues({
          ...values,
          error: data.errors,
          loading: false,
        });
      }
    }
  };

  return (
    <Fragment>
      <Navbar />
      <ParticlesBackground />
      <Card title='Log in'>
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
        <Button text='Log in' onSubmit={handleSubmit} />
      </Card>
    </Fragment>
  );
}

export default Login;
