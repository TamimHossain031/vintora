import Link from "next/link";

export default function SocialLinks({links}) {

  return (
    <div className=" gap-[10px] items-center mt-[30px] flex">
        {
            links.map((link, i) => (
                <Link className="text-sm px-[14px] py-[10px] bg-[#d1d1d199] rounded-sm transition duration-300" href={link.link} key={i}>{link.label}</Link>
            ))
        }

    </div>
    
  )
}
