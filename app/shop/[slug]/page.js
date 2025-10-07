
import ImagaView from "@/components/singleProduct/ImagaView";
import Image from "next/image";
import Link from "next/link";


export default async function Page({ params }) {
  const { slug } = await params;
  const productImage = ["/hero/1.jpg", "/hero/2.jpg", "/hero/3.jpg"];



  return (
    <div className="w-full flex gap-[10px]"> 
      {/* Left scrollable images */}
      <ImagaView productImages={productImage} />

      {/* Right sticky section */}
      <div className="w-1/2 h-fit bg-red-300 sticky top-[150px] p-4">
        <p className="text-xl font-semibold">tamim</p>
      </div>
    </div>
  );
}
