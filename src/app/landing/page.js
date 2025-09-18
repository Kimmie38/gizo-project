import React from "react";
import Link from "next/link";
import Navbar from "./components/Nav";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import FeaturedStores from "./components/FeaturedStores";
import SubscriptionPage from "./SubscriptionPage";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
const Landing = () => {
  return (
    <main>
      <Navbar />
      <Hero/>
      <HowItWorks/>
      <WhyChooseUs/>
      <FeaturedStores/>
      <SubscriptionPage/>
      <Contact/>
      <Footer/>
    </main>
  );
};

export default Landing;
