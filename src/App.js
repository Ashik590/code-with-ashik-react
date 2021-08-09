import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Recent_blog from "./components/Recent_blog";
import About from "./components/About";
import Writter from "./components/Writter";
import Member from "./components/Member";
import Footer_menu from "./components/Footer_menu";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Recent_blog />
      <About />
      <Writter />
      <Member />
      <Footer_menu />
      <Footer />
    </>
  );
};

export default App;
