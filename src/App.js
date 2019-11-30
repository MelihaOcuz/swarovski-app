import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Team from './Components/Team/Team';
import Buy from './Components/Buy/Buy';
import Loyalty from './Components/Loyalti/Loyalty';
import Details from "./Components/Buy/Details";
import Contact from "./Components/Contact/Contact";
import Smart from "./Components/Smart/Smart";

function App() {
  return (
    <Router history={history}>
      <Route exact path="/" component={Home} />
      <Route exact path="/o-nama" component={About} />
      <Route exact path="/nas-tim" component={Team} />
      <Route exact path="/loyalty-program" component={Loyalty} />
      <Route exact path="/kupi" component={Buy} />
      <Route exact path="/detalji" component={Details} />
      <Route exact path="/kontakt" component={Contact} />
      <Route exact path="/smartswarovski-aplikacija" component={Smart} />
    </Router>
  );
}

export default App;
