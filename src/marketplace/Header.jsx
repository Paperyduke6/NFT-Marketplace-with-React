import * as React from "react";
import { NavigationDots } from "./NavigationDots";
import { Link } from "react-router-dom";


export function Header() {
  return (
    <>
      <div className="flex flex-wrap gap-5 justify-between w-full text-zinc-800 max-md:max-w-full">
        <div className="my-auto text-3xl font-extrabold">MARKETPLACE</div>
        <Link to="/page2"><button className="gap-4 self-stretch px-11 py-6 text-base font-semibold border border-solid border-zinc-800 rounded-[87px] max-md:px-5">
          Connect Wallet
        </button></Link>
      </div>
      <NavigationDots />
    </>
  );
}
