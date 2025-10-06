import React from 'react'

export default function layout({children}) {
  return (
    <section className="w-full pt-[150px] mb-[150px] max-w-[1440px] mx-auto px-5">
        {children}
    </section>
  )
}
