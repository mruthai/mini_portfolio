import React from 'react'
import images from '../../constants/images';
import ButtonOne from '../Button/ButtonOne'
import DisplayGitHub2 from '../../components/DisplayGitHub/DisplayGitHub2';
import DataProvider from '../../contexts/DataProvider';

const Section1 = () => {
  return (
    <div className="m-5 mb-4 py-4 px-4 border-2 border-slate-200 rounded-md">
    <div className="mt-2">
    <strong className="text-xl md:text-2xl lg:text-3xl">Soccer Club Website Application</strong>
    </div>
    <div className="flex flex-col px-10 md:flex-row justify-center items-center md:justify-between md:gap-x-10 mt-4">
      <div className="flex-1 md:w-1/2">
        <img className="w-1/2" src={images.osc_black} alt="img" />
      </div>
      <div className="flex-1 md:w-1/2 mt-4 md:mt-0">
        <p>
          I have a terrible love for soccer and have had the opportunity to coach the sport well after years of playing in college.
          The current soccer club I'm a part of needed a way to capture knowledge of running the club. They also needed
          a space to showcase vital information to parents to get their children involved in soccer recreationally or competitively.
          The repository is private, but please check out the example below.
        </p>
        <br />
        <p>
          I used the React library to build all the schedules, tables, and calendars.
          My next step is making a coaches portal to give coaches easy access to lesson plan cards and provide weather updates for potential cancelations of practice.
        </p>
        <ButtonOne url="https://osusc.netlify.app/" buttonText="Visit OSUSC" />
        <DataProvider>
          <DisplayGitHub2 />
        </DataProvider>
      </div>
    </div>
  </div>
  
  )
}

export default Section1