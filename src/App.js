// App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Curriculum from './components/Curriculum';
import Internship from './components/Internship';
import CareerServices from './components/CareerServices';
import Pricing from './components/Pricing';
import Admissions from './components/Admissions';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Curriculum />
      <Internship />
      <CareerServices />
      <Pricing />
      <Admissions />
      <FAQs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
