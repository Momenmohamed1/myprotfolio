
import React from 'react'

const Card = ({img,title ,disc}) => {
    return (
        <div className='flex items-center gap-3 '>
            <div className='flex items-center justify-center h-12 w-12'>
                {img}
            </div>
            <div>
                <p>{title}</p>
                <p>{disc}</p>
            </div>
        </div>
    )
}

export default Card