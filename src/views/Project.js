import React from 'react'
import 'tailwindcss/tailwind.css';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer'

const Project = () => {
  return (
    <div className="container mx-auto p-4">
      <div>
      <NavBar />
      </div>
      <div>
      <h1 className="text-3xl font-semibold mb-4">Current Developement</h1>
      </div>
      <div>

      </div>
      <Footer />
    </div>
  )
}

export default Project