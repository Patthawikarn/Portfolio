import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  return (
    <section id='contact'>
      <div className='py-8 lg:py-16 mx-auto max-w-screen-md' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center bg-gradient-to-r from-[rgb(3,154,150)] to-[rgb(87,147,110)] bg-clip-text text-transparent'>
          Contact Me
        </h2>

        <div className="flex justify-center space-x-16 mb-8 mt-20" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
          <div className="flex items-center transition-transform transform hover:scale-105 hover:text-[rgb(3,154,150)]">
            <FontAwesomeIcon icon={faEnvelope} className="text-[rgb(3,154,150)] text-3xl mr-3 transition-transform duration-300" />
            <span className="text-white text-xl font-semibold">patthawikarn.pc@gmail.com</span>
          </div>
          <div className="flex items-center transition-transform transform hover:scale-105 hover:text-[rgb(3,154,150)]">
            <FontAwesomeIcon icon={faPhone} className="text-[rgb(3,154,150)] text-3xl mr-3 transition-transform duration-300" />
            <span className="text-white text-xl font-semibold">061-6372-619</span>
          </div>
        </div>
      </div>
    </section>
  );
}
