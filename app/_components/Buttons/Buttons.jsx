import React from 'react'

const Buttons = ({title,href}) => {
    return (
        <a href={href}  className="px-6 py-3 bg-linear-to-r from-blue-500 to-teal-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:opacity-95 transition-all duration-300">
            {title}
        </a>
    )
}

export default Buttons