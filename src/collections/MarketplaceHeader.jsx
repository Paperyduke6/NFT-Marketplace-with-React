import React, { useState } from "react";
// import * as React from "react";
import { Link } from "react-router-dom";
import Wallet from "../wallet/WalletView"

export function MarketplaceHeader() {
  const [isClicked, setIsClicked] = useState(false);
  
  return (
    <div className="flex flex-wrap gap-5 justify-between w-full text-zinc-800 max-md:max-w-full">
      <div className="my-auto text-3xl font-extrabold"><Link to="/">MARKETPLACE</Link></div>
      <button
        className="relative gap-4 self-stretch px-11 py-6 text-base font-semibold border border-solid border-zinc-800 rounded-[87px] max-md:px-5"
        aria-label="Connect Wallet" onClick={() => setIsClicked(!isClicked)}
      >
        Connect Wallet
        <div className="absolute z-50 top-0 right-0 flex items-center justify-center shadow-md rounded-md flex-col" style={{
            // position: "absolute",
            // width:"50vh",
            // Height:"500vh",
            // top: "50%",
            // left: "50%",
            transform: "translate(-0%, 5%)",
            // backgroundColor: "rgba(255, 255, 255, 1)",
            // color: "#000000",
            // padding: "10px 20px",
            // border: "none",
            // borderRadius: "45px",
            opacity: isClicked ? 1 : 0,
            pointerEvents: isClicked ? "auto" : "none",
            transition: "opacity 0.3s ease",
            z_index : "1000"
          }}>
              <Wallet />
        </div>
      </button>
      
    </div>
  );
}
