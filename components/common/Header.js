import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='max-w-[740px] px-5 w-full mx-auto z-100 fixed top-0 left-1/2 transform -translate-x-1/2 pt-4 '>
        <marquee className='w-full py-1 text-sm bg-[#ebebeb94] backdrop-blur-[10px] rounded'>Vintora  <span className='px-10'></span>   official website          </marquee>
        <nav className='pl-4 flex justify-between w-full py-2 bg-[#ebebeb94] backdrop-blur-[10px] rounded'>
            <Link href={"/"}>Text</Link>
            <ul className='flex text-sm font-medium'>
                <li className='px-4'><Link href="/shop">Shop</Link></li>
                <li className='px-4'><Link href="/about">About</Link></li>
                <li className='px-4'><Link href="/blogs">Blogs</Link></li>
                <li className='px-4'><Link href="/contact">Contact</Link></li>
                <li className='px-4'><button>Search</button></li>
                <li className='px-4'><button>Bag <span className='text-md border-[1px] rounded-full px-2 py-1'>0</span></button></li>
            </ul>
        </nav>
    </div>
  )
}
