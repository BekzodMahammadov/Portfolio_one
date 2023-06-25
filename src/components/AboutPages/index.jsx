import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Begin from "./Begin";
import Features from "./Features";
import Plan from "./Plan";
import GlobalNet from "./GlobalNet";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

export default () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Begin />
      <Features />
      <Plan />
      <GlobalNet />
      <Testimonials />
      <Footer />
    </div>
  );
};
