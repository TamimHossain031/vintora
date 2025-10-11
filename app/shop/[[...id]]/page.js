// app/shop/[[...id]]/page.js
import Card from "@/components/ui/Card";
import Link from "next/link";
import {getAllWooCommerceProducts, getProductCategories,getProductsByCategory} from "@/api/apiFetch";

export const metadata = {
  title: 'All Products',
  description: 'Browse our complete collection of products',
  openGraph: {
    title: 'All Products',
    description: 'Browse our complete collection of products',
    type: 'website',
  },
};

export default async function page({params}) {

const resolvedParams = await params;

const categoryId = resolvedParams.id?.[1] || null;



  // Fetch products based on category
  const products = categoryId ? await getProductsByCategory(categoryId) : await getAllWooCommerceProducts(10, 1);
    
  const categories = await getProductCategories();
  const filteredCategories = categories.categories.filter(cat => cat.name !== 'All');

  return (
    <section className="w-full pt-[100px] mb-[150px] ">
      <nav className="max-w-[700px] mx-auto px-4 flex justify-between w-full py-2 bg-[#ebebeb94] backdrop-blur-[10px] rounded sticky top-[100px] z-50 ">
        <Link 
          href="/shop"
          className={!categoryId ? 'font-bold' : 'hover:underline'}
        >
          All
        </Link>
        <ul className="flex text-sm font-medium justify-end gap-5 w-full">
          {filteredCategories.map((cat, i) => (
            <li key={i}>
              <Link 
                href={`/shop/category/${cat.id}`}
                className={categoryId === cat.id.toString() ? 'font-bold' : 'hover:underline'}
              >
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="max-w-[1380px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] mt-5">
        {products.length > 0 ? (
          products.map((product, i) => <Card key={i} product={product} />)
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </section>
  );
}

