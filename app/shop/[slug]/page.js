
import ImagaView from "@/components/singleProduct/ImagaView";
import ProductDesc from "@/components/singleProduct/ProductDesc";
import{getProductBySlug} from "@/api/apiFetch";


export default async function Page({ params }) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);


  if (!product) {
    return <p>Product not found.</p>;
  }

  console.log("Single Product:", product);

  const productImage = ["/hero/1.jpg", "/hero/2.jpg", "/hero/3.jpg"];



  return (
    <div className="w-full flex gap-[10px]"> 
      {/* Left scrollable images */}
      <ImagaView productImages={productImage} />

      {/* Right sticky section */}
      <ProductDesc />
    </div>
  );
}
