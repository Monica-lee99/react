/*
 * @Author: your name
 * @Date: 2020-12-20 16:05:35
 * @LastEditTime: 2020-12-23 20:04:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloMessage from './Demo';
import Website from './WebSite';
import reportWebVitals from './reportWebVitals';
import LoginControl from './LoginControl';
import UserGist from './UserGust'

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <HelloMessage name="李国豪"/>
    <LoginControl/>
    <Website/>
    <UserGist source="https://api.github.com/users/octocat/gists" />,
  </React.StrictMode>,
  
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
