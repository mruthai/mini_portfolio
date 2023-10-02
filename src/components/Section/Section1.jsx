import React from 'react'
import images from '../../constants/images';
import ButtonOne from '../Button/ButtonOne'
import DisplayGitHub2 from '../../components/DisplayGitHub/DisplayGitHub2';
import DataProvider from '../../contexts/DataProvider';
import { BsHammer } from 'react-icons/bs'

const Section1 = () => {
  return (
    <div className="md:mt-32 mt-20 ">
      <div className="flex flex-row items-center gap-2 font-serif md:mx-10 mx-5">
        <BsHammer size={20}/>
        <strong className="text-2xl lg:text-3xl">Projects</strong>
      </div>
      <div className="flex flex-col md:gap-0 gap-20 md:px-10 md:mx-0 mx-5 md:flex-row justify-center items-center my-20 mt-4">
        <div className="flex-1 md:w-1/2 mt-4 md:mt-0 my-0 md:pr-20">
          <h2 className="font-bold text-xl">Soccer Club Web Application</h2>
          <div className="">
            <p className="mt-5">
            I used React to create a knowledge repository and information hub for my soccer club, with plans to develop a coaches portal for lesson plans and weather updates.
            </p>
          </div>
          <div className=" md:mt-10 flex md:flex-row flex-col justify-around ">
            <ButtonOne url="https://osusc.netlify.app/" buttonText="Visit OSUSC" />
            <DataProvider>
              <DisplayGitHub2 />
            </DataProvider>
            <img className="w-40" src={images.osc_black} alt="img" />
          </div>
        </div>
        <div className="flex-1 mt-4 md:mt-0 md:pr-20">
          <h2 className="font-bold text-xl">Harvest Decision Web Application</h2>
          <div >
            <p className="mt-5">
            Built a full-stack decision app for farmers using React, integrated real-time stock data, managed user info in Firestore, and deployed it on Netlify.
            </p>
          </div>
          <div className="mt-10 flex md:flex-row flex-col justify-around my-15">

            <ButtonOne url="https://decision-harvest.netlify.app/" buttonText="Visit Decision Harvest" />
            <DataProvider>
              <DisplayGitHub2 />
            </DataProvider>
            <img className="w-20" src={images.dhlogo} alt="img" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Section1