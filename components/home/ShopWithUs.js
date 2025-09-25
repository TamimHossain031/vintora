import { Truck } from "lucide-react";
export default function ShopWithUs() {
  return (
    <section className="mx-auto mt-[150px] max-w-[1440px]">
      <div className="title text-center">
        <h2>Why Shop with Véon</h2>
        <p>
          Enjoy exclusive benefits designed for a seamless shopping experience
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[10px] mt-[50px]">
        {Array(6)
          .fill()
          .map((_, i) => (
            <div
              className="w-full px-[30px] py-[50px] bg-[#f0f0f0] rounded-lg text-center"
              key={i}
            >
              <Truck strokeWidth={1} size={50} className="mx-auto" />
              <h2 className="text-[22px] font-semibold mt-[20px]">Free Shipping</h2>
              <p className="text-base font-normal mt-2">Get your sunglasses in 4-7 business days.</p>
            </div>
          ))}
      </div>
    </section>
  );
}
