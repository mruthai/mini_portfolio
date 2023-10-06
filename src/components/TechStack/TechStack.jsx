import React from 'react';
import devIcons from '../../constants/devIcons';
import TechIcons from '../Media/TechIcons'
import { ImStack } from 'react-icons/im'


const TechStack = () => {
    return (
        <div className="md:mt-10 mt-5 md:mx-40 mx-5 md:my-32 my-10 border-2 rounded-md p-3 bg-white drop-shadow-md">
            <strong className="font-serif text-2xl underline decoration-yellow-500 font-bold mb-10 flex flex-row items-center gap-6 md:mx-0 mx-5">
                < ImStack /> Tech Stack
            </strong>

            <div className="flex flex-row mx-4 justify-evenly md:mb-0 mb-5">
                <div className="flex flex-col space-y-7">
                    <span className="rounded-md hover:bg-slate-200 md:p-2 p-0 md:h-16 md:w-16  h-8 w-8">
                        <TechIcons src={devIcons.flask} alt="flask" link="https://flask.palletsprojects.com/en/2.3.x/" />
                    </span>
                    <span className="rounded-md hover:bg-slate-200 md:p-2 md:p-2 p-0 md:h-16 md:w-16  h-8 w-8">
                        <TechIcons src={devIcons.git} alt="github" link="https://git-scm.com/" />
                    </span>
                    <span className="rounded-md hover:bg-slate-200 md:p-2 md:p-2 p-0 md:h-16 md:w-16  h-8 w-8">
                        <TechIcons src={devIcons.github} alt="github" link="https://github.com/" />
                    </span>
                    <span className="rounded-md hover:bg-slate-200 md:p-2 p-0 md:h-16 md:w-16  h-8 w-8">
                        <TechIcons src={devIcons.graphql} alt="graphql" link="https://graphql.org/" />
                    </span>

                </div>
                <div className="flex flex-col space-y-7">
                    <span className="rounded-md hover:bg-slate-200 md:p-2 p-0 md:h-16 md:w-16 h-8 w-8">
                    <TechIcons src={devIcons.javascript} alt="javascript" link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />
                    </span>
                    <span className="rounded-md hover:bg-slate-200 md:p-2 p-0 md:h-16 md:w-16 h-8 w-8">
                    <TechIcons src={devIcons.mongodb} alt="mongodb" link="https://www.mongodb.com/" />
                    </span>
                    <span className="rounded-md hover:bg-slate-200 md:p-2 p-0 md:h-16 md:w-16 h-8 w-8">
                    <TechIcons src={devIcons.nodejs} alt="node" link="https://nodejs.org/en" />
                    </span>
                    <span className="rounded-md hover:bg-slate-200 md:p-2 p-0 md:h-16 md:w-16 h-8 w-8">
                    <TechIcons src={devIcons.npm} alt="npm" link="https://www.npmjs.com/" />
                    </span>

                </div>
                <div className="flex flex-col space-y-7">
                    <span className="rounded-md hover:bg-slate-200 md:p-2 p-0 md:h-16 md:w-16 h-8 w-8">
                        <TechIcons src={devIcons.bootstrap} alt="bootstrap" link="https://getbootstrap.com/" />
                    </span>
                    <span className="rounded-md hover:bg-slate-200 md:p-2 p-0 md:h-16 md:w-16 h-8 w-8">
                        <TechIcons src={devIcons.css3} alt="css3" link="https://www.w3.org/Style/CSS/" />
                    </span>
                    <span className="rounded-md hover:bg-slate-200 md:p-2 p-0 md:h-16 md:w-16 h-8 w-8">
                        <TechIcons src={devIcons.django} alt="django" link="https://www.djangoproject.com/" />
                    </span>
                    <span className="rounded-md hover:bg-slate-200 md:p-2 p-0 md:h-16 md:w-16 h-8 w-8">
                        <TechIcons src={devIcons.express_icon} alt="express" link="https://expressjs.com/" />
                    </span>

                </div>
                <div className="flex flex-col space-y-7">
                    <span className="rounded-md hover:bg-slate-200 md:p-2 p-0 md:h-16 md:w-16 h-8 w-8">
                    <TechIcons src={devIcons.python} alt="python" link="https://www.python.org/" />
                    </span>
                    <span className="rounded-md hover:bg-slate-200 md:p-2 p-0 md:h-16 md:w-16 h-8 w-8">
                    <TechIcons src={devIcons.react_icon} alt="react icon" link="https://react.dev/" />
                    </span>
                    <span className="rounded-md hover:bg-slate-200 md:p-2 p-0 md:h-16 md:w-16 h-8 w-8">
                    <TechIcons src={devIcons.sqlalchemy} alt="sqlalchemy" link="https://www.sqlalchemy.org/" />
                    </span>
                    <span className="rounded-md hover:bg-slate-200 md:p-2 p-0 md:h-16 md:w-16 h-8 w-8">
                    <TechIcons src={devIcons.tailwindcss} alt="tailwindcss" link="https://tailwindcss.com/" />
                    </span>
                </div>
                <div className="flex flex-col space-y-7">
                    <span className="rounded-md hover:bg-slate-200 md:p-2 p-0 md:h-16 md:w-16 h-8 w-8">
                    <TechIcons src={devIcons.html5} alt="html5" link="https://www.w3schools.com/html/" />
                    </span>
                    <span className="rounded-md hover:bg-slate-200 md:p-2 p-0 md:h-16 md:w-16 h-8 w-8">
                    <TechIcons src={devIcons.postgresql} alt="postgresql" link="https://www.postgresql.org/" />
                    </span>
                    <span className="rounded-md hover:bg-slate-200 md:p-2 p-0 md:h-16 md:w-16 h-8 w-8">
                    <TechIcons src={devIcons.firebase} alt="firebase" link="https://firebase.google.com/" />
                    </span>
                    <span className="rounded-md hover:bg-slate-200 md:p-2 p-0 md:h-16 md:w-16 h-8 w-8">
                    <TechIcons src={devIcons.vscode} alt="vscode" link="https://code.visualstudio.com/" />
                    </span>

                </div>
            </div>
        </div>
    )
}

export default TechStack