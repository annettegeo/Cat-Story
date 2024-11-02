import React, { useState, useEffect } from 'react';
import './App.css';
import img1 from './images/img1.jpeg';
import img2 from './images/img2.jpeg';
import img3 from './images/img3.jpeg';
import img4 from './images/img4.jpeg';
import img5 from './images/img5.jpeg';
import img6 from './images/img6.jpeg';
import img7 from './images/img7.jpeg';
import img8 from './images/img8.jpeg';
import img9 from './images/img9.jpeg';
import img10 from './images/img10.jpeg';
import img11 from './images/img11.jpeg';
import img12 from './images/img12.jpeg';
import img13 from './images/img13.jpeg';
import img14 from './images/img14.jpeg';
import img15 from './images/img15.jpeg';
import img16 from './images/img16.jpeg';
import img17 from './images/img17.jpeg';
import img18 from './images/img18.jpeg';
import img19 from './images/img19.jpeg';
import audioFile from './audio/audio.mp3';

function App() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19];
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [audio] = useState(new Audio(audioFile));
  const [playbackPosition, setPlaybackPosition] = useState(0);
  const [meowCount, setMeowCount] = useState(0);

  const handleNextImage = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(images.length);
      setPlaybackPosition(0);
      setMeowCount(0);
    } else if (currentIndex === images.length) {
      setCurrentIndex(0);
      setPlaybackPosition(0);
      setMeowCount(0);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setMeowCount((prevCount) => prevCount + 1);
    }

    if (currentIndex >= 0 && currentIndex < images.length - 1) {
      audio.currentTime = playbackPosition;
      audio.play();

      setTimeout(() => {
        audio.pause();
        setPlaybackPosition((prevPosition) => prevPosition + 1);
      }, 1000);
    }
  };

  useEffect(() => {
    if (playbackPosition >= audio.duration) {
      setPlaybackPosition(0);
    }
  }, [playbackPosition, audio.duration]);

  return (
    <div className="App">
      <h1>This is meow App</h1>
      {currentIndex === -1 ? (
        <div>
          <h2>Start Sad Cat Story</h2>
          <button onClick={handleNextImage} style={{ marginTop: '10px', padding: '8px 16px' }}>
            Start Story
          </button>
        </div>
      ) : currentIndex === images.length ? (
        <div>
          <h2>Story Ended. Restart Sad Cat Story</h2>
          <button onClick={handleNextImage} style={{ marginTop: '10px', padding: '8px 16px' }}>
            Restart
          </button>
        </div>
      ) : (
        <div>
          <img
            src={images[currentIndex]}
            alt="current"
            style={{ width: '50vw', height: '70vh', marginTop: '20px' }}
          />
          <div style={{ color: 'red', fontSize: '20px', margin: '10px 0' }}>
            {'meow '.repeat(meowCount).trim()}
          </div>
          <div>
            <button onClick={handleNextImage} style={{ marginTop: '10px', padding: '8px 16px' }}>
              Sad MEOW
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
