import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ListProvider } from './context/ListContext.jsx';
import { CardProvider } from './context/CardContext.jsx';

import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ListProvider>
        <CardProvider>
          <App />
        </CardProvider>
      </ListProvider>
    </BrowserRouter>
  </React.StrictMode>
);
