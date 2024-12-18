import * as React from "react";

export default function MarketplaceHeader() {
  return (
    <div className="flex flex-wrap gap-5 justify-between w-full text-zinc-800 max-md:max-w-full">
      <div className="my-auto text-3xl font-extrabold">MARKETPLACE</div>
      <button
        className="gap-4 self-stretch px-11 py-6 text-base font-semibold border border-solid border-zinc-800 rounded-[87px] max-md:px-5"
        aria-label="Connect Wallet"
      >
        Connect Wallet
      </button>
    </div>
  );
}
