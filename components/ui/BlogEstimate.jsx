import { CalendarDays,Timer } from 'lucide-react';
export default function BlogEstimate() {
  return (
    <div className="flex gap-[5px]">
        <div className="text-sm px-[14px] py-[10px] bg-[#d1d1d199] rounded-sm flex gap-[5px] items-center"><CalendarDays size={18} /> <span className='font-medium'>3/20/25</span></div>
        <div className="text-sm px-[14px] py-[10px] bg-[#d1d1d199] rounded-sm flex gap-[5px] items-center"><Timer size={18}/><span className='font-medium'>7 min</span></div>      
    </div>
  )
}
