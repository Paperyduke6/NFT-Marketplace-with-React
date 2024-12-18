import * as React from "react";
import { NFTDepositProps } from "./types";

export function NFTDeposit({ amount, approximateUSD }: NFTDepositProps) {
  return (
    <>
      <div className="self-start -mt-1.5 ml-20 text-sm tracking-wider leading-normal text-center text-neutral-500 max-md:ml-2.5">
        Your deposit
      </div>
      <div className="mt-3.5 ml-16 text-xl leading-9 text-center text-slate-950 max-md:ml-2.5">
        {amount} BTC <br />
        <span className="text-xs text-neutral-500">≈${approximateUSD}</span>
      </div>
    </>
  );
}
