
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
// import About from './views/About';
import Project from './views/Project';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
