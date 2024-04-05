// app.jsx
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');

  const handleSubmit = async () => {
    try {
      // Call the download_excel route
      const response = await axios.get('/download_excel');
      // Process the response, such as initiating a download
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <h1>Download Excel</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Value 1"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Value 2"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
        <input
          type="text"
          placeholder="Value 3"
          value={value3}
          onChange={(e) => setValue3(e.target.value)}
        />
        <button onClick={handleSubmit}>Download Excel</button>
      </div>
    </div>
  );
};

export default App;
