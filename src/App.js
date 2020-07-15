import React, { Fragment, useState } from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import ImageLinkForm from './components/ImageLinkForm';
import FaceDetection from './components/FaceDetection';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setImageUrl(input);
  };

  return (
    <Fragment>
      <ParticlesBackground />
      <Navbar />
      <Logo />
      <ImageLinkForm
        onInputChange={handleInputChange}
        onDetectSubmit={handleSubmit}
      />
      <FaceDetection image={imageUrl} />
    </Fragment>
  );
}

export default App;
