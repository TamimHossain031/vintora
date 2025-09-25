'use client'
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
export default function Instagram() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="w-full pt-[150px] text-center mb-[150px]"
    >
      <div className="title">
        <small className="text-[#969696]">Instagram</small>
        <h2>@veonshop</h2>
      </div>
      <Marquee className="mt-[30px]">
        {Array(16)
          .fill()
          .map((_, i) => (
            <div
              className={`w-[220px] bg-red-300 mr-3 rounded-md ${
                i % 2 === 0 ? "h-[330px]" : "h-[261px]"
              }`}
              key={i}
            ></div>
          ))}
      </Marquee>
    </motion.section>
  );
}
