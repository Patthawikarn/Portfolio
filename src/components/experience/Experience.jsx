import React from 'react';

export const Experience = () => {
  const experiences = [
    {
      period: "April - August 2024",
      role: "Programmer / Business Analyst",
      company: "Starmark Manufacturing Co., Ltd.",
      responsibilities: [
        "Created software applications according to the specific requirements of various departments within the company.",
        "Provided IT support by troubleshooting reported issues, maintaining, and updating servers.",
        "Served as a Business Analyst, gathering requirements from department heads and identifying technologies to enhance workflows."
      ]
    },
    {
      period: "January - March 2024",
      role: "Front End Developer (Outsource Contract)",
      company: "Lab Hyperlink",
      responsibilities: [
        "Developed front-end web pages based on UX/UI designs and collaborated with the backend team for implementation."
      ]
    },
    {
      period: "May - August 2022",
      role: "Network Engineer - IT Support",
      company: "Internship at Rangsit University",
      responsibilities: [
        "Conducted system checks and maintained the university's network infrastructure.",
        "Monitored and managed RACK servers at Rangsit University.",
        "Diagnosed and resolved issues with wireless routers.",
        "Provided recommendations and solutions for various user-reported problems."
      ]
    }
  ];

  return (
    <div id="experience" className="min-h-screen p-8">
      <h1 
        className="text-4xl font-bold mb-12 bg-gradient-to-r from-[rgb(3,154,150)] to-[rgb(87,147,110)] bg-clip-text text-transparent"
        data-aos="flip-left"
      >
        Experience
      </h1>
      
      <div className="relative">
        <div className="absolute left-[9.5rem] top-0 bottom-0 w-0.5 bg-gray-700 bg-gradient-to-r from-[rgb(3,154,150)] to-[rgb(87,147,110)]" />

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative flex mb-16"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="w-40 flex-shrink-0">
              <div className="bg-gray-700 text-white px-3 py-1 rounded-md inline-block text-sm">
                {exp.period}
              </div>
              <div className="absolute left-[9.5rem] transform -translate-x-1/2 mt-2">
                <div className="w-4 h-4 rounded-full bg-amber-500 shadow-lg shadow-amber-500/50" />
              </div>
            </div>

            <div className="ml-12 bg-gray-800 rounded-lg p-6 flex-grow shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-white mb-1">
                {exp.role}
              </h2>
              <h3 
                className="text-lg bg-gradient-to-r from-[rgb(3,154,150)] to-[rgb(87,147,110)] bg-clip-text text-transparent mb-4 font-medium"
                data-aos="fade-up"
                data-aos-delay={index * 100 + 100}
              >
                {exp.company}
              </h3>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-amber-500 mr-2 mt-1">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};