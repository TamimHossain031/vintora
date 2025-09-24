import Image from "next/image";

export default function BestSale() {
  return (
    <section className='w-full h-dvh py-[150px] relative '>
       <nav className='max-w-[700px] mx-auto pl-4 flex justify-between w-full py-2 bg-white/50 backdrop-blur-2xl rounded sticky top-[100px] z-50 '>
            <h4>Best Sale</h4>            
        </nav>
      <div className='max-w-[1380px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]'>
        { Array(9).fill().map((_, i) => (
          <div key={i}>
           <figure className="aspect-square rounded-lg">
            <Image src="/hero/1.jpg" fill={true} alt="hero " className="object-cover object-center"/>
           </figure>
          </div>

        )) }
      </div>


    </section>
  )
}
 