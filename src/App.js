// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import Policies from './components/Policies';
import Founder from './components/Founder';
import WhyRubyReact from './components/WhyRubyReact';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          {/* Main routes */}
          <Route
            path="/"
            element={
              <>
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
              </>
            }
          />
          {/* New route for the WhyRubyReact page */}
          <Route path="/why-ruby-react" element={<WhyRubyReact />} />
          {/* Founder page route */}
          <Route path="/founder" element={<Founder />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
