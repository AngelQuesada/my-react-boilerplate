import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import { store } from './store/store';
import { LoadingScreen } from './components/LoadingScreen';
import { MyApp } from './myApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <LoadingScreen />
      <BrowserRouter>
        <MyApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
