// src/index.js
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../public')));

// API endpoint for downloading Excel
app.get('/download_excel', (req, res) => {
  // Implement your logic to generate and send Excel file here
  res.send('Excel file generated');
});

// Catch all other routes and return the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
