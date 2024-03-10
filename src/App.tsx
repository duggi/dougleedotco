import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import About from 'pages/About';
import Auth from 'pages/Auth';

import LayoutStandard from 'layouts/LayoutStandard';
import LayoutSimple from 'layouts/LayoutSimple';




function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <div id="content">
          <Routes>
            <Route element={ <LayoutStandard /> }>
              <Route path="/" element={ <Home /> } />
            </Route>
            <Route element={ <LayoutSimple /> }>
              <Route path="/about" element={ <About /> } />
              <Route path="/auth" element={ <Auth /> } />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}



export default App;
