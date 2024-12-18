import React from "react";

export function CollectionCard({
  title,
  image,
  nftCount,
  priceRange,
  description,
  artist,
}) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col px-4 pt-4 pb-8 w-full h-full bg-neutral-50 rounded-[47px] shadow-[0px_4px_66px_rgba(0,0,0,0.16)] max-md:max-w-full">
          <div className="flex relative flex-col justify-center px-16 py-20 w-full text-base font-semibold rounded-none aspect-[1.722] text-zinc-800 max-md:px-5">
            <img
              loading="lazy"
              src={image}
              className="object-cover absolute inset-0 size-full"
              alt={title}
            />
            <button className="relative gap-4 self-stretch p-6 bg-neutral-50 rounded-[87px] max-md:px-5 hover:bg-zinc-100 transition-colors">
              Go to collection --&gt;
            </button>
          </div>
          <div className="flex gap-5 justify-between self-center mt-10 max-w-full w-[369px]">
            <div className="text-2xl font-bold text-black">{title}</div>
            <div className="gap-2.5 self-stretch px-9 py-2.5 text-xs font-medium bg-stone-200 rounded-[49px] text-zinc-800 max-md:px-5">
              {nftCount}
            </div>
          </div>
          <div className="self-start mt-7 ml-3.5 text-sm text-slate-500 max-md:ml-2.5">
            Price Range : {priceRange}
          </div>
          <div className="mt-2.5 mr-4 ml-3.5 text-base leading-6 text-zinc-800 max-md:mx-2.5">
            {description}
          </div>
          <div className="flex gap-4 self-start mt-12 ml-3.5 text-base text-zinc-800 max-md:mt-10 max-md:ml-2.5">
            <img
              loading="lazy"
              src={artist.image}
              className="object-contain shrink-0 w-10 aspect-square rounded-[43px]"
              alt={artist.name}
            />
            <div className="self-start mt-4">{artist.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
