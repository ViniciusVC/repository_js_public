import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DBcacheProvider } from './context/DBcacheContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DBcacheProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DBcacheProvider>
);

reportWebVitals();
