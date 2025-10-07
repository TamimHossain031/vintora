
import ImagaView from "@/components/singleProduct/ImagaView";
import ProductBuy from "@/components/singleProduct/productBuy";


export default async function Page({ params }) {
  const { slug } = await params;
  const productImage = ["/hero/1.jpg", "/hero/2.jpg", "/hero/3.jpg"];



  return (
    <div className="w-full flex gap-[10px]"> 
      {/* Left scrollable images */}
      <ImagaView productImages={productImage} />

      {/* Right sticky section */}
       <ProductBuy />
    </div>
  );
}
