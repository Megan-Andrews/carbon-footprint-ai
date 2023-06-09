import logo from './logo.svg';
import './styles/App.css';
import React from 'react';
// import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home.tsx';
import About from './components/About.js';
import Navigation from './components/Navigation.js';
import Recomendation from './components/Recomendation.js';
import { useState } from 'react'
import Pages from './contexts/Pages.js'
import Context from './contexts/Context.js'
import Estimation from './components/Estimation';

function App() {
  const [page, setPage] = useState(null)

  const contexts = {
    page,
    setPage,
  }

  let currentPage = (<Home />)

    if (page === Pages.ABOUT) {
      currentPage = (<About />)
    } else if (page === Pages.HOME) {
      currentPage = (<Home />)
    } else if (page === Pages.RECOMMENDATION) {
      currentPage = (<Recomendation />)
    } else if (page === Pages.ESTIMATION) {
      currentPage = (<Estimation />)
    } 

    return (
      <div className="App">
        <Context.Provider value={contexts}>
        {/* <div className='App'> */}
            <Navigation /> 
           {currentPage}
         {/* </div> */}
      </Context.Provider>
      {/* <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
      
    );

  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
