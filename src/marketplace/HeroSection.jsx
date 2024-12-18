import * as React from "react";

export function HeroSection() {
  return (
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
                className="object-contain shrink-0 aspect-square rounded-[43px] w-[68px]"
                alt="Artist profile"
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
            className="object-contain grow w-full aspect-[1.06] rounded-[52px] max-md:mt-10 max-md:max-w-full"
            alt="Featured artwork"
          />
        </div>
      </div>
    </div>
  );
}
