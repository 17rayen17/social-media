"use client";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

const Cards = () => {
  const [data, setData] = useState<any>([]);
  const getData = async () => {
    await axios
      .get<any>(`https://api.memegen.link/templates/`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="absolute top-[90px] left-[50%] translate-x-[-50%]">
        {data.length > 0 &&
          data.map((el: any, i: number) => (
            <div key={i}>
              <div className="bg-black text-white mt-4 w-[300px] md:w-[600px]  overflow-hidden border-[#434343] border-[1px] rounded-lg shadow-xl">
                <Link href={`/meme/${el.id}`}>
                  <div className="flex justify-start items-center gap-4 my-4 mx-2">
                    <Image
                    src={el.blank}
                    alt="image"
                    width={1000}
                    height={100}
                    className="rounded-[50%] w-[60px] h-[60px] bg-contain border-[#434343] border-[1px]"
                    />
                    <h1 className="font-bold">{el.id}</h1>
                  </div>
                </Link>
                <div>
                  <p className="pl-4 mb-4">{el.name}</p>
                  <div className="overflow-hidden">
                  <Image
                    src={el.blank}
                    alt="image"
                    width={1000}
                    height={100}
                    className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Cards;
