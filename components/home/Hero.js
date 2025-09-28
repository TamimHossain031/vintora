"use client";
import Image from "next/image";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
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

  // 👇 Track scroll position
  const { scrollY } = useScroll();

  // 👇 Create parallax + opacity transforms
  const y = useTransform(scrollY, [0, 500], [0, -150]); // moves background up
  const opacity = useTransform(scrollY, [0, 1000], [1, 0]); // fades out on scroll

  return (
    <AnimatePresence>
      <section className="max-w-full w-full h-dvh overflow-hidden relative bg-[#1a1a1a]">
        <motion.section
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          style={{
            opacity, // fade effect
            backgroundImage: `url(${activeIndex.imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
          className="relative w-full h-full bg-fixed overflow-hidden"
        >
          {/* Overlay content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute bottom-[20px] left-0 w-full text-white z-10 px-3 transition-all duration-300 delay-500 mx-auto"
          >
            <div className="z-10 relative flex justify-between items-end max-w-[1440px] w-full mx-auto">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeInOut", delay: 0.6 }}
                  className="text-[72px] font-medium leading-[72px] mb-15 max-w-[500px] overflow-hidden"
                >
                  For better loading of first image
                </motion.h1>

                {/* Thumbnails */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeInOut", delay: 1 }}
                  className="flex gap-3 items-end overflow-hidden"
                >
                  <div className="h-[25px] w-[50px] overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.h2
                        className=" text-xl"
                        key={activeIndex.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
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
                        whileTap={{ scale: 0.95 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
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
                </motion.div>
              </div>

              {/* Right side text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeInOut", delay: 1 }}
                className="w-[500px] flex flex-col items-start gap-3"
              >
                <h2 className="text-3xl font-bold">{activeIndex.title}</h2>
                <Link
                  href="#"
                  className="primary-btn"
                >
                  Explore More
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>
      </section>
    </AnimatePresence>
  );
}
