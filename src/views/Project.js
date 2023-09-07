import React from 'react'
import 'tailwindcss/tailwind.css';
import Section1 from '../components/Section/Section1';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer'

const Project = () => {
  return (
    <div className="bg-slate-50">
      <div className="bg-slate-100">
      <NavBar />
      </div>
      <div>
      <h1 className="font-serif ml-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">Current Developements</h1>
      </div>
      <div>
        <Section1 />
      </div>
      <Footer />
    </div>
  )
}

export default Project