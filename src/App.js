import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header>
      </Header>
      <main>
        <AboutMe></AboutMe>
      </main>
    </div>
  );
}

export default App;
