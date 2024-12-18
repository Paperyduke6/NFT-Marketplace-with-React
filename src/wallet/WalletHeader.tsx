import * as React from "react";

interface WalletHeaderProps {
  icon: string;
  currency: string;
  address: string;
  transaction: {
    icon: string;
    id: string;
    confirmIcon: string;
  };
}

export function WalletHeader({
  icon,
  currency,
  address,
  transaction,
}: WalletHeaderProps) {
  return (
    <div className="flex">
      <div className="flex flex-col items-center px-1.5 pt-5 pb-3 bg-cyan-800 rounded-full h-[50px] w-[50px]">
        <img
          loading="lazy"
          src={icon}
          alt={`${currency} wallet icon`}
          className="object-contain aspect-square w-[18px]"
        />
      </div>
      <div className="self-start mt-3.5 text-base leading-loose text-center text-slate-950">
        {currency}
      </div>
      <div className="z-10 grow shrink my-auto text-base leading-loose text-center text-slate-950 w-[115px] max-md:mr-0">
        {address}
      </div>
      <div className="flex flex-col self-start text-base leading-loose text-center whitespace-nowrap border border-solid bg-stone-50 bg-opacity-0 border-slate-950 rounded-[84px] text-slate-950">
        <div className="flex gap-5 justify-between items-start px-6 pt-2 pb-0.5 border border-solid bg-stone-50 bg-opacity-0 border-slate-950 rounded-[84px] max-md:pl-5">
          <img
            loading="lazy"
            src={transaction.icon}
            alt="Transaction icon"
            className="object-contain shrink-0 mt-2.5 w-5 aspect-square"
          />
          <div>{transaction.id}</div>
          <img
            loading="lazy"
            src={transaction.confirmIcon}
            alt="Confirmation icon"
            className="object-contain shrink-0 aspect-square w-[30px]"
          />
        </div>
      </div>
    </div>
  );
}
