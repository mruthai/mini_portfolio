import React from 'react'
import images from '../../constants/images';
import  Button_1  from '../Button/Button_1'

const Section1 = () => {
  return (
    <div className=" m-5 mb-4 py-4 px-4 border-2 border-slate-200 rounded-md">
        {/* sm:w-2/3 md:w-1/2 lg:w-2/5  */}
        <div className="mt-2"> 

         <strong >Soccer Club Application</strong>
        </div>
         <div className="flex flex-row justify-evenly items-center gap-x-10">
            <div className="flex-1">
                <img className="" src={images.osc_black} alt="img" />
            </div>
            <div className="flex-1">
                <p>I have a terrible love for soccer and have had the opportunity to coach the sport well after the years of playing in college. 
                    The current soccer club that I'm a part of need a way to not only capture knowledge of how to run the club. They also needed
                    a space to showcase vital information to parents to get their children involved in the game of soccer. 
                </p>
                <Button_1 url="https://osusc.netlify.app/" buttonText="Visit OSUSC "/>
            </div>
         </div>
    </div>
  )
}

export default Section1