import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
//import App from './App';
import App from './App2'; // Ensure the correct path to your App component

// Create a root and render the App component
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);