import React from 'react';
import Base64ImageConverter from './Base64ImageConverter';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1 className="app-title">Base64 to Image Converter App</h1>
      <Base64ImageConverter />
    </div>
  );
}

export default App;
