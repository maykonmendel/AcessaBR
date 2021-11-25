import React from 'react';
import ReactDOM from 'react-dom';
import './css/global.scss';
import Header from './components/Header';
import Curator from './components/Curator';
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
            {/*Espaço lista de lugares*/}
            <Curator />
        </div>
    </div>,
    document.getElementById('root')
);
