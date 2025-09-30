
import Instagram from "@/components/home/Instagram";
import ShopWithUs from "@/components/home/ShopWithUs";

export default function layout({children}) {
  return (
    <>
    {children}
    <ShopWithUs/>
    <Instagram/>  
    </>
  )
}
