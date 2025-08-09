import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // ако ползваш Tailwind или собствени стилове

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
