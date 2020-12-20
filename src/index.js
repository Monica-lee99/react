import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloMessage from './Demo';
import Website from './WebSite';
import reportWebVitals from './reportWebVitals';
import LoginControl from './LoginControl';

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <HelloMessage name="李国豪"/>
    <LoginControl/>
    <Website/>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();