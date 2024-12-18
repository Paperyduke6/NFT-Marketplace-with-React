import * as React from "react";

export default function NFTCard({ image, title, price }) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col px-4 pt-4 pb-14 mx-auto w-full bg-neutral-50 rounded-[47px] shadow-[0px_4px_63px_rgba(0,0,0,0.08)] max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src={image}
          alt={`NFT artwork titled ${title}`}
          className="object-contain w-full rounded-none aspect-[1.13]"
        />
        <div className="flex gap-5 justify-between mt-11 w-full max-md:mt-10 max-md:mr-1.5">
          <div className="text-2xl font-bold text-black">{title}</div>
          <div className="gap-2.5 self-stretch px-9 py-2.5 text-xs font-medium bg-slate-300 rounded-[49px] text-zinc-800 max-md:px-5">
            {price} BTC
          </div>
        </div>
      </div>
    </div>
  );
}
