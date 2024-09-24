// App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProgramsAndPricing from './components/ProgramsAndPricing';
import Curriculum from './components/Curriculum';
import Internship from './components/Internship';
import CareerServices from './components/CareerServices';
import Admissions from './components/Admissions';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Policies from './components/Policies'; // New component
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <ProgramsAndPricing />
      <Curriculum />
      <Internship />
      <CareerServices />
      <Admissions />
      <FAQs />
      <Contact />
      <Policies />
      <Footer />
    </div>
  );
}

export default App;
