import React from 'react'
import NavBar from '../components/NavBar/NavBar';
import 'tailwindcss/tailwind.css';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <div>
      <NavBar />
      </div>
      <div>
      <h1 className="text-3xl font-semibold mb-4">Building & Breaking</h1>
      </div>
      
    </div>
  )
}

export default About