import { Minus, Plus } from "lucide-react";
import Button from "../ui/Button";

export default function ProductDesc() {
  return (
    <div className="w-1/2 bg-[#f0f0f0] rounded h-fit sticky top-[150px] p-5">
        <h2>Product Name</h2>
        <h5>$120</h5>
        <div className="border-t-[1px] border-[#d1d1d1] py-5">
            <Button button_type="primary">Buy Now</Button>
        </div>
        <div className="border-t-[1px] border-[#d1d1d1] py-5">
          <div>
            <ul className="flex gap-[20px] items-center text-[#ADADAD] text-xl font-medium">
              <li>Description</li>
              <li>Features</li>
              <li>Size</li>
            </ul>
          </div>
        </div>
        <div className="border-t-[1px] border-[#d1d1d1] py-5 flex items-center gap-5">
          <div className="flex gap-[10px] items-center bg-[#e3e3e3] rounded p-1 w-fit">
            <Button button_type="tertiary" disabled={true}><Minus size={15} /></Button>
            <span>01</span>
            <Button button_type="tertiary"> <Plus size={15}/></Button>
          </div>
          <Button button_type="primary" className="">Add to Cart</Button>
        </div>        
    </div>
  )
}
