import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Component/NotFound/NotFound';
import CountryDetails from './Component/CountryDetails/CountryDetails';



function App() {
  return (
    <div >

        <Router>
          <Switch>

            <Route path="/home">
                <Home></Home>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/country/:countryName">
          <CountryDetails></CountryDetails>
            </Route>
            
            <Route>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>




      
    </div>
  );
}

export default App;
