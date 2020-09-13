import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CountryDetails from './Components/CountryDetails/CountryDetails';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <Router >
      <Switch>
        <Route path="/country/:countryName">
          <CountryDetails></CountryDetails>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
