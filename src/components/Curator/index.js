import React from 'react';
import './curator.scss';
import curatorPhoto from '../../images/maykon-mendel.jpeg';

const Curator = () => {
    return (
        <div className="curator__container">
            <div className="curator__photo">
                <img src={curatorPhoto} alt="Foto curador Maykon Mendel" />
            </div>
            <div className="curator__details">
                <div>
                    <h3>Maykon Mendel</h3>
                    <h6>Curadoria</h6>
                </div>
                <p>
                    Desenvolvedor Full-Stack desde 2015, atualmente é professor
                    do <i>Ifes</i> - Campus Nova Venécia e criador de conteúdo
                    no canal Maykon Mendel.
                </p>
            </div>
        </div>
    );
}

export default Curator;