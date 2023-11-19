"use client";
import Link from "next/link";
import "./Tagbar.css";
import axios from "axios";
import { useEffect, useState } from "react";
const Tagbar = ({ show }: any) => {
  // search Field
  const [search, setSearch] = useState('');

  const [tags, setTags] = useState([]);
  const getData = async () => {
    await axios
      .get(`https://api.memegen.link/templates/`)
      .then((res) => setTags(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div
        className={`bg-black h-screen w-full sm:w-[300px] fixed left-0 top-[82px] text-white 
      px-4 pt-4 pb-20 flex flex-col gap-4 z-50 overflow-scroll  tagBar ${
        show ? `showTagBar` : ""
      }`}
      >
        <div className="relative sm:hidden">
          <button onClick={() => (window.location.href = "/meme/" + search)}>
            <i
              className="fa-solid fa-magnifying-glass text-[22px] absolute right-[10px] top-[10%] text-[#999999] 
      cursor-pointer hover:bg-[#666666] hover:text-white p-2 rounded-[50%] transition delay-75 ease-in-out "
            ></i>
          </button>
          <input
            className="bg-[#333333] py-3 px-12 rounded-lg placeholder:text-[#666666] text-[#666666] outline-none border-none "
            type="text"
            placeholder="Search..."
            defaultValue={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <Link href={"/meme"}>
          <h1 className="font-bold tagsHover">
            <i className="fa-solid fa-house"></i> Home
          </h1>
        </Link>
        <span className="pl-4 text-[#666666] font-bold ">Interests</span>
        {/* tags memes */}
        <div className="flex flex-col">
          {tags.length > 0 &&
            tags.map((el: any, i: number) => (
              <div key={i}>
                {el.overlays > 0 && (
                  <>
                    <Link href={`/meme/${el.id}`}>
                      <div className="flex items-center justify-between tagsHover">
                        <p>{el.id}</p>
                        <i className="fa-solid fa-thumbtack"></i>
                      </div>
                    </Link>
                  </>
                )}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Tagbar;
