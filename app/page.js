import Image from "next/image";
import Hero from "@/components/home/Hero";
import BestSale from "@/components/home/BestSale";
import About from "@/components/home/About";
export default function Home() {
  return (
 <div>
    <Hero />
    <BestSale />
    <About />
 </div>
  );
}
