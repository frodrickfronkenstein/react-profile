import React, {useState} from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Portfolio from './components/Portfolio';

function App() {
  const [categories] = useState([
    { name: "About Me", description: "short bio"},
    { name: "Portfolio", description: "samples of my work"},
    { name: "Contact Me", description: "how to get in touch with me"},
    { name: "Resume" , description: "pretty self explanitory"},
  ]);

  const [currentCategory, setCurrectCategory] = useState(categories[0]);

  const renderPage = () => {
    if (currentCategory === "About Me") {
      return (
        <AboutMe></AboutMe>
      )
    } else if (currentCategory === "Portfolio") {
      return (
        <Portfolio></Portfolio>
      )
    } else {
      return (
        <AboutMe></AboutMe>
      )
    }
  }

  return (
    <div className="App">
      <Header
      categories={categories}
      currentCategory={currentCategory}
      setCurrectCategory={setCurrectCategory}
      ></Header>
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
