
import Link from 'next/link';
import {data} from '../../data/footer.js'
export default function Footer() {
    console.log(data)
  return (
    <footer className="bg-[#1a1a1a] py-[50px] w-full min-h-[600px] p-[80px 30px 40px] text-[#f8f8f8]">
      <div className="max-w-[1440px]  mx-auto brightness-90 ">
        <div className="flex gap-[10px] flex-col lg:flex-row gap-y-[30px]">
          <div className="max-w-[572px] w-full space-y-5">
            <h3 className="text-[40px]">{data.title}</h3>
            <p className="max-w-[200px]">
             {data.description}
            </p>
            <form className="max-w-[300px] space-y-1.5">
              <input
                type="text"
                placeholder="Enter your email address"
                className="w-full px-3 py-2 bg-white/10 rounded  transition-all duration-300"
              />
              <button
                type="submit"
                className="w-full px-3 py-2 text-sm bg-[#f8f8f8] text-[#1a1a1a] rounded font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[10px] gap-y-[30px] ">
            <div className="space-y-5">
              <h3 className="text-sm uppercase brightness-70">{data.menu_1.title}</h3>
              <ul className="space-y-[10px]  *:block">
                {data.menu_1.links.map((item, i) => (
                  <Link key={i} href={item.url}>{item.name}</Link>
                ))}                
              </ul>
            </div>

            <div className="space-y-5">
              <h3 className="text-sm uppercase brightness-70">{data.menu_2.title}</h3>
              <ul className="space-y-[10px]  *:block">
                {data.menu_2.links.map((item, i) => (
                  <Link key={i} href={item.url}>{item.name}</Link>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <h3 className="text-sm uppercase brightness-70">{data.menu_3.title}</h3>
              <ul className="space-y-[10px]  *:block">
                {data.menu_3.links.map((item, i) => (
                 <Link key={i} href={item.url}>{item.name}</Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
