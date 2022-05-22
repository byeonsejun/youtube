import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import Youtube from './service/youtube';

const rootNode = document.getElementById('root')

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY)
ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
);
