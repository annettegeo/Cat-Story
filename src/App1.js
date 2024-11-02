import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // Array of image URLs
  const images = [
    logo, // First image (using the imported logo)
    'https://via.placeholder.com/300x200?text=Image+1',
    'https://via.placeholder.com/300x200?text=Image+2',
    'https://via.placeholder.com/300x200?text=Image+3'
  ];

  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle the button click
  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="App">
      <h1>This is meow App</h1>
      <img
        src={images[currentIndex]}
        alt="current"
        style={{ width: '300px', height: '200px', marginTop: '20px' }}
      />
      <div>
        <button onClick={handleNextImage} style={{ marginTop: '10px', padding: '8px 16px' }}>
          Next Image
        </button>
      </div>
    </div>
  );
}

export default App;
