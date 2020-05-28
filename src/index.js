import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './components/header/Header.js';
import ControlledCarousel from './components/main/silde.js'


import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header />
  < ControlledCarousel/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister(); 
