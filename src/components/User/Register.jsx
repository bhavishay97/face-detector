import React, { Fragment } from 'react';
import Navbar from '../Navbar';
import ParticlesBackground from '../ParticlesBackground';
import Card from '../comman/Card';
import Input from '../comman/Input';

function Register() {
  return (
    <Fragment>
      <Navbar />
      <ParticlesBackground />
      <Card title='Register'>
        <Input name='text' label='Full name' />
        <Input name='email' label='Email' />
        <Input name='password' label='Password' />
      </Card>
    </Fragment>
  );
}

export default Register;