import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import SaoPaulo from "../pages/SaoPaulo";

const Routes = props => {
    return (
        <Router>
            <Switch>
                {/*<Route path="/:state/:city" element={<Home city={props.city} />} />*/}
                <Route
                    path="/sp/sao-paulo"
                    element={<SaoPaulo city={props.city} />}
                />
            </Switch>
        </Router>
    );
}

export default Routes;