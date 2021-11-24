import React from 'react';
import ReactDOM from 'react-dom';
import './css/global.scss';
import Header from './components/Header';

ReactDOM.render(
    <div className="main__wrapper">
        <div className="main__container">
            <Header/>
        </div>
    </div>,
  document.getElementById('root')
);
