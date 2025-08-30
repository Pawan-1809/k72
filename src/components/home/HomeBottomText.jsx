import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
    return (
        <div className='font-[font2] flex items-center justify-center gap-2'>
            <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-27 flex items-baseline-last px-11 border-white rounded-full uppercase'>
                <Link className='text-[6vw] -mb-7 ' to='/projects'>Projects</Link>
            </div>
            <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-27 flex items-baseline-last px-11 border-white rounded-full uppercase'>
                <Link className='text-[6vw] -mb-7 ' to='/agence'>Agence</Link>
            </div>
        </div>
    )
}

export default HomeBottomText
