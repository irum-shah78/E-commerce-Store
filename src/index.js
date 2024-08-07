import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
        <Toaster />
      </Router>
    </Provider>
  </React.StrictMode>

);
reportWebVitals();