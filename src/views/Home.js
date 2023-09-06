import React from 'react'
import DisplayGitHub from '../components/DisplayGitHub/DisplayGitHub';
import DataProvider from '../contexts/DataProvider';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Credentials from '../components/Credentials/Credentials';
import 'tailwindcss/tailwind.css';

const Home = () => {



  return (
    <div className="relative">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-5">
        <NavBar />
      </div>
      <div className="container mx-5 sm:mx-10 md:mx-20 lg:mx-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold mb-4">Full stack software developer</h1>
        <p className="mb-4">
          I am a full-stack software developer in Quad Cities, IL, USA. I've substantially contributed to diverse projects and front-end and back-end development.
          My prior teaching experience fuels my passion for continuous learning, empowering me to refine my software development skills continually.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly space-y-5 sm:space-y-0 sm:space-x-10">
        <div>
          <DataProvider>
            <DisplayGitHub />
          </DataProvider>
        </div>
        <div>
          <Credentials />
        </div>
      </div>
      <Footer />
    </div>
    </div>
  );
};



export default Home