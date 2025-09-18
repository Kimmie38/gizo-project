import React from "react";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

import Navsec from "./components/Navsec";
import MockProducts from "./components/MockProducts";
import Home from "./components/Home";
import Cardsections from './components/Cardsections'

const services = () => {
  return (
    <main>
      <Navsec />
      <ProductCard />
      <MockProducts />
      <Home/>
      <Cardsections/>
    
     
    </main>
  );
};

export default services;
