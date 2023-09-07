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
    <div className="bg-slate-50 ">
      <div className="bg-slate-100 ">
        <NavBar />
      </div >
      <div className="mx-10 my-5">
        <HeadShot src={images.headshot} alt="My Headshot" className="w-full ml-5 sm:w-20" />
      </div>
      <div className="mx-10 sm:w-1/2 md:w-1/5 lg:w-2/5 lg:pl-10">
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
          Full stack software developer
        </h1>
        <p className="mb-4 lg:pr-10">
          I am a full-stack software developer in Quad Cities, IL, USA. I've substantially contributed to diverse projects in front-end and back-end development. My prior teaching experience fuels my passion for continuous learning, empowering me to refine my software development skills continually.
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