
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Project from './views/Project';

function App() {

  return (
    <div className="relatiscreenve min-h- bg-slate-50">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Projects" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
