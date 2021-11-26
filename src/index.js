import React from 'react';
import ReactDOM from 'react-dom';
import './css/global.scss';
import Header from './components/Header';
import Places from './components/Places';
import Curator from './components/Curator';
import Footer from './components/Footer';
import Home from './pages/Home';

const CONFIG = {
    uf: 'ES',
    city: 'Alegre'
}

ReactDOM.render(
    <div className="main__wrapper">
        <div className="main__container">
            <Header city={CONFIG.city} uf={CONFIG.uf} />
            <Home city={CONFIG.city} />
            <Places />
            <Curator />
        </div>
        <Footer />
    </div>,
    document.getElementById('root')
);
