import React from "react";

export function Header() {
  return (
    <div className="flex flex-wrap gap-5 justify-between w-full text-zinc-800 max-md:max-w-full">
      <div className="my-auto text-3xl font-extrabold">MARKETPLACE</div>
      <button className="gap-4 self-stretch px-11 py-6 text-base font-semibold border border-solid border-zinc-800 rounded-[87px] max-md:px-5 hover:bg-zinc-800 hover:text-white transition-colors">
        Connect Wallet
      </button>
    </div>
  );
}
