import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // از react-dom به جای react-dom/client استفاده کنید
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
