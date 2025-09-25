import { GoDash } from "react-icons/go";
import Image from "next/image";
export default function CustomerSayCard() {
  return (
    <div className="w-full bg-[#f0f0f0] rounded p-[50px]">
      <p className="mb-[50px]">
        The quality and fit are absolutely perfect! From the moment I put it on,
        I could feel the attention to detail and craftsmanship. The fabric is
        soft yet durable, making it perfect for everyday wear while still
        looking stylish. Definitely my new go-to brand!
      </p>
      <Image src="/hero/1.jpg" width={50} height={50} alt="hero" className="rounded-full size-[50px] mx-auto" />
      <h6 className="flex items-center justify-center gap-1 mt-2 text-sm font-medium"><GoDash className="text-[#33383c] font-bold" /> John Doe</h6>
    </div>
  );
}
