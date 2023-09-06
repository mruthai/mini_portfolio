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
        <div className="container mx-auto px-4 border-2 border-slate-200 rounded-md" >
            <div>
                <strong className="block text-gray-950 text-lg">
                    📐 Work
                </strong>
            </div>
            <div>
                <div className="mt-5">
                    <p>Contract</p>
                    <div className="flex space-x-4">
                        <p>Full Stack Software Developer</p>
                        <p>2020 - Present</p>
                    </div>
                </div>
                <div className="mt-4">
                    <p>Synthesis</p>
                    <div className="flex space-x-4">
                        <p>Learning Facilitator</p>
                        <p>2021 - 2023</p>
                    </div>
                </div>
                <div className="">

                </div>
                <div className="">

                </div>
            </div>
            <div>
                <button onClick={onButtonClick}>
                    Download Resumé
                </button>
            </div>

        </div>
    )
}

export default Credentials