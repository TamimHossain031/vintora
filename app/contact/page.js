'use client'
import PageHeader from "@/components/ui/PageHeader";
import Image from "next/image";
import { motion } from "framer-motion";

export default function page() {
  return (
    <section className="w-full pt-[200px]">
      <PageHeader
        title="Fashion Blogs"
        subTitle="Where timeless elegance meets modern sophistication"
      />
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="max-w-[1440px] w-full mx-auto px-[30px] flex gap-[30px] min-h-[836px]">
        <figure className=" overflow-hidden rounded relative min-h-[836px] w-full border">
            <Image
              src="/hero/1.jpg"
              fill
              alt="hero"
              className="object-cover object-center rounded"
            />
        </figure>
        <div className="w-full h-full ">
            
        </div>
      </motion.div>
    </section>
  );
}
