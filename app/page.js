import Image from "next/image";
import Hero from "@/components/home/Hero";
import BestSale from "@/components/home/BestSale";
import About from "@/components/home/About";
import New from "@/components/home/New";
import DiscoverCollection from "@/components/home/DiscoverCollection";
import CustomerSay from "@/components/home/CustomerSay";
import FasionStyle from "@/components/home/FasionStyle";
import ShopWithUs from "@/components/home/ShopWithUs";
import Instagram from "@/components/home/Instagram";
import Footer from "@/components/common/Footer";
export default function Home() {
  return (
 <div>
    <Hero />
    <BestSale />
    <About />
    <New />
    <DiscoverCollection />
    <CustomerSay />
    <FasionStyle />
    <ShopWithUs />
    <Instagram />   
 </div>
  );
}
