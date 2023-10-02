import React from 'react';
import devIcons from '../../constants/devIcons';
import TechIcons from '../Media/TechIcons'
import { ImStack } from 'react-icons/im'


const TechStack = () => {
    return (
        <div className="mt-5 md:mx-40 md:my-0 my-20">
            <strong className="font-serif text-2xl underline decoration-yellow-500 font-bold mb-10 flex flex-row gap-6">
                < ImStack /> Tech Stack
            </strong>

            <div className="flex flex-row mx-4 justify-between mb-5">
                <div className="flex flex-col space-y-7">
                    <TechIcons src={devIcons.flask} alt="flask" link="https://flask.palletsprojects.com/en/2.3.x/" />
                    <TechIcons src={devIcons.git} alt="github" link="https://git-scm.com/"/>
                    <TechIcons src={devIcons.github} alt="github" link="https://github.com/"/>
                    <TechIcons src={devIcons.graphql} alt="graphql" link="https://graphql.org/" />

                </div>
                <div className="flex flex-col space-y-7">
                    <TechIcons src={devIcons.javascript} alt="javascript" link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"/>
                    <TechIcons src={devIcons.mongodb} alt="mongodb" link="https://www.mongodb.com/"/>
                    <TechIcons src={devIcons.nodejs} alt="node" link="https://nodejs.org/en"/>
                    <TechIcons src={devIcons.npm} alt="npm" link="https://www.npmjs.com/"/>

                </div>
                <div className="flex flex-col space-y-7">
                    <TechIcons src={devIcons.bootstrap} alt="bootstrap" link="https://getbootstrap.com/"/>
                    <TechIcons src={devIcons.css3} alt="css3" link="https://www.w3.org/Style/CSS/"/>
                    <TechIcons src={devIcons.django} alt="django" link="https://www.djangoproject.com/"/>
                    <TechIcons src={devIcons.express_icon} alt="express" link="https://expressjs.com/"/>

                </div>
                <div className="flex flex-col space-y-7">
                    <TechIcons src={devIcons.python} alt="python" link="https://www.python.org/"/>
                    <TechIcons src={devIcons.react_icon} alt="react icon" link="https://react.dev/"/>
                    <TechIcons src={devIcons.sqlalchemy} alt="sqlalchemy" link="https://www.sqlalchemy.org/"/>
                    <TechIcons src={devIcons.tailwindcss} alt="tailwindcss" link="https://tailwindcss.com/"/>
                </div>
                <div className="flex flex-col space-y-7">
                    <TechIcons src={devIcons.html5} alt="html5" link="https://www.w3schools.com/html/"/>
                    <TechIcons src={devIcons.postgresql} alt="postgresql" link="https://www.postgresql.org/"/>
                    <TechIcons src={devIcons.firebase} alt="firebase" link="https://firebase.google.com/"/>
                    <TechIcons src={devIcons.vscode} alt="vscode" link="https://code.visualstudio.com/" />
            
                </div>
            </div>
        </div>
    )
}

export default TechStack