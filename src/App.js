import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {

  return (
    <Router>  
      <Routes>
        {/* Routes to the pages we want to show */}
        <Route path="/" element={ <Home  /> } />
        <Route path="/login" element={ <Home  /> } />
      </Routes>
    </Router>
  );
}

export default App;
