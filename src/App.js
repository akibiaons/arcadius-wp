import React from 'react';
import './App.css';
import Routes from './Routes';
import Header from './components/Header';
import ProductListing from './ProductListing';

function App() {
  return (
    <>
      <Header />
      <ProductListing />
      <Routes />
    </>
  );
};

export default App;
