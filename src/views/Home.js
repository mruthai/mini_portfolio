import React from 'react'
import DisplayGitHub from '../components/DisplayGitHub/DisplayGitHub';
import DataProvider from '../contexts/DataProvider';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Section1 from '../components/Section/Section1';
import WorkHistory from '../components/Credentials/WorkHistory'
import TechStack from '../components/TechStack/TechStack';
import Image from '../components/Media/Image';
import images from '../constants/images';
import Credentials from '../components/Credentials/Credentials';
import 'tailwindcss/tailwind.css';



const Home = () => {

  return (
    <>
      <NavBar />
      
      <div className="flex flex-col md:flex-row justify-center items-center sm:px-3 md:my-48 my-10 ">
        <div className="md:w-48 md:mr-32 my-5 z-0 relative">
          <Image
            src={images.head_shotTwo}
            alt="My Headshot "
            imgClassName="animate-pulse" />
        </div>
        <div className="flex flex-col md:w-3/5 md:mx-0 mx-5">
          <h1 className="font-titles text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-cyan-500 to-lime-400 to-90% ">
            Full stack software developer
          </h1>
          <p className="my-2 md:mr-20 mr-0 font-bold">I strive to foster an environment where creative innovation empowers open-minded thinkers to revolutionize the landscape of technology development.</p>
          <p className="my-4 md:mr-20 mr-0 ">
            I am a full-stack software developer in Quad Cities, IL, USA. I've substantially contributed to diverse projects in front-end and back-end development. My prior teaching experience fuels my passion for continuous learning, empowering me to refine my software development skills continually.
          </p>
          <div className="">
            <Credentials />
          </div>
        </div>
      </div>
      <div id="repository">

        <DataProvider>
          <DisplayGitHub />
        </DataProvider>
      </div>
      <div id="workhistory">

        <WorkHistory />
      </div>
      <div id="techstack" className="my-64">
        <TechStack />
      </div>

      <div id="projects" className="md:mx-32 md:my-44 my-10">
        <DataProvider>

        <Section1 
      
        />
        </DataProvider>
      </div>
      <div className="md:h-auto">
        <Footer />
      </div>

    </>
  );
};



export default Home

