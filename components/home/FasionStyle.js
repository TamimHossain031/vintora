import Image from "next/image";
import Link from "next/link";
import BlogEstimate from "../ui/BlogEstimate";

export default function FasionStyle() {
  return (
    <section className="mt-[150px] container">
      <div className="title text-center">
        <h2>The Véon Edit Fashion Style</h2>
        <p>
          Your go-to destination for trends, tips, and timeless style
          inspiration
        </p>
        <Link href={"/"} className="secondary-btn">
          View All Blogs
        </Link>
      </div>
      <div className="mt-[50px]">
        <Link href={"/"}>
          <div className="p-[10px] rounded bg-[#f0f0f0] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1fr_minmax(0,_524px)] gap-[50px]">
            <div>
              <figure className="aspect-[786/612] relative">
                <Image
                  src="/hero/1.jpg"
                  fill
                  alt="hero"
                  className="object-cover object-center rounded"
                />
              </figure>
            </div>

            <div className="py-[50px] flex flex-col justify-between">
              <div>
                <small className="text-sm text-[#969696]">Fashion Tips</small>
                <h5 className="text-[28px] font-medium leading-[32px] max-w-[300px]">
                  Your go-to destination for trends, tips, and timeless style
                  inspiration
                </h5>   
              </div>
              <BlogEstimate />
            </div>
          </div>
        </Link>

        <div></div>
      </div>
    </section>
  );
}
