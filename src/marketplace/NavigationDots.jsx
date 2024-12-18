import * as React from "react";

export function NavigationDots() {
  return (
    <div className="flex flex-wrap gap-8 self-center mt-14 w-full max-w-[1304px] max-md:mt-10 max-md:max-w-full">
      <div className="flex shrink-0 w-48 h-3.5 rounded-lg bg-zinc-800" />
      <div className="flex flex-col flex-1 justify-center items-start py-px rounded-lg bg-slate-200">
        <div className="flex z-10 shrink-0 h-3.5 rounded-lg bg-zinc-800 w-[46px]" />
      </div>
      <div className="flex shrink-0 h-3.5 rounded-lg bg-slate-200 w-[190px]" />
      <div className="flex shrink-0 h-3.5 rounded-lg bg-slate-200 w-[190px]" />
      <div className="flex shrink-0 h-3.5 rounded-lg bg-slate-200 w-[190px]" />
      <div className="flex shrink-0 w-48 h-3.5 rounded-lg bg-slate-200" />
    </div>
  );
}
