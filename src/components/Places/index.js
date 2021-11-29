import React, { useContext } from 'react';
import Slider from '../Slider';
import './places.scss';
import { FilterContext } from '../../contexts/FilterContext';

const Places = () => {
    const { filteredPlaces } = useContext(FilterContext);

    return (
        <section className="places">
            <div className="places__header">
                <h2 className="places__title">
                    {filteredPlaces.length ? filteredPlaces : 'Locais '}
                    <span>Acessíveis</span>
                </h2>
                <div className="places__select">
                    <h5>Ordenar por:</h5>
                    <select>
                        <option>distância</option>
                        <option>alfabeto</option>
                    </select>
                </div>
            </div>
            <div className="places__content">
                <Slider />
            </div>
        </section>
    );
};

export default Places;
