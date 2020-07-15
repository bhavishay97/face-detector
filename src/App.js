import React, { Fragment, useState } from 'react';
import Clarifai from 'clarifai';
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import ImageLinkForm from './components/ImageLinkForm';
import FaceDetection from './components/FaceDetection';
import './App.css';

const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_CLARIFAI_API,
});

function App() {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [box, setBox] = useState({});

  const calculateFaceLocation = (data) => {
    const clarifaiFace =
      data['outputs'][0]['data']['regions'][0].region_info.bounding_box;

    const image = document.querySelector('#input-image');
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  const faceBox = (box) => {
    setBox(box);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setImageUrl(input);

    app.models
      .initModel({
        id: Clarifai.FACE_DETECT_MODEL,
      })
      .then((generalModel) => {
        return generalModel.predict(input);
      })
      .then((response) => faceBox(calculateFaceLocation(response)))
      .catch((err) => console.log(err));
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
      <FaceDetection image={imageUrl} box={box} />
    </Fragment>
  );
}

export default App;
