"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const heroData = [
  {
    id: "01",
    title: "Welcome to Vintora",
    description:
      "Discover the world of vintage fashion with Vintora. Explore our curated collection of timeless pieces that blend classic style with modern trends.",
    imageUrl: "/hero/1.jpg",
  },
  {
    id: "02",
    title: "Sustainable Style",
    description:
      "At Vintora, we believe in sustainable fashion. Our vintage clothing not only offers unique style but also promotes eco-friendly choices by giving new life to pre-loved garments.",
    imageUrl: "/hero/2.jpg",
  },
  {
    id: "03",
    title: "Join the Vintora Community",
    description:
      "Become a part of our vibrant community of vintage enthusiasts. Share your style, get inspired, and connect with others who appreciate the charm of vintage fashion.",
    imageUrl: "/hero/3.jpg",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(heroData[0]);

  return (
    <section className="max-w-full w-full h-dvh relative  overflow-hidden">
      {/* Main Hero Image with Smooth Transition */}
      <div className="relative w-full h-full">
        <AnimatePresence>
          <motion.div
            key={activeIndex.id} // Important: unique key for each image
            initial={{ opacity: 0, scale: 1.2 }} // Start slightly zoomed out
            animate={{ opacity: 0.8, scale: 1 }} // End with normal scale
            exit={{ opacity: 0, scale: 1 }} // Exit smoothly
            transition={{
              duration: 0.7, // Adjust timing (0.5s - 1s recommended)
              ease: "easeInOut", // Smooth easing
            }}
            className="absolute inset-0"
          >
            <Image
              src={activeIndex.imageUrl}
              alt={`Hero Image - ${activeIndex.title}`}
              fill
              style={{ objectFit: "cover" }}
              priority // For better loading of first image
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnail Navigation */}
      <div className="absolute bottom-[20px] max-w-[1300px] w-full text-white z-10 px-25">
        <div className="z-10 relative flex justify-between">
          <div className="">
            <h1>For better loading of first image</h1>
            <div className="flex gap-3 items-end overflow-hidden">
              <div className="h-[20px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.h2
                    className=" h-[20px]"
                    key={activeIndex.id} // Important: unique key for each number
                    initial={{ opacity: 0, y: 10 }} // Start from bottom
                    animate={{ opacity: 1, y: 0 }} // Move to top
                    exit={{ opacity: 0, y: -10 }} // Exit upward
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    {activeIndex.id}
                  </motion.h2>
                </AnimatePresence>
              </div>

              <div className="flex gap-3">
                {heroData.map((item, index) => (
                  <motion.figure
                    key={index}
                    className={`w-[100px] h-[80px] cursor-pointer relative overflow-hidden rounded-md border-2 transition-all duration-300 ${
                      activeIndex.title === item.title
                        ? "border-white"
                        : "border-white/50"
                    }`}
                    onMouseEnter={() => setActiveIndex(item)}
                    // whileHover={{

                    // }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Image
                      src={item.imageUrl}
                      alt={`Thumbnail - ${item.title}`}
                      fill
                      style={{ objectFit: "cover" }}
                      className={`transition-all duration-300 ${
                        activeIndex.title === item.title ? " scale-105" : ""
                      }`}
                    />
                  </motion.figure>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[300px] flex flex-col items-start gap-3">
            <h2 className="text-3xl font-bold">{activeIndex.title}</h2>
            <Link
              href="#"
              className="text-sm bg-neutral-950 text-white py-2 px-4 rounded-md"
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
