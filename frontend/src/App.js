import React from 'react';
import './App.css';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import RegistrationForm from './components/RegistrationForm';
import Speakers from './components/Speakers';
import Sponsors from './components/Sponsors';
import Transportation from './components/Transportation';
import VendorForm from './components/VendorForm';
import CountdownTimer from './components/CountdownTimer';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

function App() {
  return (
    <div className="App">
      <StickyCTA />
      <Hero />
      <EventDetails />
      <CountdownTimer />
      <RegistrationForm />
      <Speakers />
      <Sponsors />
      <Transportation />
      <VendorForm />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
