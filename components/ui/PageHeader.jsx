"use client";
import { motion } from "framer-motion";
export default function PageHeader({ title, subTitle }) {
  const text = title.split(" ");
  return (
    <div className="flex flex-col items-center mb-[50px]">
      <div className="flex text-[72px] font-medium leading-[80px] ">
        {text.map((word, i) => (
          <motion.h1
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {word}&nbsp;
          </motion.h1>
        ))}
      </div>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}  transition={{ duration: 0.5, delay: 0.3 }}>
        {subTitle}
      </motion.p>
    </div>
  );
}
