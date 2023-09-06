import React from 'react'
import 'tailwindcss/tailwind.css';
import Section1 from '../components/Section/Section1';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer'

const Project = () => {
  return (
    <div className="container mx-auto p-4">
      <div>
      <NavBar />
      </div>
      <div>
      <h1 className="text-3xl font-semibold mb-4">Current Developements</h1>
      </div>
      <div>
        <Section1 />
      </div>
      <Footer />
    </div>
  )
}

export default Project