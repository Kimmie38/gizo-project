import React from "react";
import Link from "next/link";
import Navbar from "./landing/components/Nav/page";
import Hero from "./landing/components/Hero/page";
import HowItWorks from "./landing/components/HowItWorks/page";
import WhyChooseUs from "./landing/components/WhyChooseUs/page";
import FeaturedStores from "./landing/components/FeautureStores/page";
import SubscriptionPage from "./landing/Subscription/page";
import Contact from "./landing/components/Contact/page";
import Footer from "./landing/components/Footer/page";
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
