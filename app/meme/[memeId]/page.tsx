import axios from "axios";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";

const memeDetail = async ({ params }: Params) => {
  // console.log(params)
  const memeId = params.memeId;
  const data = await axios.get<any>(
    `https://api.memegen.link/templates/${memeId}`
  );
  return (
    <div className="absolute top-[90px] left-[50%] translate-x-[-50%]">
      <div className="bg-black text-white mt-4 w-[300px] md:w-[600px]   overflow-hidden border-[#434343] border-[1px] rounded-lg shadow-xl mb-4">
        <div className="flex justify-start items-center gap-4 my-4 mx-2">
          <Image
            src={data.data.blank}
            alt="image"
            width={1000}
            height={100}
            className="rounded-[50%] w-[60px] h-[60px] bg-contain border-[#434343] border-[1px]"
          />
          <h1 className="font-bold">{data.data.name}</h1>
        </div>
        <div>
          <p className="pl-4 mb-4">{data.data.name}</p>
          <div className="overflow-hidden">
            <Image
              src={data.data.blank}
              alt="image"
              width={1000}
              height={100}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memeDetail;
