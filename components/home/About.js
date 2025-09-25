import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className='w-full h-[120dvh]  relative'>
        <Image src="/hero/1.jpg" fill={true} alt="hero" className="object-cover object-center brightness-70" />
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-2">
            <h2 className="text-[40px] text-white font-semibold">Our Story, Your Style</h2>
            <p className="text-base text-[#ccc] max-w-[400px]">Crafting timeless fashion with quality, innovation, and sophistication at the core</p>
            <Link href={'/'} className="text-sm px-5 py-[14px] bg-[#ebebeb94] backdrop-blur-[10px] inline-block rounded">Explore About Us</Link>
        </div>
    
    </section>
  )
}
