import React from 'react'
import images from '../../constants/images';
import ButtonOne from '../Button/ButtonOne'
import DisplayGitHub2 from '../../components/DisplayGitHub/DisplayGitHub2';
import DataProvider from '../../contexts/DataProvider';

const Section1 = () => {
  return (
    <div className="mt-32 ">
      <div className="md:mx-10 mx-5">
        <strong className="text-2xl lg:text-3xl">Projects</strong>
      </div>
      <div className="flex flex-col px-10 md:flex-row justify-center items-center my-20 mt-4">
        <div className="flex-1 md:w-1/2 mt-4 md:mt-0 my-0 md:pr-20">
          <h2 className="font-bold text-xl">Soccer Club Web Application</h2>
          <div className="">
            <p className="mt-5">
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
          </div>
          <div className=" mt-10 flex md:flex-row flex-col justify-around ">
            <ButtonOne url="https://osusc.netlify.app/" buttonText="Visit OSUSC" />
            <DataProvider>
              <DisplayGitHub2 />
            </DataProvider>
            <img className="w-40" src={images.osc_black} alt="img" />
          </div>
        </div>
        <div className="flex-1 md: mt-4 md:mt-0 md:pr-20">
          <h2 className="font-bold text-xl">Harvest Decision Web Application</h2>
          <div >
            <p className="mt-5">
              When it came time to building out my capstone, I took the iniative to problem solve a real-world problem.
              I wanted to build with purpose to ensure the solution I was developing had meaning. So I went into my rural community and spoke to farmers about what might solve some of their everyday problems.
              I was able to develop an application that would take in commodity stock prices of grain from a commodities API and allow the farmer to input their date to make real time calculations of the value they had for their product.
              The application was provided a diffinite answer for them to either sell or hold their product based on the calculations.
            </p>
            <br />
            <p>
              I used the React library to build the application.
              My next step is making a coaches portal to give coaches easy access to lesson plan cards and provide weather updates for potential cancelations of practice.
            </p>
          </div>
          <div className="mt-10 flex md:flex-row flex-col justify-around my-15">

            <img className="w-40" src={images.osc_black} alt="img" />
            <ButtonOne url="#" buttonText="Visit Decision Harvest" />
            <DataProvider>
              <DisplayGitHub2 />
            </DataProvider>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Section1