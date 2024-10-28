import React, { useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiBootstrap, SiMui, SiNextdotjs } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skills() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 size={100} color="#E34F26" /> },
    { name: 'CSS', icon: <FaCss3Alt size={100} color="#1572B6" /> },
    { name: 'JavaScript', icon: <FaJsSquare size={100} color="#F7DF1E" /> },
    { name: 'React', icon: <FaReact size={100} color="#61DAFB" /> },
    { name: 'Next.js', icon: <SiNextdotjs size={100} color="#000000" /> },
    { name: 'TypeScript', icon: <SiTypescript size={100} color="#3178C6" /> },
    { name: 'Tailwind', icon: <SiTailwindcss size={100} color="#38B2AC" /> },
    { name: 'Bootstrap', icon: <SiBootstrap size={100} color="#7952B3" /> },
    { name: 'MUI', icon: <SiMui size={100} color="#007FFF" /> },
    { name: 'GitHub', icon: <FaGithub size={100} color="#181717" /> },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="skills" className="relative overflow-hidden flex flex-col text-white body-font">
      <div className="container flex flex-col items-center px-5 py-24 mx-auto">
        <h1 
          className="sm:text-4xl text-3xl font-medium title-font mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[rgb(3,154,150)] to-[rgb(87,147,110)] text-center" 
          data-aos="fade-right"
          data-aos-delay="100"
        >
          Skills
        </h1>
        <div className="grid grid-cols-5 gap-10 mt-10">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center" 
              data-aos="flip-left" 
              data-aos-delay={`${index * 100}`}
            >
              <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg">
                {skill.icon}
              </div>
              <p 
                className="mt-2 text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[rgb(3,154,150)] to-[rgb(87,147,110)]" 
                style={{ fontFamily: 'YourFontFamilyHere' }}
              >
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
