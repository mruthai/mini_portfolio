
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';


function App() {

  return (
    <div className=" bg-slate-50">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
