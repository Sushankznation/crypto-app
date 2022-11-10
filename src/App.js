import './App.css';
import React, { useEffect, useState } from 'react';
import Crypto from './components/Crypto';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import CoinList from './components/CoinList';
function App() {
 

  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
       <Route path='/coin' element={<CoinList/>}/>
       <Route path='/coin/:id' element={<Crypto />}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
