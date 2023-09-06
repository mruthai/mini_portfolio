import React from 'react'
import DisplayGitHub from '../components/DisplayGitHub/DisplayGitHub';
import DataProvider from '../contexts/DataProvider';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Credentials from '../components/Credentials/Credentials';
import HeadShot from '../components/HeadShot/HeadShot';
import images from '../constants/images';
import 'tailwindcss/tailwind.css';

const Home = () => {



  return (
    
    <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10 mt-5">
        <NavBar />
      </div>
      <HeadShot
        src={images.headshot} // Adjust the image path
        alt="My Headshot"
        width="200" // Adjust the width
        height="200" // Adjust the height
      />
      <div className="mx-10 mb-5 sm:w-2/3 md:w-1/5 lg:w-2/5 pl-10">
        <h1 className=" text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold mb-4">Full stack software developer</h1>
        <p className="mb-4 pr-10 lg:ml-auto">
          I am a full-stack software developer in Quad Cities, IL, USA. I've substantially contributed to diverse projects and front-end and back-end development.
          My prior teaching experience fuels my passion for continuous learning, empowering me to refine my software development skills continually.
        </p>
      </div>
      <div className="flex flex-col justify-between p-5 sm:flex-row  sm:justify-evenly space-y-5 sm:space-y-0 sm:space-x-10">
          <DataProvider>
            <DisplayGitHub />
          </DataProvider>
          <Credentials />
      </div>
      <Footer />
    </div>
  );
};



export default Home