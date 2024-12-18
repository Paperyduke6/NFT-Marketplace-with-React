import * as React from "react";
import { WalletHeader } from "./WalletHeader";
import { NFTDeposit } from "./NFTDeposit";

export default function WalletView() {
  const walletData = {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/221e8a7c40d2496a843eb7faa5147be5ce3f41a4aeeb9e72cfcfcbb046d3a9b7?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051",
    currency: "BTC",
    address: "STV6Q...4Z7WD",
    transaction: {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e815b4c35a9643c3a8ac5eda6ceaa5d5950913144a549c078367f5fa4e5f3759?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051",
      id: "TXS...EVD",
      confirmIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8f8d731d07b7de5056942dcc293538ab0a7e9135587b7a2d00a003707bdd55be?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051",
    },
  };

  const depositData = {
    amount: "0.0001",
    approximateUSD: "20",
  };

  return (
    <div className="flex mx-auto w-full rounded-none max-w-[480px]">
      <div className="flex gap-px items-start px-3 pt-9 mt-1.5 -mr-8 rounded-xl bg-neutral-300 bg-opacity-20 pb-[931px] max-md:hidden max-md:pb-24">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/221e8a7c40d2496a843eb7faa5147be5ce3f41a4aeeb9e72cfcfcbb046d3a9b7?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051"
          alt=""
          className="object-contain shrink-0 aspect-[0.7] w-[7px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/221e8a7c40d2496a843eb7faa5147be5ce3f41a4aeeb9e72cfcfcbb046d3a9b7?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051"
          alt=""
          className="object-contain shrink-0 aspect-[0.7] w-[7px]"
        />
      </div>
      <div className="flex flex-col grow shrink-0 px-7 pt-7 pb-96 bg-white rounded-3xl border-2 border-solid basis-0 border-slate-950 w-fit max-md:pb-24 max-md:pl-5 max-md:max-w-full">
        <WalletHeader {...walletData} />
        <div className="z-10 self-start mt-60 ml-4 text-2xl font-extrabold text-black max-md:mt-10 max-md:ml-2.5">
          Your NFTs
        </div>
        <NFTDeposit {...depositData} />
        <div className="self-center mt-12 text-2xl text-slate-500 max-md:mt-10">
          You don't own any NFTs yet
        </div>
        <button className="gap-4 self-center p-6 mt-20 max-w-full text-base font-semibold bg-zinc-800 rounded-[87px] text-neutral-50 w-[248px] max-md:px-5 max-md:mt-10">
          Start shopping
        </button>
      </div>
    </div>
  );
}
