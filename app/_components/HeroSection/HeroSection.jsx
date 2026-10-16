'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Buttons from '../Buttons/Buttons'


const HeroSection = () => {
    return (
        <div id='Home' className=' min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col md:flex-row items-center justify-center gap-8 px-5 sm:px-8 md:px-10 pt-32 pb-10'>
            <div className='sideBar  md:w-200'>
                <p className='md:text-5xl text-2xl font-bold dark:text-white text-black/85 '>Hello i'm
                    <span className='bg-linear-to-r/srgb from-indigo-500 to-teal-400 bg-clip-text text-transparent'> Momen Mohamed </span>
                    Frontend Developer | <span className='bg-linear-to-r/srgb from-indigo-500 to-teal-400 bg-clip-text text-transparent' >React.js</span>
                </p>
                <br />
                <div className='text-md font-bold text-gray-500'>
                    I build modern, responsive, and user-friendly web experiences using React.js, Next.js, and Tailwind CSS. Currently learning backend development to become a Full-Stack Developer.
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Buttons title="Conect Me" href="/#ConectMe"/>

                    <a href="/#Project" className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-semibold rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
                        View Projects
                    </a>
                </div>
            </div>
            <div className='flex  items-center justify-center mt-6 '>
                <div className='relative '><Image className=' flex items-center  object-contain animate-float drop-shadow-2xl' src="/2.png" width={790} height={800} alt='Image' /></div>
            </div>
        </div>
    )
}

export default HeroSection