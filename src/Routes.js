import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Hive from './components/Hive';
import AirSecurity from './components/AirSecurity';
import MaritimeSecurity from './components/MaritimeSecurity';
import Hiring from './Pages/Hiring';

function ReactRoutes() {
    return (
      <Router>
        <Routes>
          <Route path="/" component={<Home />} />
          <Route path="/product" component={<Product />} />
          <Route path="/hive" component={<Hive />}/>
          <Route path="/air-security" component={<AirSecurity />}/>
          <Route path="/maritime-security" component={<MaritimeSecurity />}/>
          <Route path="/hiring" component={<Hiring />}/>
        </Routes>
      </Router>
    );
  }


export default ReactRoutes;