import React, { Fragment, useState, useEffect } from 'react';
import Clarifai from 'clarifai';
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import WelcomeText from './components/WelcomeText';
import ImageLinkForm from './components/ImageLinkForm';
import FaceDetection from './components/FaceDetection';
import auth from './services/authService';
import './App.css';

const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_CLARIFAI_API,
});

function App() {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [boxes, setBoxes] = useState([]);

  const [user, setUser] = useState({});

  useEffect(() => {
    const user = auth.getCurrentUser();
    setUser(user);
  }, []);

  const calculateFaceLocation = (data) => {
    const image = document.querySelector('#input-image');
    const width = Number(image.width);
    const height = Number(image.height);

    return data['outputs'][0]['data']['regions'].map((face) => {
      const clarifaiFace = face.region_info.bounding_box;
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - clarifaiFace.right_col * width,
        bottomRow: height - clarifaiFace.bottom_row * height,
      };
    });
  };

  const faceBoxes = (boxes) => {
    setBoxes(boxes);
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
      .then((response) => faceBoxes(calculateFaceLocation(response)))
      .catch((err) => console.log(err));
  };

  return (
    <Fragment>
      <ParticlesBackground />
      <Navbar user={user} />
      <Logo />
      <WelcomeText user={user} />
      <ImageLinkForm
        onInputChange={handleInputChange}
        onDetectSubmit={handleSubmit}
      />
      <FaceDetection image={imageUrl} boxes={boxes} />
    </Fragment>
  );
}

export default App;
