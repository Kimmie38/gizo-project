import React from "react";
import Link from "next/link";
import Navbar from "./components/Nav/page";
import Hero from "./components/Hero/page";
import HowItWorks from "./components/HowItWorks/page";
import WhyChooseUs from "./components/WhyChooseUs/page";
import FeaturedStores from "./components/FeautureStores/page";
import SubscriptionPage from "./Subscription/page";
import Contact from "./components/Contact/page";
import Footer from "./components/Footer/page";
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
