import React from 'react';
import devIcons from '../../constants/devIcons';
import Icon from '../Media/Icon'

const TechStack = () => {
    return (
        <div className="container ">
            <h1 className="text-center text-5xl my-5">Tech Stack</h1>
            <div className="flex flex-rol justify-center gap-5 my-10 ">
                <div className=" text-4xl p-2" >
                    <Icon src={devIcons.react} alt="react icon" />

                </div>
                <div className="text-4xl p-2">

                </div>
                <div className="text-4xl p-2">

                </div>
            </div>
        </div>
    )
}

export default TechStack