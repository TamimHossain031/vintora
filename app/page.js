import Image from "next/image";
import Hero from "@/components/home/Hero";
import BestSale from "@/components/home/BestSale";
import About from "@/components/home/About";
import New from "@/components/home/New";
import DiscoverCollection from "@/components/home/DiscoverCollection";
export default function Home() {
  return (
 <div>
    <Hero />
    <BestSale />
    <About />
    <New />
    <DiscoverCollection />
 </div>
  );
}
