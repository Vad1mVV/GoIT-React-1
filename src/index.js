import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';
import userData from 'user.json';
import { Site } from 'App.styled';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Site>
      <App userData={userData} />
    </Site>
  </React.StrictMode>
);
