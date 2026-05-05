"use client"

import React from "react"

function Header() {
  return (
    <div className="
      fixed top-0 left-75 right-0
      h-14
      bg-slate-50
      border-b border-slate-200
      flex items-center
      px-6 z-10
    ">
      
      <img 
        src="/icons/book_header.svg" 
        alt="book"
        className="w-5 h-5 cursor-pointer"
      />

    </div>
  )
}

export default Header