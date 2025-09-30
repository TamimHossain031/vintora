'use client'
import BlogEstimate from "@/components/ui/BlogEstimate";
import PageHeader from "@/components/ui/PageHeader";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
export default function page() {
  return (
    <section className="pt-[200px] max-w-[1440px] mx-auto px-5">
      <PageHeader
        title="Fashion Blogs"
        subTitle="Where timeless elegance meets modern sophistication"
      />
      <div className="mb-[150px]">
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-[150px]"
        >
          <Link href={"/"}>
            <div className="p-[10px] rounded bg-[#f0f0f0] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1fr_minmax(0,_524px)] gap-[50px] group">
              <div className="aspect-[786/612] overflow-hidden rounded">
                <figure className="w-full h-full relative group-hover:scale-105 transition-all duration-500">
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
        </motion.div>

        <nav className="max-w-[700px] mx-auto px-4 flex justify-between w-full py-2 bg-[#ebebeb94] backdrop-blur-[10px] rounded sticky top-[100px] z-50 ">
          <h4>Best Saler</h4>
          <Link
            href={"/"}
            className="text-base opacity-50 hover:opacity-100 transition-all duration-300"
          >
            See All
          </Link>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[10px] gap-[10px] min-h-[546px] mt-[10px]">
          <Link href={"/"}>
            <div className="relative w-full max-h-[546px] h-full overflow-hidden group rounded">
              <Image
                src="/hero/1.jpg"
                fill
                alt="hero"
                className="object-cover object-center rounded group-hover:scale-105 transition-all duration-500"
              />

              <div className="absolute bottom-0 left-0 w-full bg-[#f0f0f0] flex flex-col justify-between p-[20px] h-[180px] group-hover:h-[200px] transition-all duration-500">
                <div>
                  <small className="text-sm text-[#969696]">Fashion Tips</small>
                  <h5 className="text-[22px] font-medium leading-[32px] max-w-[300px]">
                    Your go-to destination
                  </h5>
                </div>

                <BlogEstimate />
              </div>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="relative w-full max-h-[546px] h-full overflow-hidden group rounded">
              <Image
                src="/hero/1.jpg"
                fill
                alt="hero"
                className="object-cover object-center rounded group-hover:scale-105 transition-all duration-500"
              />

              <div className="absolute bottom-0 left-0 w-full bg-[#f0f0f0] flex flex-col justify-between p-[20px] h-[180px] group-hover:h-[200px] transition-all duration-500">
                <div>
                  <small className="text-sm text-[#969696]">Fashion Tips</small>
                  <h5 className="text-[22px] font-medium leading-[32px] max-w-[300px]">
                    Your go-to destination
                  </h5>
                </div>

                <BlogEstimate />
              </div>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="relative w-full max-h-[546px] h-full overflow-hidden group rounded">
              <Image
                src="/hero/1.jpg"
                fill
                alt="hero"
                className="object-cover object-center rounded group-hover:scale-105 transition-all duration-500"
              />

              <div className="absolute bottom-0 left-0 w-full bg-[#f0f0f0] flex flex-col justify-between p-[20px] h-[180px] group-hover:h-[200px] transition-all duration-500">
                <div>
                  <small className="text-sm text-[#969696]">Fashion Tips</small>
                  <h5 className="text-[22px] font-medium leading-[32px] max-w-[300px]">
                    Your go-to destination
                  </h5>
                </div>

                <BlogEstimate />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
