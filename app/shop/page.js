import Card from "@/components/ui/Card";
import Link from "next/link";
import {getAllWooCommerceProducts} from "@/api/apiFetch";


export const metadata = {
  title: 'All Products | Your Store',
  description: 'Browse our complete collection of products',
  openGraph: {
    title: 'All Products',
    description: 'Browse our complete collection of products',
    type: 'website',
  },
};

export default async function page() {

  const products = await getAllWooCommerceProducts(9, 1);

  console.log("All Products:", products);


  return (
    <section className="w-full pt-[100px] mb-[150px] ">
      <nav className="max-w-[700px] mx-auto px-4 flex justify-between w-full py-2 bg-[#ebebeb94] backdrop-blur-[10px] rounded sticky top-[100px] z-50 ">
        <ul className="flex text-sm font-medium justify-between w-full">
            <li>All</li>
            {Array.from({ length: 5 }).map((_, i) => (
              <li key={i}>
                <Link href={`/shop/${i + 1}`}>
                  <>Page {i + 1}</>
                </Link>
              </li>
            ))}
        </ul>
      </nav>
      <div className="max-w-[1380px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] mt-5">
        {products.length > 0 ? products.map((product,i) => (
           <Card key={i} product={product} />)) : <p>No products found.</p>}
      </div>
    </section>
  );
}
