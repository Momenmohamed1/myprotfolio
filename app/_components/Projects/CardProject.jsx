import React from 'react'
import { JavaScriptIcon, NextjsIcon, ReactIcon } from '../Icons/Icons'

const CardProject = () => {
    return (
        <article className="rounded-[10px]  border-2 border-gray-200 dark:text-white bg-white text-black px-4 pt-12 pb-4 dark:bg-[#071321] dark:border-[#0B4078]">
            <div>

            </div>
            <time dateTime="2022-10-10" className="block text-xs text-gray-500">
                {" "}
                10th Oct 2022{" "}
            </time>
            <a href="#">
                <h3 className="mt-0.5 text-lg font-medium">
                    How to center an element using JavaScript and jQuery
                </h3>
            </a>
            <div className="mt-4 flex flex-wrap gap-2 ">
                <span className="rounded-full bg-gray-200  py-1 px-2 text-xs whitespace-nowrap dark:text-white dark:bg-[#0B1A2C]  flex items-center justify-center">
                    <NextjsIcon width={25} height={25} />  <span className='font-bold'>Next</span>
                </span>
                <span className="rounded-full   py-0.5 text-xs whitespace-nowrap flex items-center justify-center px-2 dark:text-white  dark:bg-[#0B1A2C] bg-gray-200 ">
                    <span className='rounded-full mr-1'><ReactIcon width={25} height={25} /></span>
                    <span className='font-bold'>React</span>
                </span>
            </div>
            <div className='flex gap-3 mt-3 '>
                <button className='border border-teal-400 text-white  p-2 rounded-2xl duration-300 active:bg-teal-800 cursor-pointer bg-teal-600'>Live Doman</button>
                <button className='border border-teal-600 p-2  hover:bg-teal-800 active:bg-teal-900 hover:border-white duration-300 rounded-2xl cursor-pointer'>GitHub</button>
            </div>
        </article>

    )
}

export default CardProject