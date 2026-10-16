import React from 'react'
import Card from '../Card/Card'
import { HTML5Icon, CSSIcon, JavaScriptIcon, ReactIcon, NextjsIcon, TailwindCSSIcon, TypeScriptIcon } from '../Icons/Icons'
import TitleSection from '../TitleSection/TitleSection'
import InfintieSkillsMarquee from './InfintieSkillsMarquee'


const Skills = () => {
    const SkillsData = [
        { title: "HTML", disc: "Markup Language", img: <HTML5Icon /> },
        { title: "Css", disc: "Styling Language", img: <CSSIcon /> },
        { title: "JavaSciript", disc: "Programming Language", img: <JavaScriptIcon /> },
        { title: "React.js", disc: "Frontend Library", img: <ReactIcon /> },
        { title: "Next.js", disc: "React Framwork", img: <NextjsIcon /> },
        { title: "tailwind CSS", disc: "Utility-Frist CSS", img: <TailwindCSSIcon /> },
        { title: "TypeScript", disc: "Typed Superset of JavaScript", img: <TypeScriptIcon /> },
    ]
    return (
        <div className='dark:bg-black dark:text-white'>
            <TitleSection title="My Skills" />
            <div className=' sm:p-4 p-2 dark:bg-black dark:text-white grid md:grid-cols-4 sm:grid-cols-2 '>
                {SkillsData.map(data => {
                    return <div key={data.title} className='sm:m-3 dark:border-[#123B60] dark:shadow-[#123B60] shadow-md hover:-translate-y-2 duration-300 shadow-teal-300 dark:bg-[#071321] my-2  p-5 font-bold md:text-sm border-2 border-teal-600 rounded-2xl '>
                        <Card title={data.title} disc={data.disc} img={data.img} />
                    </div>
                })}
            </div>
            <InfintieSkillsMarquee/>
        </div>
    )
}

export default Skills