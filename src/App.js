import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Curriculum from './components/Curriculum';
import Pricing from './components/Pricing';
import Admissions from './components/Admissions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Curriculum />
      <Pricing />
      <Admissions />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
