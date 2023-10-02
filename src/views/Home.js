import React from 'react'
import DisplayGitHub from '../components/DisplayGitHub/DisplayGitHub';
import DataProvider from '../contexts/DataProvider';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Credentials from '../components/Credentials/Credentials';
import Section1 from '../components/Section/Section1';

import TechStack from '../components/TechStack/TechStack';
import Image from '../components/Media/Image';
import images from '../constants/images';
import 'tailwindcss/tailwind.css';


const Home = () => {


  return (
    <div className="">
    

      
        <NavBar />
      <div className="flex flex-col md:flex-row justify-center items-center sm:px-3 md:my-20 my-10 ">
        <div className="md:w-48 md:mr-32 my-5">
          <Image 
          src={images.head_shotTwo} 
          alt="My Headshot "  
          imgClassName="animate-pulse"
          
          />
        </div>
        <div className="flex flex-col md:w-3/5 md:mx-0 mx-5">
          <h1 className="font-titles text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-cyan-500 to-lime-400 to-90% ">
            Full stack software developer
          </h1>
          <p className="my-2 md:mr-20 mr-0 font-bold">I strive to foster an environment where creative innovation empowers open-minded thinkers to revolutionize the landscape of technology development.</p>
          <p className="my-4 md:mr-20 mr-0 ">
            I am a full-stack software developer in Quad Cities, IL, USA. I've substantially contributed to diverse projects in front-end and back-end development. My prior teaching experience fuels my passion for continuous learning, empowering me to refine my software development skills continually.
          </p>
        </div>
      </div>
      <div className="flex flex-col  md:flex-row-reverse justify-around px-3 md:h-auto">
        <div className="sm:w-2/3 sm:p-2 md:w-1/2 lg:w-1/2 space-y-5">
          <div className="px-5 md:w-2/3 md:mx-0 mx-1 ">
            <Credentials />
          </div>
          <div id="techStack" className="px-5 md:w-2/3 md:mx-0 mx-1 border-2 border-slate-200 rounded-md">
            <TechStack />
          </div>
        </div>
        <div className="sm:w-2/3 md:w-1/3 lg:w-1/3 ml-0 sm:ml-32">
          <div className="px-5">
            <DataProvider>
              <DisplayGitHub />
            </DataProvider>
          </div>
        </div>
      </div>
      <div id="projects" className="md:mx-32">
        <Section1/>
      </div>
      <div className="md:h-auto">
      <Footer />
      </div>
      
    </div>
  );
};



export default Home

