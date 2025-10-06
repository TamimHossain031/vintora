import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }) {
  const { slug } = await params;
  const productImage = ["/hero/1.jpg", "/hero/2.jpg", "/hero/3.jpg"];
  
  return (
    <div className="w-full flex gap-[10px]">
      {/* Left scrollable images */}
      <div className="w-1/2 grid gap-[10px] scroll-smooth overflow-y-auto">
        {productImage.map((image, i) => (
          <div
            key={i}
            className="w-full aspect-[685/740] overflow-hidden rounded scroll-mt-[20px]"
            id={`image-${i}`}
          >
            <figure className="w-full h-full relative group-hover:scale-105 transition-all duration-500">
              <Image
                src={image}
                fill
                alt="hero"
                className="object-cover object-center rounded"
              />
            </figure>
          </div>
        ))}
        <div className="flex gap-[10px] sticky bottom-[20px] w-[250px] mx-auto bg-[#ebebeb94] backdrop-blur-[10px] rounded p-2">
          {productImage.map((image, i) => (
            <div
              key={i}
              className="w-full aspect-[56/70] overflow-hidden rounded"
            >
              <Link href={`#image-${i}`}>
                <figure className="w-full h-full relative hover:scale-105 transition-all duration-500">
                  <Image
                    src={image}
                    fill
                    alt="hero"
                    className="object-cover object-center rounded"
                  />
                </figure>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* Right sticky section */}
      <div className="w-1/2 h-fit bg-red-300 sticky top-[150px] p-4">
        <p className="text-xl font-semibold">tamim</p>
      </div>
    </div>
  );
}