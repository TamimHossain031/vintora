import React from 'react'

export default function Header() {
  return (
    <div className='max-w-[740px] px-5 w-full mx-auto z-100 fixed top-0 left-1/2 transform -translate-x-1/2 pt-4 '>
        <marquee className='w-full py-1 text-sm bg-[#ebebeb94] backdrop-blur-[10px] rounded'>Vintora  <span className='px-10'></span>   official website          </marquee>
        <nav className='pl-4 flex justify-between w-full py-2 bg-[#ebebeb94] backdrop-blur-[10px] rounded'>
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
