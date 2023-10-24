import React from 'react';
import reactDOM from 'react-dom/client';
import './index.css';

import App from './App';

const el = document.getElementById('root');
const root = reactDOM.createRoot(el);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
