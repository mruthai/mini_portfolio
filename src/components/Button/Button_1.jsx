import React from 'react'

const Button_1 = ({url, buttonText}) => {
    const handleClick = () => {
        window.open(url, '_blank'); // Open the specified URL in a new window/tab
      };
    
      return (
        <div className="mt-3">
        <button className="rounded-full bg-blue-500 text-white py-3 px-6 rounded-md" onClick={handleClick}>
          {buttonText}
        </button>
        </div>
      );
    };

export default Button_1