import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Weather from './pages/Weather';
import Viborg from './pages/Viborghaveservice';
import News from './pages/News';

import './App.scss';

function App() {
  return (
    <section>
      <header>
        <Navbar />
        <section>
          <article>
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="weather" element={ <Weather /> } />
              <Route path="viborghaveservice" element={ <Viborg /> } />
              <Route path="news" element={ <News /> } />
            </Routes>
          </article>
        </section>
      </header>
    </section>
  );
}

export default App;
