import React from 'react'

const Credentials = () => {
    const onButtonClick = () => {
        fetch('cv.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let resume = document.createElement('a');
                resume.href = fileURL;
                resume.download = 'cv.pdf';
                resume.click();
            })
        })
    }

    return (
        <>
                <button className=" hover:bg-amber-300 hover:text-black bg-blue-500 text-white py-3 px-6 " onClick={onButtonClick}>
                    Download Resumé ➘
                </button>
        </>

    )
}

export default Credentials