import React from 'react';
import Navigation from './components/content/navigation/navigation';
import Header from './components/content/header/Header';
import Banner from './components/content/banner/Banner';
import Contact from './components/content/contact/contact';
import Portfolio from './components/content/portfolio/portfolio';
import Skills from './components/content/skills/skills';
import Footer from './components/content/footer/footer';

function App() {
  return (
    <div>
      <Navigation />
      <div className="container">
        
      </div>
      <Banner />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
