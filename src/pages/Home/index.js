import React, { useContext, useEffect } from 'react';
import './style.scss';
import imageDestack from '../../images/imagem-destaque.png';
import Pills from '../../components/Pills';
import { LocationContext } from '../../contexts/LocationContext';
import { FilterContext } from '../../contexts/FilterContext';
import { useParams } from 'react-router';

const PLACES = ['Praças', 'Parques', 'Igrejas', 'Hotéis', 'Restaurantes', 'Hospitais', 'Farmácias', 'Lojas', 'Shoppings', 'Bancos'];

const Home = () => {    
    const { city, state } = useParams();
    const { setCity, setState } = useContext(LocationContext);
    const { filteredPlaces, setFilteredPlaces } = useContext(FilterContext);

    const handleFilterPlace = (item) => {
        if (item === filteredPlaces) {
            setFilteredPlaces('');
            return;
        }
        setFilteredPlaces(item);
    }

    useEffect(() => {
        setCity(city)
        setState(state)
    }, [city, setCity, state, setState]);

    return (
        <main id="main-content" className="home__container">
            <div className="home__col">
                <h1 className="home__title">{city} para todos</h1>
                <div className="home__image--destaque hide-desktop">
                    <img src={imageDestack} alt="Imagem destaque cadeirante" />
                </div>
                <p className="home__text">
                    Nossa missão é facilitar o encontro entre lugares inclusivos
                    e pessoas que buscam alternativas culturais para sair de
                    casa, com a mobilidade que todo cidadão precisa.
                </p>
                <p className="home__text">
                    Checamos 10 itens essenciais de acessibilidade para pessoas
                    com deficiência em diversos pontos da cidade.
                </p>
                <div className="home__pills">
                    {PLACES.map((item) => (
                        <Pills
                            key={item}
                            local={item}
                            selected={filteredPlaces === item}
                            onClick={() => handleFilterPlace(item)}
                        />
                    ))}
                </div>
            </div>
            <div className="home__col">
                <div className="home__image--destaque hide-mobile">
                    <img src={imageDestack} alt="Imagem destaque cadeirante" />
                </div>
            </div>
        </main>
    );
}

export default Home;