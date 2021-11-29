import React from 'react';
import ReactDOM from 'react-dom';
import './css/global.scss';
import Footer from './components/Footer';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <div className="main__wrapper">
        <div className="main__container">
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </div>
        <Footer />
    </div>,
    document.getElementById('root')
);
