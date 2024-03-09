import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import About from 'pages/About';
import Auth from 'pages/Auth';

import Top from 'components/shared/Top';
import Footer from 'components/shared/Footer';



function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Top />
        <hr/>
        <div id="content">
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/auth" element={ <Auth /> } />
          </Routes>
        </div>
        <hr />
        <Footer />
      </BrowserRouter>
    </div>
  )
}



export default App;
