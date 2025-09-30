'use client'
import Link from "next/link";
import { useApp } from '../../hooks/useApp';
export default function Navigation() {
    const {  showModal } = useApp();
  return (
    <>
     <nav className="pl-4 flex justify-between w-full py-2 bg-[#ebebeb94] backdrop-blur-[10px] rounded">
          <Link href={"/"}>Text</Link>
          <ul className="flex text-sm font-medium">
            <li className="px-4">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="px-4">
              <Link href="/about">About</Link>
            </li>
            <li className="px-4">
              <Link href="/blogs">Blogs</Link>
            </li>
            <li className="px-4">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="px-4">
              <button onClick={() => showModal('search')}>Search</button>
            </li>
            <li className="px-4">
              <button>
                Bag{" "}
                <span className="text-md border-[1px] rounded-full px-2 py-1">
                  0
                </span>
              </button>
            </li>
          </ul>
        </nav>
      
    </>
   
  )
}
