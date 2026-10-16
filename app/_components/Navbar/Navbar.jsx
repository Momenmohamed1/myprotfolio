"use client"

import React, { useState } from 'react'

const Navbar = () => {
    const [Toggle, setToggle] = useState(false)
    const [Theme, setTheme] = useState(false)
    const handleTheme = () => {
        document.documentElement.classList.toggle('dark')
        setTheme(!Theme)
    }
    const Navs = [
        {
            Name: "Home",
            href: "/#Home"
        },
        {
            Name: "About",
            href: "/#AboutMe"
        },
        {
            Name: "Contact",
            href: "/#ConectMe"
        },
        {
            Name: "Products",
            href: "/#Project"
        },
    ]
    return (
        <div className='w-full  flex  top-5 items-center fixed z-100 bg-none p-3  justify-center  dark:text-white '>
            <div className='p-3  w-150 shadow-teal-200 rounded-3xl  shadow-xl  bg-transparent  backdrop-blur-md border border-white/20'>
                <div className='flex items-center justify-between'>
                    <a href='/#Home' className='logo font-bold '>
                        Momen
                    </a>
                    <div>
                        <ul className='sm:flex items-center justify-center gap-3 hidden font-bold'>
                            {Navs.map(nav => {
                                return <li className='cursor-pointer hover:text-teal-600 duration-300' key={nav.Name}><a href={nav.href}>{nav.Name}</a>

                                </li>
                            })}
                        </ul>
                    </div>
                    <div className=' hidden sm:flex'>
                        <button className='relative cursor-pointer w-10 h-10 flex items-center justify-center rounded-full  text-gray-800 dark:text-yellow-400 transition-colors duration-500 focus:outline-none' onClick={handleTheme}>
                            {Theme ?
                                <svg className='absolute transition-all duration-500 ease-in-out transform rotate-0 scale-100 opacity-100' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25ZM4.39861 4.39861C4.6915 4.10572 5.16638 4.10572 5.45927 4.39861L5.85211 4.79145C6.145 5.08434 6.145 5.55921 5.85211 5.85211C5.55921 6.145 5.08434 6.145 4.79145 5.85211L4.39861 5.45927C4.10572 5.16638 4.10572 4.6915 4.39861 4.39861ZM19.6011 4.39887C19.894 4.69176 19.894 5.16664 19.6011 5.45953L19.2083 5.85237C18.9154 6.14526 18.4405 6.14526 18.1476 5.85237C17.8547 5.55947 17.8547 5.0846 18.1476 4.79171L18.5405 4.39887C18.8334 4.10598 19.3082 4.10598 19.6011 4.39887ZM12 6.75C9.1005 6.75 6.75 9.1005 6.75 12C6.75 14.8995 9.1005 17.25 12 17.25C14.8995 17.25 17.25 14.8995 17.25 12C17.25 9.1005 14.8995 6.75 12 6.75ZM5.25 12C5.25 8.27208 8.27208 5.25 12 5.25C15.7279 5.25 18.75 8.27208 18.75 12C18.75 15.7279 15.7279 18.75 12 18.75C8.27208 18.75 5.25 15.7279 5.25 12ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3C3.41421 11.25 3.75 11.5858 3.75 12C3.75 12.4142 3.41421 12.75 3 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM20.25 12C20.25 11.5858 20.5858 11.25 21 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H21C20.5858 12.75 20.25 12.4142 20.25 12ZM18.1476 18.1476C18.4405 17.8547 18.9154 17.8547 19.2083 18.1476L19.6011 18.5405C19.894 18.8334 19.894 19.3082 19.6011 19.6011C19.3082 19.894 18.8334 19.894 18.5405 19.6011L18.1476 19.2083C17.8547 18.9154 17.8547 18.4405 18.1476 18.1476ZM5.85211 18.1479C6.145 18.4408 6.145 18.9157 5.85211 19.2086L5.45927 19.6014C5.16638 19.8943 4.6915 19.8943 4.39861 19.6014C4.10572 19.3085 4.10572 18.8336 4.39861 18.5407L4.79145 18.1479C5.08434 17.855 5.55921 17.855 5.85211 18.1479ZM12 20.25C12.4142 20.25 12.75 20.5858 12.75 21V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V21C11.25 20.5858 11.5858 20.25 12 20.25Z" fill="currentColor"></path></svg>
                                :
                                <svg className='absolute transition-all duration-500 ease-in-out transform rotate-0 scale-100 opacity-100' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M2.02911 12.42C2.38911 17.57 6.75911 21.76 11.9891 21.99C15.6791 22.15 18.9791 20.43 20.9591 17.72C21.7791 16.61 21.3391 15.87 19.9691 16.12C19.2991 16.24 18.6091 16.29 17.8891 16.26C12.9991 16.06 8.99911 11.97 8.97911 7.13996C8.96911 5.83996 9.23911 4.60996 9.72911 3.48996C10.2691 2.24996 9.61911 1.65996 8.36911 2.18996C4.40911 3.85996 1.69911 7.84996 2.02911 12.42Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            }
                        </button>
                    </div>
                    {/* Navbar For Mobile */}
                    <div className='sm:hidden flex'>
                        <div className=''><button className='relative w-10 h-10 flex items-center justify-center rounded-full cursor-pointer text-gray-800 dark:text-yellow-400 transition-colors duration-500 focus:outline-none' onClick={handleTheme}>
                            {Theme ?
                                <svg className='absolute transition-all duration-500 ease-in-out transform rotate-0 scale-100 opacity-100' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M2.02911 12.42C2.38911 17.57 6.75911 21.76 11.9891 21.99C15.6791 22.15 18.9791 20.43 20.9591 17.72C21.7791 16.61 21.3391 15.87 19.9691 16.12C19.2991 16.24 18.6091 16.29 17.8891 16.26C12.9991 16.06 8.99911 11.97 8.97911 7.13996C8.96911 5.83996 9.23911 4.60996 9.72911 3.48996C10.2691 2.24996 9.61911 1.65996 8.36911 2.18996C4.40911 3.85996 1.69911 7.84996 2.02911 12.42Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                :
                                <svg className='absolute transition-all duration-500 ease-in-out transform rotate-0 scale-100 opacity-100' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25ZM4.39861 4.39861C4.6915 4.10572 5.16638 4.10572 5.45927 4.39861L5.85211 4.79145C6.145 5.08434 6.145 5.55921 5.85211 5.85211C5.55921 6.145 5.08434 6.145 4.79145 5.85211L4.39861 5.45927C4.10572 5.16638 4.10572 4.6915 4.39861 4.39861ZM19.6011 4.39887C19.894 4.69176 19.894 5.16664 19.6011 5.45953L19.2083 5.85237C18.9154 6.14526 18.4405 6.14526 18.1476 5.85237C17.8547 5.55947 17.8547 5.0846 18.1476 4.79171L18.5405 4.39887C18.8334 4.10598 19.3082 4.10598 19.6011 4.39887ZM12 6.75C9.1005 6.75 6.75 9.1005 6.75 12C6.75 14.8995 9.1005 17.25 12 17.25C14.8995 17.25 17.25 14.8995 17.25 12C17.25 9.1005 14.8995 6.75 12 6.75ZM5.25 12C5.25 8.27208 8.27208 5.25 12 5.25C15.7279 5.25 18.75 8.27208 18.75 12C18.75 15.7279 15.7279 18.75 12 18.75C8.27208 18.75 5.25 15.7279 5.25 12ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3C3.41421 11.25 3.75 11.5858 3.75 12C3.75 12.4142 3.41421 12.75 3 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM20.25 12C20.25 11.5858 20.5858 11.25 21 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H21C20.5858 12.75 20.25 12.4142 20.25 12ZM18.1476 18.1476C18.4405 17.8547 18.9154 17.8547 19.2083 18.1476L19.6011 18.5405C19.894 18.8334 19.894 19.3082 19.6011 19.6011C19.3082 19.894 18.8334 19.894 18.5405 19.6011L18.1476 19.2083C17.8547 18.9154 17.8547 18.4405 18.1476 18.1476ZM5.85211 18.1479C6.145 18.4408 6.145 18.9157 5.85211 19.2086L5.45927 19.6014C5.16638 19.8943 4.6915 19.8943 4.39861 19.6014C4.10572 19.3085 4.10572 18.8336 4.39861 18.5407L4.79145 18.1479C5.08434 17.855 5.55921 17.855 5.85211 18.1479ZM12 20.25C12.4142 20.25 12.75 20.5858 12.75 21V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V21C11.25 20.5858 11.5858 20.25 12 20.25Z" fill="currentColor"></path></svg>
                            }
                        </button>
                        </div>
                        <div className='sm:hidden  rounded-2xl cursor-pointer p-2' onClick={() => { setToggle(!Toggle) }}>
                            {Toggle ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H21C21.4142 5.25 21.75 5.58579 21.75 6C21.75 6.41421 21.4142 6.75 21 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM2.25 10C2.25 9.58579 2.58579 9.25 3 9.25H21C21.4142 9.25 21.75 9.58579 21.75 10C21.75 10.4142 21.4142 10.75 21 10.75H3C2.58579 10.75 2.25 10.4142 2.25 10ZM14.4697 12.9697C14.7626 12.6768 15.2374 12.6768 15.5303 12.9697L17.5 14.9393L19.4697 12.9697C19.7626 12.6768 20.2374 12.6768 20.5303 12.9697C20.8232 13.2626 20.8232 13.7374 20.5303 14.0303L18.5607 16L20.5303 17.9697C20.8232 18.2626 20.8232 18.7374 20.5303 19.0303C20.2374 19.3232 19.7626 19.3232 19.4697 19.0303L17.5 17.0607L15.5303 19.0303C15.2374 19.3232 14.7626 19.3232 14.4697 19.0303C14.1768 18.7374 14.1768 18.2626 14.4697 17.9697L16.4393 16L14.4697 14.0303C14.1768 13.7374 14.1768 13.2626 14.4697 12.9697ZM2.25 14C2.25 13.5858 2.58579 13.25 3 13.25H11C11.4142 13.25 11.75 13.5858 11.75 14C11.75 14.4142 11.4142 14.75 11 14.75H3C2.58579 14.75 2.25 14.4142 2.25 14ZM2.25 18C2.25 17.5858 2.58579 17.25 3 17.25H11C11.4142 17.25 11.75 17.5858 11.75 18C11.75 18.4142 11.4142 18.75 11 18.75H3C2.58579 18.75 2.25 18.4142 2.25 18Z" fill="currentColor"></path></svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M19.75 10C19.75 10.4142 19.4142 10.75 19 10.75L5 10.75C4.58579 10.75 4.25 10.4142 4.25 10C4.25 9.58579 4.58579 9.25 5 9.25L19 9.25C19.4142 9.25 19.75 9.58579 19.75 10Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M19.75 14C19.75 14.4142 19.4142 14.75 19 14.75L5 14.75C4.58579 14.75 4.25 14.4142 4.25 14C4.25 13.5858 4.58579 13.25 5 13.25L19 13.25C19.4142 13.25 19.75 13.5858 19.75 14Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M19.75 6C19.75 6.41421 19.4142 6.75 19 6.75L5 6.75C4.58579 6.75 4.25 6.41421 4.25 6C4.25 5.58579 4.58579 5.25 5 5.25L19 5.25C19.4142 5.25 19.75 5.58579 19.75 6Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M19.75 18C19.75 18.4142 19.4142 18.75 19 18.75L5 18.75C4.58579 18.75 4.25 18.4142 4.25 18C4.25 17.5858 4.58579 17.25 5 17.25L19 17.25C19.4142 17.25 19.75 17.5858 19.75 18Z" fill="currentColor"></path></svg>

                            }
                        </div>

                    </div>
                </div>
                {Toggle &&
                    <ul className=' sm:hidden font-bold '>
                        {Navs.map(nav => {
                            return <li className=' mb-2 hover:text-teal-600 duration-200 cursor-pointer' key={nav.Name}>
                                <a onClick={()=>{setToggle(!Toggle )}} href={nav.href} >{nav.Name}</a>
                            </li>
                        })}
                    </ul>
                }
            </div>
        </div>

    )

}

export default Navbar