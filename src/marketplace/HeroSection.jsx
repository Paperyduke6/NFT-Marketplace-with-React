import React, { useState, useEffect } from "react";

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const images = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/a848bee046761fd1aa2765e2d3092dec06cab7af6491c229d175e4f1716ce893?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/33a8d7455f02e06e1b2c45944eaa9560c0d425c3ce26d9d6035274d66ae98a04?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/7788b333bc8685ea23015193b53562eec94c08fda0471e2a81f4d63c17b9d7c9?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
        setIsLoading(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
                alt="Profile"
              />
              <div className="my-auto basis-auto">Léa Jacquot</div>
            </div>
            <div className="flex flex-wrap gap-5 self-stretch mt-11 w-full text-base font-semibold max-md:mt-10 max-md:max-w-full">
              <button className="gap-4 self-stretch p-6 whitespace-nowrap bg-zinc-800 rounded-[87px] text-neutral-50 max-md:px-5 hover:bg-zinc-700 transition-colors">
                Buy
              </button>
              <button className="gap-4 self-stretch p-6 border border-solid border-zinc-800 rounded-[87px] text-zinc-800 max-md:px-5 hover:bg-zinc-100 transition-colors">
                See collection
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full relative">
          <div
            className={`absolute inset-0 bg-white/50 transition-opacity duration-300 ${
              isLoading ? "opacity-100" : "opacity-0"
            }`}
          />
          <img
            loading="lazy"
            src={images[currentImageIndex]}
            className="object-contain grow w-full aspect-[1.06] rounded-[52px] max-md:mt-10 max-md:max-w-full transition-opacity duration-300"
            alt="Featured artwork"
          />
        </div>
      </div>
    </div>
  );
}
