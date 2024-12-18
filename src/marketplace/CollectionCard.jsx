import * as React from "react";

export function CollectionCard({ collection }) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col h-full bg-neutral-50 rounded-[47px] shadow-[0px_4px_63px_rgba(0,0,0,0.08)] overflow-hidden">
        <div className="relative w-full pt-[56.25%]">
          <img
            loading="lazy"
            src={collection.image}
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt={collection.title}
          />
        </div>
        <div className="flex flex-col p-4">
          <div className="flex gap-5 justify-between items-center">
            <h3 className="text-2xl font-bold text-black">
              {collection.title}
            </h3>
            <div className="px-9 py-2.5 text-xs font-medium bg-stone-200 rounded-[49px] text-zinc-800">
              {collection.nftCount}
            </div>
          </div>
          <div className="mt-7 text-sm text-slate-500">
            Price Range : {collection.priceRange}
          </div>
          <p className="mt-2.5 text-base leading-6 text-zinc-800">
            {collection.description}
          </p>
          <div className="flex gap-4 mt-12 items-center">
            <img
              loading="lazy"
              src={collection.artist.avatar}
              className="w-10 h-10 rounded-[43px] object-cover"
              alt={collection.artist.name}
            />
            <span className="text-base text-zinc-800">
              {collection.artist.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
