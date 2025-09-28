import Instagram from "@/components/home/Instagram";
import ShopWithUs from "@/components/home/ShopWithUs";
import SocialLinks from "@/components/ui/SocialLinks";
import StickyScroll from "@/components/ui/StickyScroll";
import Image from "next/image";
import Link from "next/link";
const links = [
  {
    link: "https://www.facebook.com/",
    label: "Facebook",
  },

  {
    link: "https://www.twitter.com/",
    label: "Twitter (X)",
  },
];
export default function page() {
  return (
    <section className="pt-[200px] ">
      <h1 className="text-[72px] text-center">About Véon</h1>
      <p className="text-center">
        Where timeless elegance meets modern sophistication
      </p>
      <figure className="aspect-[1380/786] mx-auto relative max-w-[1380px] rounded-lg overflow-hidden">
        <Image
          src="/hero/1.jpg"
          fill
          alt="hero"
          className="object-cover object-center"
        />
      </figure>

      <h3 className="text-[28px] max-w-[700px] w-full mx-auto pt-[150px] pb-[30px]">
        Véon is more than just fashion—it’s a statement of timeless elegance and
        modern sophistication. Rooted in impeccable craftsmanship and refined
        aesthetics, we create pieces that blend effortless style with lasting
        quality. Our designs embrace minimalism with purpose, ensuring every
        garment is versatile, empowering, and made to stand the test of time.
      </h3>

      <div className="text-center">
        <Link href={"/shop"} className="secondary-btn">
          Shop Clothes Now
        </Link>
      </div>

     
        {/* <StickyScroll />
  */}

      <div className="px-[30px] py-[150px] bg-[#f0f0f0] mt-[150px]">
        <div className="title text-center">
          <h2>Meet the Visionaries Behind Véon</h2>
          <p>
            Driven by creativity and excellence, our leaders shape Véon’s
            journey toward timeless elegance and modern sophistication.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[10px] gap-[10px]">
          {Array(6)
            .fill()
            .map((_, i) => (
              <div key={i}>
                <div className="relative w-full min-h-[634px] h-full overflow-hidden group rounded">
                  <Image
                    src="/hero/1.jpg"
                    fill
                    alt="hero"
                    className="object-cover object-center rounded group-hover:scale-105 transition-all duration-500"
                  />

                  <div className="absolute bottom-0 left-0 w-full bg-[#fff] flex flex-col justify-between p-[20px] h-[100px] group-hover:h-[200px] transition-all duration-500">
                    <div>
                      <h5 className="text-[18px] font-medium leading-[32px] max-w-[300px]">
                        Elena Rossi
                      </h5>
                      <small className="text-sm text-[#969696]">
                        Chief Design Officer
                      </small>
                      <SocialLinks links={links} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <ShopWithUs />

      <Instagram />
    </section>
  );
}
