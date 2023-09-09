import React from 'react'
import DisplayGitHub from '../components/DisplayGitHub/DisplayGitHub';
import DataProvider from '../contexts/DataProvider';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Credentials from '../components/Credentials/Credentials';
import HeadShot from '../components/HeadShot/HeadShot';
import images from '../constants/images';
import TechStack from '../components/TechStack/TechStack';
import 'tailwindcss/tailwind.css';

const Home = () => {



  return (
    <div className="bg-slate-50 ">
      <div className="bg-slate-100 ">
        <NavBar />
      </div>
      <div className="flex flex-row justify-around gap-10 lg:px-32 my-10 ">
        <div className=" my-5">
          <HeadShot src={images.head_shotTwo} alt="My Headshot" className="scale-150 mx-3 sm:w-20" />
        </div>
        <div className="flex flex-col justify-center lg:px-10 md:px-5 sm:px-3 ">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-cyan-500 to-lime-400 to-90% ">
            Full stack software developer
          </h1>
          <p className="my-2 font-bold">I strive to foster an environment where creative innovation empowers open-minded thinkers to revolutionize the landscape of technology development.</p>
          <p className="my-4 lg:pr-0">
            I am a full-stack software developer in Quad Cities, IL, USA. I've substantially contributed to diverse projects in front-end and back-end development. My prior teaching experience fuels my passion for continuous learning, empowering me to refine my software development skills continually.
          </p>
        </div>
      </div>
      <div>
        <TechStack />
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