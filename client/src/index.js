import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SignIn />, document.getElementById('root'));
registerServiceWorker();
