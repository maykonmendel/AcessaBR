import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import { LocationContext } from '../contexts/LocationContext';
import Home from '../pages/Home';
import { useState } from 'react';
import Header from '../components/Header';

const Routes = props => {
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    
    return (
        <LocationContext.Provider value={{ city, setCity, state, setState }}>
            <Header />
            <Switch>
                <Route
                    path="/:state/:city"
                    element={<Home />}
                />
                {/*<Route
                    path="/sp/sao-paulo"
                    element={<SaoPaulo city={props.city} />}
                />*/}
            </Switch>
        </LocationContext.Provider>
    );    
}

export default Routes;