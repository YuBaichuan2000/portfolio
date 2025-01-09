"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';


    

const HeroSection = () => {
    return ( 
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 '>
                            Hello World, I'm {""} 
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'George Yu',
                                2000, 
                                'SW Engineer',
                                2000,
                                'ML Engineer',
                                2000,
                                'Leetcoder',
                                2000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            />
                    </h1>
                    {/* <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        I am a software engineer with a strong foundation in building robust, scalable systems and applications. My expertise spans full-stack development, including frontend and backend technologies, with a focus on performance, scalability, and user experience. I am dedicated to writing clean, maintainable code and delivering high-quality software solutions that meet business needs and drive innovation.
                    </p> */}
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-teal-500 to-blue-600  text-white font-semibold'>Hire Me</button>
                        <button
                            className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3 font-semibold"
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = '/files/Resume.pdf';  // path to your CV
                                link.download = 'Resume_George.pdf';     // desired file name
                                link.click();                   // programmatically trigger download
                            }}
                            >
                            Resume
                            </button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]'>
                        <Image
                        src="/images/baichuan.png"
                        alt='hero image'
                        className='rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={300}
                        height={300}
                        ></Image>
                    </div>
                    

                </div>
            </div>
        </section>
        
        
     );
}
 
export default HeroSection;