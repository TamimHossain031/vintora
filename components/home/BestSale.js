import Image from "next/image";
import Card from "../ui/Card";

export default function BestSale() {
  return (
    <section className='w-full h-dvh pt-[150px] mb-[150px] relative '>
       <nav className='max-w-[700px] mx-auto pl-4 flex justify-between w-full py-2 bg-[#ebebeb94] backdrop-blur-[10px] rounded sticky top-[100px] z-50 '>
            <h4>Best Sale</h4>            
        </nav>
      <div className='max-w-[1380px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] mt-5'>
        { Array(9).fill().map((_, i) => (
        <Card key={i} />

        )) }
      </div>


    </section>
  )
}
 