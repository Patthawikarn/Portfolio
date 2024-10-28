import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import image from '../../assets/1.jpg'
import image2 from '../../assets/2.jpg'
import image3 from '../../assets/3.jpg'
import image4 from '../../assets/image4.png'

export default function Projects() {
    const listProjects = [
        { id: 1, image: image, title: 'Sunkor', link: 'https://patthawikarn.github.io/P-1/' },
        { id: 2, image: image2, title: 'KDMax Search', link: 'https://patthawikarn.github.io/STMK-KDMax-Search/main.html' },
        { id: 3, image: image3, title: 'Nike Shop', link: 'https://patthawikarn.github.io/P-3/index.html' },
        { id: 4, image: image4, title: 'Soon', description: '', link: '/projects/4' },
        { id: 5, image: image4, title: 'Soon', description: '', link: '/projects/4' },
        { id: 6, image: image4, title: 'Soon', description: '', link: '/projects/4' },
        { id: 7, image: image4, title: 'Soon', description: '', link: '/projects/4' },
    ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section data-aos='fade-up' data-aos-delay='400' id='projects' className='relative overflow-hidden flex flex-col text-white body-font'>
            <div className='container px-5 py-24 mx-auto'>
                <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
                <Slider {...settings}>
                    {
                        listProjects.map((project) => {
                            return (
                                <div key={project.id} className='p-4'>
                                    <div className='h-full border-2 border-green-400  border-opacity-60 rounded-lg overflow-hidden'>
                                        <img src={project.image} alt={project.title} className='w-full h-auto lg:h-48 md:h-36 sm:h-24 object-cover object-center' />
                                        <div className='p-6'>
                                            <h2 className='tracking-widest text-xl title-font font-medium text-gray-400 mb-1'>{project.title}</h2>
                                            <p className='leading-relaxed mb-3'>{project.description}</p>
                                            <a href={project.link} className='inline-flex items-center mt-3 text-orange-500 hover:text-orange-400'>
                                                See More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </Slider>
            </div>
        </section>
    );
}
