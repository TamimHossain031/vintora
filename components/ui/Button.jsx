import React from 'react'

export default function Button({children,className,button_type,...props}) {
    const btn_styles = {
        primary:'bg-[#33383c] text-white py-2 px-4 rounded text-sm hover:bg-white hover:text-[#33383c] border border-[#33383c] transition',
        secondary:'bg-white text-[#33383c] py-2 px-4 rounded text-sm hover:bg-[#33383c] hover:text-white border border-[#33383c] transition',
        tertiary:'bg-white text-[#33383c] size-[30px] grid place-content-center rounded text-sm hover:bg-[#33383c] hover:text-white transition disabled:bg-white disabled:text-gray-400 disabled:cursor-not-allowed'
    }
  return (
    <button className={`cursor-pointer ${btn_styles[button_type]} ${className}`} {...props}>{children}</button>
  )
}
