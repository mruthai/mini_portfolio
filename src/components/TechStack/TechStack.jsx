import React from 'react';
import { DiJsBadge, DiReact, DiVisualstudio, DiHtml5, DiCss3, DiDjango, DiFirebase, DiGit, DiMongodb } from 'react-icons/di';
import { SiFlask, SiJson, SiTailwindcss, SiNetlify } from 'react-icons/si';
import { FaPython, FaNode, FaBootstrap } from 'react-icons/fa';
import { BiLogoPostgresql, BiLogoGithub } from 'react-icons/bi'

const TechStack = () => {
    return (
        <div className="container ">
            <h1 className="text-center text-5xl my-5">Tech Stack</h1>
            <div className="flex flex-rol justify-center gap-5 my-10 ">
                <div className=" text-4xl p-2" >
                    <DiJsBadge style={{color: 'F0DB4F', backgroundColor:'323330'}} />
                    <DiReact style={{color: '149eca'}}/>
                    <DiVisualstudio />
                    <DiGit style={{color:'red'}}/>
                    <BiLogoGithub />
                    <DiHtml5 />

                </div>
                <div className="text-4xl p-2">
                    <SiTailwindcss />
                    <DiCss3 />
                    <FaNode />
                    < FaBootstrap />
                    <DiDjango />
                    <DiFirebase />
                </div>
                <div className="text-4xl p-2">
                    <SiFlask />
                    <FaPython style={{color: 'greenblue'}}/>
                    <DiMongodb />
                    <SiJson />
                    <BiLogoPostgresql />
                    <SiNetlify />

                </div>
            </div>
        </div>
    )
}

export default TechStack