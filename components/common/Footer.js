"use client";
import Link from "next/link";
import { data } from "../../data/footer.js";
import { useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
export default function Footer() {
  const ref = useRef(null);

  // Track scroll progress for footer
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"], // when footer enters viewport → fully in view
  });

  // Opacity (fade in)
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Parallax effect (footer moves slower than scroll)
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  return (
    <footer className="bg-[#1a1a1a]">
      <AnimatePresence>
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          ref={ref}
          style={{ opacity, y }}
          className="bg-[#1a1a1a] py-[50px] w-full min-h-[600px] p-[80px 30px 40px] text-[#f8f8f8]"
        >
          <div className="max-w-[1440px]  mx-auto brightness-90 flex flex-col gap-[200px]">
            <div className="flex gap-[10px] flex-col lg:flex-row gap-y-[30px]">
              <div className="max-w-[572px] w-full space-y-5">
                <h3 className="text-[40px]">{data.title}</h3>
                <p className="max-w-[200px]">{data.description}</p>
                <form className="max-w-[300px] space-y-1.5">
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    className="w-full px-3 py-2 bg-white/10 rounded  transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="w-full px-3 py-2 text-sm bg-[#f8f8f8] text-[#1a1a1a] rounded font-medium"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[10px] gap-y-[30px] ">
                <div className="space-y-5">
                  <h3 className="text-sm uppercase brightness-70">
                    {data.menu_1.title}
                  </h3>
                  <ul className="space-y-[10px]  *:block">
                    {data.menu_1.links.map((item, i) => (
                      <li key={i}>
                        <Link href={item.url}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-5">
                  <h3 className="text-sm uppercase brightness-70">
                    {data.menu_2.title}
                  </h3>
                  <ul className="space-y-[10px]  *:block">
                    {data.menu_2.links.map((item, i) => (
                      <li key={i}>
                        <Link href={item.url}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-5">
                  <h3 className="text-sm uppercase brightness-70">
                    {data.menu_3.title}
                  </h3>
                  <ul className="space-y-[10px]  *:block">
                    {data.menu_3.links.map((item, i) => (
                      <li key={i}>
                        <Link href={item.url}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full border-t border-[#f8f8f8]/20 pt-10 flex justify-between text-sm">
              <ul className="flex gap-[10px] *:brightness-80 *:hover:brightness-100 *:transition-all *:duration-300">
                <li>
                  <Link href={"#"}>Instagram</Link>
                </li>
                <li>
                  <Link href={"#"}>Facebook</Link>
                </li>
              </ul>
              <p>© 2025 Véon, All rights reserved</p>
            </div>
          </div>
        </motion.footer>
      </AnimatePresence>
    </footer>
  );
}
