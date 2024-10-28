import React from 'react'

export default function Navbar() {
    const listNavbar = [
        {name: 'Skills', link:'#skills'},
        {name: 'Experience', link:'#experience'},
        {name: 'Projects', link:'#projects'},
    ];
  return (

    <header data-aos='fade-up' className='text-gray-600 body-font z-10'>
    <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
            <span className='ml-3 text-3xl font-bold bg-gradient-to-r from-[rgb(3,154,150)] to-[rgb(87,147,110)] bg-clip-text text-transparent'>
                Portfolio
            </span>
        </a>
        <nav className='md:ml-auto text-white text-base md:mr-auto flex flex-wrap items-center justify-center'>
            {
               listNavbar.map((item, index) => (
                <a 
                    key={index} 
                    href={item.link} 
                    className='mr-5 hover:text-green-300 font-semibold'
                    style={{ fontFamily: 'YourFontFamilyHere' }}
                >
                    {item.name}
                </a>
                ))
            }
        </nav>
        <button className='inline-flex items-center py-1 px-7 focus:outline-none text-base text-white mt-4
         md:mt-0 border border-transparent hover:border-green-300 hover:text-gray-900 rounded-full shadow-lg bg-gradient-to-r from-[rgb(3,154,150)] to-[rgb(87,147,110)]'>
            <a href='#contact'>Contact</a>
        </button>
    </div>
</header>

  )
}
