import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Clothes from "./pages/Clothes";
import Type from "./pages/Type";
import Checkout from "./pages/Checkout";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Checkout />, document.getElementById('root'));
registerServiceWorker();
