import React from 'react';
import devIcons from '../../constants/devIcons';
import TechIcons from '../Media/TechIcons'
import { ImStack } from 'react-icons/im'


const TechStack = () => {
    return (
        <div>
              <strong className="font-serif text-xl underline decoration-yellow-500 font-bold mb-4 flex flex-row ml-32 gap-6">
                    < ImStack /> Tech Stack
                </strong>
        <div className="flex justify-center">
            <div className="grid grid-cols-10 gap-16">
                <TechIcons src={devIcons.bootstrap} alt="bootstrap" />
                <TechIcons src={devIcons.css3} alt="css3" />
                <TechIcons src={devIcons.django} alt="django" />
                <TechIcons src={devIcons.firebase} alt="firebase" />
                <TechIcons src={devIcons.flask} alt="flask" />
                <TechIcons src={devIcons.git} alt="github" />
                <TechIcons src={devIcons.github} alt="github" />
                <TechIcons src={devIcons.graphql} alt="graphql" />
                <TechIcons src={devIcons.html5} alt="html5" />
                <TechIcons src={devIcons.javascript} alt="javascript" />
                <TechIcons src={devIcons.mongodb} alt="mongodb" />
                <TechIcons src={devIcons.nextjs} alt="nextjs" />
                <TechIcons src={devIcons.nodejs} alt="node" />
                <TechIcons src={devIcons.npm} alt="npm" />
                <TechIcons src={devIcons.postgresql} alt="postgresql" />
                <TechIcons src={devIcons.python} alt="python" />
                <TechIcons src={devIcons.react_icon} alt="react icon" />
                <TechIcons src={devIcons.sqlalchemy} alt="sqlalchemy" />
                <TechIcons src={devIcons.tailwindcss} alt="tailwindcss" />
                <TechIcons src={devIcons.vscode} alt="vscode" />
            </div>
        </div>
        </div>
    )
}

export default TechStack