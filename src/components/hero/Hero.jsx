import React from 'react';
import Navbar from '../navbar/Navbar';
import CV from './CV.pdf';
import img from '../../assets/1704123882874.jpg';

export default function Hero() {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col'>
       <div className='md:h-[720px] h-[660px] md:w-[640px] w-[880px] right-12 top-5 bg-gradient-to-r from-[rgb(3,154,150)] 
        via-[rgb(87,147,110)] to-red-400 absolute rounded-full transform rotate-12 -top-20 shadow-[0_0_40px_rgb(255, 165, 0, 0.7)]'>
        </div>
        <Navbar /> 
        <section 
        data-aos='fade-up'
        data-aos-delay='250'
        className='text-white body-font z-10 '>
            <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
                <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center relative'>
                    <div className='flex items-center mb-4'>
                        <h1 className='title-font sm:text-4xl text-4xl font-bold text-white'>I'm</h1>
                        <h1 className='title-font sm:text-5xl text-5xl font-bold' style={{ color: '#57936E', marginLeft: '8px' }}>Patthawikarn Panchuen</h1>
                    </div>
                    <p className='mb-5 leading-relaxed text-3xl'>Front-End Developer</p>
                    <div className='flex justify-center'>
                        <a href={CV} download> 
                            <button className='inline-flex text-white bg-green-500 border-0 py-2 px-6 
                            focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgba(3,154,150,0.7)]
                            rounded-full text-lg'>
                                Download CV
                            </button>
                        </a>
                    </div>
                </div>
                <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-'>
                    <div className='relative'>
                        <img src={img} alt="hero" className='object-cover object-center rounded-full w-80 h-80 shadow-lg border-4 border-white' />
                        <div className='absolute inset-0 rounded-full border-4 border-green-500 opacity-30 shadow-xl' style={{ filter: 'blur(5px)' }} />
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}
