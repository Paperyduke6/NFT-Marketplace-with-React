import * as React from "react";
import NFTCard from "./NFTCard";
import MarketplaceHeader from "./MarketplaceHeader";

const nftData = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5c5db9e480fa80483af5e441e85d8b13bc14eb876743d0963581772de9196fbc?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051",
    title: "Night is coming",
    price: "0.12",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/211cc1a7a80d7718bbf5472894d3a2a8a07c7e75df2ece67c7c53b58a1a11411?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051",
    title: "With the stars",
    price: "0.12",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f2921a6b90b6d58a84e3f0725cbe4d8f6d04c0465d330878e7cc7bf3a3e5de57?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051",
    title: "Summer",
    price: "0.12",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/435cb89bd375f8191148fdf7137fc7f6bf950f86547d584322c09e14dd1bf0c3?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051",
    title: "Quiet",
    price: "0.14",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4cdbf5d5e10e5b8aafe02e86fd9bdcd76a565e30a27346eca7ace7c4977b479e?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051",
    title: "Travel",
    price: "0.12",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ea3071748673d7ce0352d45e42139cc7cc694457b9d818c2f1a2a2e43e264825?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051",
    title: "The rain",
    price: "0.18",
  },
];

export default function Marketplace() {
  return (
    <div className="flex overflow-hidden flex-col pt-8 bg-neutral-50">
      <div className="flex flex-col px-20 w-full max-md:px-5 max-md:max-w-full">
        <MarketplaceHeader />
        <div className="self-center mt-32 w-full max-w-[1191px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start w-full text-zinc-800 max-md:mt-10 max-md:max-w-full">
                <div className="gap-2.5 self-stretch px-9 py-2.5 text-xs font-medium bg-red-100 rounded-[49px] max-md:px-5">
                  Trending Now
                </div>
                <div className="mt-16 text-6xl font-extrabold text-black max-md:mt-10 max-md:text-4xl">
                  Night Sky
                </div>
                <div className="self-stretch mt-6 text-base leading-9 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adicing elit, sed do
                  eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing
                  elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet,
                  consectetur adicing elit, sed do eiusmod tempo
                </div>
                <div className="flex gap-4 mt-9 text-2xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c513d13332548b2d38543190fde066bd6c5a56e30207b44d7e6b512b89ed75ec?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051"
                    alt="Profile picture of Léa Jacquot"
                    className="object-contain shrink-0 aspect-square rounded-[43px] w-[68px]"
                  />
                  <div className="my-auto basis-auto">Léa Jacquot</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a848bee046761fd1aa2765e2d3092dec06cab7af6491c229d175e4f1716ce893?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051"
                alt="Featured NFT artwork Night Sky"
                className="object-contain grow w-full aspect-[1.06] rounded-[52px] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="self-start mt-32 text-2xl font-extrabold text-black max-md:mt-10">
          NFTs
        </div>
        <div className="mt-14 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {nftData.slice(0, 3).map((nft, index) => (
              <NFTCard key={`nft-1-${index}`} {...nft} />
            ))}
          </div>
        </div>
        <div className="mt-8 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {nftData.slice(3).map((nft, index) => (
              <NFTCard key={`nft-2-${index}`} {...nft} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 justify-between px-12 py-9 mt-24 bg-slate-200 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/216904dd5f87311cee4d4cfefdd2ac104757eb441b7c333890d46bbd45af41fe?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051"
          alt=""
          className="object-contain shrink-0 w-44 max-w-full aspect-[6.54]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab5e9373575c675e3263386004964d0d3c899680a8303bc2b262041c931e6620?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051"
          alt=""
          className="object-contain shrink-0 self-start max-w-full aspect-[8.06] w-[210px]"
        />
      </div>
    </div>
  );
}
