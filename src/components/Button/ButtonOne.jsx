import React from 'react'

const ButtonOne = ({url, buttonText}) => {
    const handleClick = () => {
        window.open(url, '_blank'); // Open the specified URL in a new window/tab
      };
    
      return (
        <div className="mt-3">
        <button className="hover:bg-gray-500 bg-black hover:text-black text-white py-3 px-6" onClick={handleClick}>
          {buttonText}
        </button>
        </div>
      );
    };

export default ButtonOne