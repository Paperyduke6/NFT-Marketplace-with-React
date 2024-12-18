import * as React from "react";
import MarketplaceHeader from "./MarketplaceHeader";
import CollectionCard from "./CollectionCard";

const collections = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/33a8d7455f02e06e1b2c45944eaa9560c0d425c3ce26d9d6035274d66ae98a04?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051",
    title: "Night Sky",
    nftCount: "120",
    priceRange: "0.12BTC - 0.18BTC",
    description: "Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor...",
    authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/7788b333bc8685ea23015193b53562eec94c08fda0471e2a81f4d63c17b9d7c9?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051",
    authorName: "Léa Jacquot"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/515994db98950a41cf6a8f96f787dd9968b5917c85acdc0ec31ec9571094631c?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051",
    title: "Future",
    nftCount: "120",
    priceRange: "0.12BTC - 0.18BTC",
    description: "Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor...",
    authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/31570aa121bf28277d05116b1aa7d8a100356b48e463d737b3a825038c99d30b?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051",
    authorName: "Julien"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d1c661e581c90458348436024656a1f720c632d30dac0d5c9ae8082232052e2d?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051",
    title: "Mother nature",
    nftCount: "120",
    priceRange: "0.12BTC - 0.18BTC",
    description: "Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor...",
    authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/288e2de7ef234d61124d556d8a0e7a28bed3cc68551089ff2975752f20e7ef01?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051",
    authorName: "Maria"
  }
];

export default function HomeMarketplace() {
  return (
    <div className="flex overflow-hidden flex-col pt-8 bg-neutral-50">
      <div className="flex flex-col px-20 w-full max-md:px-5 max-md:max-w-full">
        <MarketplaceHeader />
        <div className="flex flex-wrap gap-8 self-center mt-14 w-full max-w-[1304px] max-md:mt-10 max-md:max-w-full">
          <div className="flex shrink-0 w-48 h-3.5 rounded-lg bg-zinc-800" />
          <div className="flex flex-col flex-1 justify-center items-start py-px rounded-lg bg-slate-200">
            <div className="flex z-10 shrink-0 h-3.5 rounded-lg bg-zinc-800 w-[46px]" />
          </div>
          <div className="flex shrink-0 h-3.5 rounded-lg bg-slate-200 w-[190px]" />
          <div className="flex shrink-0 h-3.5 rounded-lg bg-slate-200 w-[190px]" />
          <div className="flex shrink-0 h-3.5 rounded-lg bg-slate-200 w-[190px]" />
          <div className="flex shrink-0 w-48 h-3.5 rounded-lg bg-slate-200" />
        </div>
        <div className="px-20 py-14 mt-4 bg-slate-200 rounded-[30px] max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
                <div className="gap-2.5 self-stretch px-9 py-2.5 text-xs font-medium bg-red-100 rounded-[49px] text-zinc-800 max-md:px-5">
                  Trending Now
                </div>
                <div className="mt-16 text-6xl font-extrabold text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                  With the stars
                </div>
                <div className="flex gap-4 mt-3.5 text-2xl text-zinc-800">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c513d13332548b2d38543190fde066bd6c5a56e30207b44d7e6b512b89ed75ec?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051"
                    alt="Léa Jacquot profile"
                    className="object-contain shrink-0 aspect-square rounded-[43px] w-[68px]"
                  />
                  <div className="my-auto basis-auto">Léa Jacquot</div>
                </div>
                <div className="flex flex-wrap gap-5 self-stretch mt-11 w-full text-base font-semibold max-md:mt-10 max-md:max-w-full">
                  <button className="gap-4 self-stretch p-6 whitespace-nowrap bg-zinc-800 rounded-[87px] text-neutral-50 max-md:px-5">
                    Buy
                  </button>
                  <button className="gap-4 self-stretch p-6 border border-solid border-zinc-800 rounded-[87px] text-zinc-800 max-md:px-5">
                    See collection
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a848bee046761fd1aa2765e2d3092dec06cab7af6491c229d175e4f1716ce893?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051"
                alt="Featured artwork"
                className="object-contain grow w-full aspect-[1.06] rounded-[52px] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="self-start mt-32 text-2xl font-extrabold text-black max-md:mt-10">
          Collections
        </div>
        <div className="mt-10 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {collections.map((collection, index) => (
              <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <CollectionCard {...collection} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 justify-between px-12 py-9 mt-40 w-full bg-slate-200 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/216904dd5f87311cee4d4cfefdd2ac104757eb441b7c333890d46bbd45af41fe?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051"
          alt=""
          className="object-contain shrink-0 w-44 max-w-full aspect-[6.54]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3da677de77b2eaaefe6a4a5461a08d63fabbd7930287657c3e06fa8c0c228f9e?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051"
          alt=""
          className="object-contain shrink-0 self-start max-w-full aspect-[8.06] w-[210px]"
        />
      </div>
    </div>
  );
}