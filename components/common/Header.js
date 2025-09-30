import React from "react";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <>
      <div className="max-w-[740px] px-5 w-full mx-auto z-100 fixed top-0 left-1/2 transform -translate-x-1/2 pt-4 ">
        <marquee className="w-full py-1 text-sm bg-[#ebebeb94] backdrop-blur-[10px] rounded">
          Vintora <span className="px-10"></span> official website{" "}
        </marquee>
        <Navigation />
      </div>
    </>
  );
}
