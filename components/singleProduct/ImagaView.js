"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useCallback, useState } from "react";
import { motion } from "framer-motion";
export default function ImagaView({ productImages }) {
  const [currentImage, setCurrentImage] = useState(0);
  const handleScroll = useCallback((e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const yOffset = -150; // offset for sticky header if any
      const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
      className="w-1/2 grid gap-[10px] relative"
    >
      {productImages.map((image, i) => (
        <div
          key={i}
          className="w-full aspect-[685/740] overflow-hidden rounded scroll-mt-[150px]"
          id={`image-${i}`}
        >
          <figure className="w-full h-full relative group-hover:scale-105 transition-all duration-500">
            <Image
              src={image.src}
              fill
              alt="hero"
              className="object-cover object-center rounded"
            />
          </figure>
        </div>
      ))}

      {/* Thumbnails */}
      <div className="flex gap-[10px] sticky bottom-[20px] w-[250px] mx-auto bg-[#ebebeb94] backdrop-blur-[10px] rounded p-2">
        {productImages.map((image, i) => (
          <div
            key={i}
            className={`w-full aspect-[56/70] overflow-hidden rounded p-[2px] ${
              currentImage === i ? "border-1 border-gray-200" : ""
            }`}
            onClick={() => setCurrentImage(i)}
          >
            <Link
              href={`#image-${i}`}
              onClick={(e) => handleScroll(e, `image-${i}`)}
            >
              <figure className="w-full h-full relative hover:scale-105 transition-all duration-500">
                <Image
                  src={image.src}
                  fill
                  alt="hero"
                  className="object-cover object-center rounded"
                />
              </figure>
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
