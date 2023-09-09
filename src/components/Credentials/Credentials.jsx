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
        <div className="container  px-5 sm:w-2/3 md:w-1/2 lg:w-2/5 border-2 border-slate-200 rounded-md">
            <div className="mt-5 ">
                <strong className="font-serif text-xl underline decoration-yellow-500 font-bold mb-4 flex flex-row gap-6">
                    < GoBriefcase /> Work History
                </strong>
            </div>
            <div className="mt-8 space-y-6">
                <div>
                    <h3 className="text-gray-500">Contract</h3>
                    <div className="flex  justify-between">
                        <p className="text-sm">Full Stack Software Developer</p>
                        <p className="text-gray-400 text-sm">2020 - Present</p>
                    </div>
                </div>
                <div>
                    <h3 className="text-gray-500">Synthesis</h3>
                    <div className="flex  justify-between">
                        <p className="text-sm">Learning Facilitator</p>
                        <p className="text-gray-400 text-sm">2021 - 2023</p>
                    </div>
                </div>
                <div>
                    <h3 className="text-gray-500">Ruamrudee International School</h3>
                    <div className="flex  justify-between">
                        <p className="text-sm">Design Technology Teacher</p>
                        <p className="text-gray-400 text-sm">2017 - 2020</p>
                    </div>
                </div>
                <div>
                    <h3 className="text-gray-500">Shekou International School</h3>
                    <div className="flex  justify-between">
                        <p className="text-sm">Learning Innovation Coach</p>
                        <p className="text-gray-400 text-sm">2012 - 2017</p>
                    </div>
                </div>
            </div>
            <div className="my-5">
                <button className="rounded-md bg-blue-500 text-white py-3 px-6 " onClick={onButtonClick}>
                    Download Resumé
                </button>
            </div>
        </div>

    )
}

export default Credentials