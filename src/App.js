import React, { useRef, useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap'
import './App.css';
import Modal from './modal';
import Header from './Header';


function App() {
  const video = {
    url: "http://www.youtube.com/embed/xDMP3i36naA"
  }

  return (
    <div className="App">
      <Header />
      <Modal videoSrc={video.url} />
    </div>
  );
}

export default App;
