import React, { Fragment } from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import ImageLinkForm from './components/ImageLinkForm';
import './App.css';

function App() {
  return (
    <Fragment>
      <ParticlesBackground />
      <Navbar />
      <Logo />
      <ImageLinkForm />
    </Fragment>
  );
}

export default App;
