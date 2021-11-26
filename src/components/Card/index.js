import React from 'react';
import Button from '../../components/Button';
import './card.scss';
import iconAudio from '../../images/icons/icon-audio-descricao.png';
import iconBanheiro from '../../images/icons/icon-banheiro-acessivel.png';
import iconBraile from '../../images/icons/icon-braile.png';
import iconCaoGuia from '../../images/icons/icon-caoguia.png';
import iconElevador from '../../images/icons/icon-elevador.png';
import iconEstacionamento from '../../images/icons/icon-estacionamento.png';
import iconLibras from '../../images/icons/icon-libras.png';
import iconPiso from '../../images/icons/icon-piso-tatil.png';
import iconPorta from '../../images/icons/icon-porta-larga.png';
import iconRampa from '../../images/icons/icon-rampa.png';

const Card = () => {
    return (
        <div className="card__container">
            <div className="card__image"></div>
            <div className="card__content">
                <h3>Nome do Local</h3>
                <ul className="card__facilities">
                    <li className="card__facilities__item card__facilities__item--unchecked">
                        <img
                            src={iconBraile}
                            alt="Sinalização em Braile"
                            title="Sinalização em Braile"
                        />
                    </li>
                    <li className="card__facilities__item">
                        <img
                            src={iconAudio}
                            alt="Audio descrição"
                            title="Audio descrição"
                        />
                    </li>
                    <li className="card__facilities__item">
                        <img
                            src={iconBanheiro}
                            alt="Banheiro acessível"
                            title="Banheiro acessível"
                        />
                    </li>
                    <li className="card__facilities__item">
                        <img
                            src={iconElevador}
                            alt="Elevador para cadeirantes"
                            title="Elevador para cadeirantes"
                        />
                    </li>
                    <li className="card__facilities__item">
                        <img
                            src={iconEstacionamento}
                            alt="Estacionamento para idosos/deficientes"
                            title="Estacionamento para idosos/deficientes"
                        />
                    </li>
                    <li className="card__facilities__item">
                        <img
                            src={iconCaoGuia}
                            alt="Permite acesso de cães-guias"
                            title="Permite acesso de cães-guias"
                        />
                    </li>
                    <li className="card__facilities__item">
                        <img
                            src={iconPiso}
                            alt="Piso tátil de alerta"
                            title="Piso tátil de alerta"
                        />
                    </li>
                    <li className="card__facilities__item">
                        <img
                            src={iconPorta}
                            alt="Portas largas"
                            title="Portas largas"
                        />
                    </li>
                    <li className="card__facilities__item">
                        <img
                            src={iconRampa}
                            alt="Rampas de acesso para cadeirante"
                            title="Rampas de acesso para cadeirante"
                        />
                    </li>
                    <li className="card__facilities__item">
                        <img
                            src={iconLibras}
                            alt="Atendimento em Libras"
                            title="Atendimento em Libras"
                        />
                    </li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Button>Como Chegar</Button>
            </div>
        </div>
    );
}

export default Card;