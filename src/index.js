import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './components/header/Header.js';
import ControlledCarousel from './components/main/silde.js';
import TheCard from './components/main/Card' ;
import Pagination from './components/main/Pagination'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <ControlledCarousel /><br></br>
    < TheCard/>
    <br></br>
    < Pagination/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister(); 
