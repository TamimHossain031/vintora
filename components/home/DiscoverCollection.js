import Link from "next/link";

export default function DiscoverCollection() {
  return (
    <section className="container space-y-[10px]">
      <div className="flex gap-[10px] h-[788px]">
        <div className="bg-[#f0f0f0] w-full rounded grid place-content-center ">
          <div className="text-center max-w-[350px] w-full">
            <small>New in Dresses</small>
            <h2 className="text-[40px] font-medium">Elevate Your Style</h2>
            <p className="text-[#969696]">
              Discover sophisticated silhouettes and luxurious fabrics, designed
              for timeless style
            </p>
            <Link
              href={"/"}
              className="text-sm font-medium px-5 py-[12px] bg-[#d1d1d199] backdrop-blur-[10px] inline-block rounded mt-4"
            >
              Discover Collection
            </Link>
          </div>
        </div>
        <div
          className="bg-[#f0f0f0] w-full rounded bg-cover bg-center"
          style={{ backgroundImage: "url('/hero/1.jpg')" }}
        ></div>
      </div>
      <div className="flex gap-[10px] h-[788px]">
        <div
          className="bg-[#f0f0f0] w-full rounded bg-cover bg-center"
          style={{ backgroundImage: "url('/hero/1.jpg')" }}
        ></div>
        <div className="bg-[#f0f0f0] w-full rounded grid place-content-center ">
          <div className="text-center max-w-[350px] w-full">
            <small>New in Dresses</small>
            <h2 className="text-[40px] font-medium">Elevate Your Style</h2>
            <p className="text-[#969696]">
              Discover sophisticated silhouettes and luxurious fabrics, designed
              for timeless style
            </p>
            <Link
              href={"/"}
              className="text-sm font-medium px-5 py-[12px] bg-[#d1d1d199] backdrop-blur-[10px] inline-block rounded mt-4"
            >
              Discover Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
