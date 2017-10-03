import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import Home from "./pages/Home";
import Login from "./pages/Login";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.createPortal(<Login />, document.getElementById('root'));
registerServiceWorker();
