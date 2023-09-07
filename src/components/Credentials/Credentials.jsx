import React from 'react'

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
        <div className="container mx-auto px-4 sm:w-2/3 md:w-1/2 lg:w-2/5 border-2 border-slate-200 rounded-md">
            <div className="mt-5">
                <strong className="block text-gray-950 text-2xl mb-4">
                    📐 Work History
                </strong>
            </div>
            <div className="mt-8 space-y-6">
                <div>
                    <h3 className="text-lg">Contract</h3>
                    <div className="flex flex-row items-center gap-x-5">
                        <div className="flex-1">
                            <p className="mr-5">Full Stack Software Developer</p>
                        </div>
                        <div className="flex-1">
                            <p>2020 - Present</p>
                        </div>
                    </div>
                </div>
                <div>
                <h3 className="text-lg">Synthesis</h3>
                <div className="flex flex-row items-center gap-x-5">
                    <div className="flex-1">
                            <p>Learning Facilitator</p>
                        </div>
                        <div className="flex-1">
                            <p>2021 - 2023</p>
                        </div>
                    </div>
                </div>
                <div>
                <h3 className="text-lg">Ruamrudee International School</h3>
                <div className="flex flex-row items-center gap-x-5">
                    <div className="flex-1">

                        <p>Design Technology Teacher</p>
                        </div>
                        <div className="flex-1">

                        <p>2017 - 2020</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-5">
            <button className="rounded-full bg-blue-500 text-white py-3 px-6 rounded-md" onClick={onButtonClick}>
                    Download Resumé
                </button>
            </div>
        </div>

    )
}

export default Credentials