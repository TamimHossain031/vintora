import React from 'react'

export default function Header() {
  return (
    <div className='w-[700px] mx-auto z-50 fixed top-0 left-1/2 transform -translate-x-1/2 pt-4 '>
        <marquee className='w-full py-2 bg-white/50 backdrop-blur-2xl rounded'>Vintora  <span className='px-10'></span>   official website          </marquee>
        <nav className='pl-4 flex justify-between w-full py-2 bg-white/50 backdrop-blur-2xl rounded'>
            <figure>Text</figure>
            <ul className='flex '>
                <li className='px-4'>Home</li>
                <li className='px-4'>About</li>
                <li className='px-4'>Contact</li>
            </ul>
        </nav>
    </div>
  )
}
