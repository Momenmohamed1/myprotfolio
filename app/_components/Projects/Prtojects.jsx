import React from 'react'
import TitleSection from '../TitleSection/TitleSection'
import CardProject from './CardProject'

const Prtojects = () => {
    return (
        <div id='Project' className='dark:bg-black md:scroll-mt-0 scroll-mt-27'>
            <div>
                <TitleSection title="My Projects" />
            </div>
            <div className='md:p-5 p-2 grid lg:grid-cols-4 gap-3 sm:grid-cols-2 md:grid-cols-3'>
                <CardProject />
                <CardProject />
                <CardProject />
                <CardProject />
            </div>
        </div>
    )
}

export default Prtojects