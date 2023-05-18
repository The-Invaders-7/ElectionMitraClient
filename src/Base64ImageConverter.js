import React, { useState } from 'react';
import './Base64ImageConverter.css'

function Base64ImageConverter() {
  const [base64String, setBase64String] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleConvertClick = () => {
    if (base64String) {
      const image = new Image();
      image.src = `data:image/png;base64, ${base64String}`;
      setImageUrl(image.src);
    }
  };

  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'image.png';
    link.click();
  };

  return (
    <div className="container">
      <h2 className="title">Base64 to Image Converter</h2>
      <div className="input-container">
        <label className="label">Base64 String:</label>
        <input
          type="text"
          className="input"
          value={base64String}
          onChange={(e) => setBase64String(e.target.value)}
        />
      </div>
      <button className="convert-button" onClick={handleConvertClick}>
        Convert
      </button>
      {imageUrl && (
        <div className="image-container">
          <h3 className="converted-title">Converted Image:</h3>
          <img className="converted-image" src={imageUrl} alt="Converted Image" />
          <button className="download-button" onClick={handleDownloadClick}>
            Download
          </button>
        </div>
      )}
    </div>
  );
}

export default Base64ImageConverter;
