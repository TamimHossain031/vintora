import { Minus, Plus } from "lucide-react";
import Button from "../ui/Button";

export default function ProductDesc({ product }) {
  const { attributes } = product;


  // Handle attribute selection
  const handleAttributeChange = (attributeName, optionId) => {
    // setSelectedAttributes(prev => ({
    //   ...prev,
    //   [attributeName]: optionId
    // }));
  };

  const formatAttributeName = (name) => {
    return name
      .replace("pa_", "")
      .replace(/_/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Convert attributes object to array for easier mapping
  const attributesArray = Object.entries(attributes || {});

  return (
    <div className="w-1/2 bg-[#f0f0f0] rounded h-fit sticky top-[150px] p-5 space-y-4">
      <div className="font-semibold">
        <h2 className="text-[22px]">{product.name}</h2>
        <h5 className="text-[20px]">{product.price} ৳</h5>
      </div>

      {attributesArray.length > 0 && (
        <div className="border-t-[1px] border-[#d1d1d1] py-5">
          {attributesArray.map(([attrName, attrOptions]) => (
            <div key={attrName} className="mb-4">
              <h4 className="mb-2">{formatAttributeName(attrName)}</h4>
              <div className="flex gap-3">
                {attrOptions?.options.map((option) => (
                  <button
                    key={option.id}
                    // onClick={() => handleAttributeChange(attrName, option.id)}
                    className="px-3 py-1 border rounded bg-white cursor-pointer"
                  >
                    {option.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

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
          <Button button_type="tertiary" disabled={true}>
            <Minus size={15} />
          </Button>
          <span>01</span>
          <Button button_type="tertiary">
            {" "}
            <Plus size={15} />
          </Button>
        </div>
        <Button button_type="primary" className="">
          Add to Cart
        </Button>
        <Button button_type="primary">Buy Now</Button>
      </div>
    </div>
  );
}
