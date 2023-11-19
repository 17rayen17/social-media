"use client";
import { useState } from "react";
import Tagbar from "./tagbar/Tagbar";
import Link from "next/link";

const Navbar = () => {
  const [showTagBar, setShowTagBar] = useState(false);
  const [search, setSearch] = useState('');
  return (
    <>
      <nav
        className="w-full h-[82px] bg-black py-4 px-6 shadow-md text-white 
    flex justify-between items-center border-b-[#333333] border-[1px] border-transparent fixed top-0 z-[9999]"
      >
        <div className="flex items-center gap-6">
          <button onClick={() => setShowTagBar(!showTagBar)}>
            <i className="fa-solid fa-bars text-[20px] "></i>
          </button>
          <Link href={"/"}>
          <h1 className="font-bold text-[25px] whitespace-nowrap">
            SO<span className="text-orange-500"> M3ME </span>
          </h1>
          </Link>
          
        </div>
        <div className="relative hidden sm:block">
          <button onClick={()=>window.location.href = "/meme/" + search}>
            <i
              className="fa-solid fa-magnifying-glass absolute left-[10px] top-[50%] translate-y-[-50%] text-[#999999] 
      cursor-pointer hover:bg-[#666666] hover:text-white p-2 rounded-[50%] transition delay-75 ease-in-out "
            ></i>
          </button>
          <input
            className="bg-[#333333] py-3 pl-12 rounded-lg placeholder:text-[#666666] text-[#666666] outline-none border-none "
            type="text"
            placeholder="Search..."
            defaultValue={search}
            onChange={(e)=>{setSearch(e.target.value)}}
          />
        </div>
      </nav>
      <Tagbar show={showTagBar} />
    </>
  );
};

export default Navbar;
