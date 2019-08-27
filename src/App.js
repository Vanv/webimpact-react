import React from 'react';
import Header from './components/content/header/Header';
import Banner from './components/content/banner/Banner';
function App() {
  return (
    <div className="container">
      <header className="App-header">
        <Header />
        <Banner />
      </header>
    </div>
  );
}

export default App;
