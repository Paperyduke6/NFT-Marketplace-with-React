import * as React from "react";
import { MarketplaceHeader } from "./MarketplaceHeader";
import { NFTGrid } from "./NFTGrid";
import { WalletProvider } from "../wallet/WalletContext";

export default function Marketplace() {
  return (
    <WalletProvider>
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
        <NFTGrid />
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
    </WalletProvider>
  );
}
