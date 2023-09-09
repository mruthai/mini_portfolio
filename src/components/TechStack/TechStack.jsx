import React from 'react';
import { DiJsBadge, DiReact, DiVisualstudio, DiHtml5, DiCss3, DiDjango, DiFirebase, DiGit, DiMongodb } from 'react-icons/di';
import { SiFlask, SiJson, SiTailwindcss } from 'react-icons/si';
import { FaPython, FaNode, FaBootstrap } from 'react-icons/fa';
import { BiLogoPostgresql, BiLogoGithub } from 'react-icons/bi'

const TechStack = () => {
    return (
        <div className="container">
            <h1 className="text-center text-5xl my-5">Tech Stack</h1>
            <div className=" flex flex-row text-5xl justify-center gap-5 my-5" >
                <DiJsBadge />
                <DiReact />
                <DiVisualstudio />

            </div>
            <div className=" flex flex-row text-5xl justify-center gap-5 my-5">
                <DiGit />
                <BiLogoGithub />
                <DiHtml5 />
                <DiCss3 />
                
            </div>
            <div className=" flex flex-row text-5xl justify-center gap-5 my-5">
                <FaNode />
                <SiTailwindcss />
                < FaBootstrap />
                <DiDjango />
               
            </div>
            <div className=" flex flex-row text-5xl justify-center gap-5 my-5">
            <DiFirebase />
                <SiFlask />
                <FaPython />
                <DiMongodb />
                < SiJson />
                < BiLogoPostgresql />
            </div>
        </div>
    )
}

export default TechStack