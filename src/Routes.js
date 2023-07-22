import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Hive from './components/Hive';
import AirSecurity from './components/AirSecurity';
import MaritimeSecurity from './components/MaritimeSecurity';
import Hiring from './Pages/Hiring';
import Header from './components/Header';

function ReactRoutes() {
    return (
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/product" element={<Product />} />
          <Route path="/hive" element={<Hive />}/>
          <Route path="/air-security" element={<AirSecurity />}/>
          <Route path="/maritime-security" element={<MaritimeSecurity />}/>
          <Route path="/hiring" element={<Hiring />}/>
        </Routes>
      </Router>
    );
  }


export default ReactRoutes;