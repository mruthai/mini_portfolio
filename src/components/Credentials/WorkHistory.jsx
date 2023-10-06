import React, { useState } from 'react'
import { GoBriefcase } from 'react-icons/go';


const WorkHistory = () => {
  // state variable is declared we set the state to null.
  // The usestate hook keeps track of which job is currently expanded in the browser or collapsed showing no details. 
  // NULL means that no section is expanded.
    const [expandedSection, setExpandedSection] = useState(null);
  
  // Arrow function -> when the user clicks on a job which is indexed, it will expand the section revealing details of the job. 
    const toggleExpansion = (index) => {
      setExpandedSection(index === expandedSection ? null : index );
    };

  // Array containing object rep - position, company, date of work, and description or details. 
  const workHistory = [
    {
      position: 'Full Stack Software Developer ',
      company: 'Contract',
      date: '2020 - Present',
      details: '• Led the development of quality website products and web applications for clients with constrained budgets',
    },
    {
      position: 'Learning Facilitator',
      company: 'Synthesis',
      date: '2021 - 2023',
      details: '• Led a student internship initiative to support the development of educational leadership.',
    },
    {
      position: 'Design Technology Teacher',
      company: 'Ruamrudee International School',
      date: '2017 - 2020',
      details: '• Designed and led the development of Makerspace for students and staff.',
    },
    {
      position: 'Learning Innovation Coach',
      company: 'Shekou International School',
      date: '2012 - 2017',
      details: '• Led a school-wide initiative called AMPed based on the principles of intrinsic motivation.',
    },
  ];

  return (
    <div className="md:my-40 md:mt-0 mt-44 md:mx-44 flex flex-col justify-center ">
      <div className="mb-12">
        <strong className="font-serif text-2xl md:mx-0 mx-5 underline decoration-yellow-500 font-bold mb-4 flex items-center flex-row gap-6">
          <GoBriefcase /> Work History
        </strong>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center md:gap-1 gap-32 ">
        {workHistory.map((job, index) => (
          <div className="relative w-80" key={index}>
            <h3
              className="flex flex-row text-gray-950 md:text-lg font-bold cursor-pointer gap-2 "
              onClick={() => toggleExpansion(index)}>{job.position}
              <span className="relative flex h-3 w-3">
                <span className="animate-bounce absolute inline-flex h-full w-full "> ↓</span>
              </span>
            </h3>

            <div className="relative">
              {expandedSection === index && (
                <div className="absolute w-80 top-2 flex flex-row gap-10">
                  <p className="md:text-sm text-xs">{job.company}</p>
                  <p className="text-gray-400 md:text-sm text-xs">{job.date}</p>
                </div>
              )}
              {expandedSection === index && (
                <p className="absolute top-10   text-gray-500 text-sm ">
                  {job.details}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkHistory