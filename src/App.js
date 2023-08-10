import React from "react";
import Header from "./components/Header";
import ProductListing from "./ProductListing";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Hive from "./components/Hive";
import AirSecurity from "./components/AirSecurity";
import MaritimeSecurity from "./components/MaritimeSecurity";
import Hiring from "./Pages/Hiring";
import Footer from "./components/Footer";
import CommadAndControl from "./Pages/CommadAndControl";
import MissionAutonomy from "./Pages/MissionAutonomy";
import CounterUas from "./Pages/CounterUas";
import CounterIntrusion from "./Pages/CounterIntrusion";
import ScrollToTop from "./components/ScrollToTop";
import Ghost from "./Pages/Ghost";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/hive" element={<Hive />} />
        <Route path="/air-security" element={<AirSecurity />} />
        <Route path="/maritime-security" element={<MaritimeSecurity />} />
        <Route path="/hiring" element={<Hiring />} />
        <Route path="/commandandcontrol" element={<CommadAndControl />} />
        <Route path="/missionautonomy" element={<MissionAutonomy />} />
        <Route path="/counteruas" element={<CounterUas />} />
        <Route path="/counterintrusion" element={<CounterIntrusion />} />
        <Route path="/ghost" element={<Ghost />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
