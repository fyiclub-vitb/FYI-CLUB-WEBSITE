import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Attach the React app to Vite's root element; StrictMode checks effect cleanup in development.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

