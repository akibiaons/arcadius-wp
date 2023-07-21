import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';

function ReactRoutes() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/product" component={Product} />
        </Routes>
      </Router>
    );
  }


export default ReactRoutes;