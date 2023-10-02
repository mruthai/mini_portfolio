import React, {useState} from 'react'
import { GoBriefcase } from 'react-icons/go';


const Section2 = () => {
  const workHistory = [
    {
      position: 'Full Stack Software Developer',
      company: 'Contract',
      date: '2020 - Present',
      details: '•',
    },
    {
      position: 'Learning Facilitator',
      company: 'Synthesis',
      date: '2021 - 2023',
      details: 'Details about the work at Synthesis...',
    },
    {
      position: 'Design Technology Teacher',
      company: 'Ruamrudee International School',
      date: '2017 - 2020',
      details: 'Details about the work at Ruamrudee International School...',
    },
    {
      position: 'Learning Innovation Coach',
      company: 'Shekou International School',
      date: '2012 - 2017',
      details: 'Details about the work at Shekou International School...',
    },
  ];

  const [expandedSection, setExpandedSection] = useState(null);

  const toggleExpansion = (index) => {
    setExpandedSection(index === expandedSection ? null : index);
  };

  return (
    <div>
      <div className="mt-5">
        <strong className="font-serif text-xl underline decoration-yellow-500 font-bold mb-4 flex flex-row gap-6">
          <GoBriefcase /> Work History
        </strong>
      </div>
      <div className="mt-8 space-y-6">
        {workHistory.map((job, index) => (
          <div key={index}>
            <h3
              className="text-gray-950 text-sm md:text-lg font-bold cursor-pointer "
              onClick={() => toggleExpansion(index)}
            >
              {job.position}
            </h3>
            <div className="bg-amber-100">

            {expandedSection === index && (
              <div className="flex justify-between my-2 ">
                <p className="md:text-sm text-xs">{job.company}</p>
                <p className="text-gray-400 md:text-sm text-xs">{job.date}</p>
              </div>
            )}
            {expandedSection === index && (
              <p className="text-gray-500 text-sm ">
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

export default Section2