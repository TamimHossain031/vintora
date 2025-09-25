"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
export default function Card() {
  return (
    <AnimatePresence>
      <Link href={"/"}>
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full min-h-[300px] pb-[10px]"
        >
          <figure className="rounded aspect-square relative overflow-hidden bg-[#f0f0f0]">
            <Image
              src="/hero/1.jpg"
              fill={true}
              alt="hero"
              className="object-cover object-center"
            />
          </figure>
          <figcaption className="mt-2">
            <p className="text-sm font-medium">This is nayem product hola</p>
            <h5 className="text-base font-medium">$100</h5>
          </figcaption>
        </motion.div>
      </Link>
    </AnimatePresence>
  );
}
