import React from 'react'
import { GoBriefcase } from 'react-icons/go'

const Credentials = () => {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('cv.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let resume = document.createElement('a');
                resume.href = fileURL;
                resume.download = 'cv.pdf';
                resume.click();
            })
        })
    }

    return (
        <div>
            <div className="mt-5 ">
                <strong className="font-serif text-2xl underline decoration-yellow-500 font-bold mb-4 flex flex-row  items-center gap-6">
                    < GoBriefcase className="flex items-center"/> Work History
                </strong>
            </div>
            <div className="mt-8 space-y-6">
                <div>
                    <h3 className="text-gray-500 text-sm md:text-lg">Contract</h3>
                    <div className="flex  justify-between">
                        <p className="md:text-sm text-xs">Full Stack Software Developer</p>
                        <p className="text-gray-400 md:text-sm text-xs">2020 - Present</p>
                    </div>
                </div>
                <div>
                    <h3 className="text-gray-500 text-sm md:text-lg">Synthesis</h3>
                    <div className="flex  justify-between">
                        <p className="md:text-sm text-xs">Learning Facilitator</p>
                        <p className="text-gray-400 md:text-sm text-xs">2021 - 2023</p>
                    </div>
                </div>
                <div>
                    <h3 className="text-gray-500 text-sm md:text-lg">Ruamrudee International School</h3>
                    <div className="flex  justify-between">
                        <p className="md:text-sm text-xs">Design Technology Teacher</p>
                        <p className="text-gray-400 md:text-sm text-xs">2017 - 2020</p>
                    </div>
                </div>
                <div>
                    <h3 className="text-gray-500 text-sm md:text-lg">Shekou International School</h3>
                    <div className="flex  justify-between">
                        <p className="md:text-sm text-xs">Learning Innovation Coach</p>
                        <p className="text-gray-400 md:text-sm text-xs">2012 - 2017</p>
                    </div>
                </div>
            </div>
            <div className="my-10">
                <button className=" hover:bg-amber-300 hover:text-black bg-blue-500 text-white py-3 px-6 " onClick={onButtonClick}>
                    Download Resumé
                </button>
            </div>
        </div>

    )
}

export default Credentials