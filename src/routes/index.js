import { Routes as Switch, Route } from 'react-router-dom';
import { LocationContext } from '../contexts/LocationContext';
import Home from '../pages/Home';
import { Fragment, useState } from 'react';
import Header from '../components/Header';
import Places from '../components/Places';
import Curator from '../components/Curator';
import { FilterContext } from '../contexts/FilterContext';

const Routes = props => {
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [filteredPlaces, setFilteredPlaces] = useState('');
    
    return (
        <FilterContext.Provider value={{ filteredPlaces, setFilteredPlaces }}>
            <LocationContext.Provider
                value={{ city, setCity, state, setState }}
            >
                <Header />
                <Switch>
                    <Route
                        path="/:state/:city"
                        element={
                            <Fragment>
                                <Home />
                                <Places />
                                <Curator />
                            </Fragment>
                        }
                    />
                </Switch>
            </LocationContext.Provider>
        </FilterContext.Provider>
    );    
}

export default Routes;