import React from 'react'

const TitleSection = ({title}) => {
    return (
        <div>
            <p className='md:p-10 text-5xl font-bold bg-linear-to-r/srgb from-indigo-500 to-teal-400 bg-clip-text text-transparent lg:w-[26%] lg:justify-normal flex justify-center'>{title}</p>
        </div>
    )
}

export default TitleSection