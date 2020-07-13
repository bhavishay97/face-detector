import React from 'react';
import Particles from 'react-particles-js';
import './style.css';

function ParticlesBackground() {
  const options = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800,
        },
      },
    },
  };
  return <Particles className='particles' params={options} />;
}

export default ParticlesBackground;
