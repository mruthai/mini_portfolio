import React from 'react';
import { DiJsBadge, DiReact, DiVisualstudio, DiHtml5, DiCss3, DiDjango, DiFirebase } from 'react-icons/di';
import { SiFlask } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';

const TechStack = () => {
    return (
        <div>
            <h1 className="text-center text-5xl my-5">TechStack</h1>
            <div className="flex flex-row text-5xl justify-center gap-5 my-5">
                <DiJsBadge />
                <DiReact />
                <DiVisualstudio />
                <DiHtml5 />
                <DiCss3 />
                <DiDjango />
                <DiFirebase />
                <SiFlask />
                <FaPython />
            </div>
        </div>
    )
}

export default TechStack