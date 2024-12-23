import React,{ useState } from "react";
import { Link } from "react-router-dom";
import { useWallet } from "../wallet/WalletContext";


export function NFTCard({ image, title, price }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToWallet } = useWallet();

  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col px-4 pt-4 pb-14 mx-auto w-full bg-neutral-50 rounded-[47px] shadow-[0px_4px_63px_rgba(0,0,0,0.08)] max-md:mt-10 max-md:max-w-full">
      <div className="relative w-full pt-[56.25%]" onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <img
          loading="lazy"
          src={image}
          alt={`NFT artwork titled ${title}`}
          // className="object-contain w-full rounded-none aspect-[1.13] object-cover"
          className="absolute top-0 left-0 w-full h-full object-cover object-contain rounded-[47px]"
          style={{ display: "block", transition: "transform 0.3s ease", transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          
        />
        <button 
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(255, 255, 255, 1)",
            color: "#000000",
            padding: "10px 20px",
            border: "none",
            borderRadius: "45px",
            opacity: isHovered ? 1 : 0,
            pointerEvents: isHovered ? "auto" : "none",
            transition: "opacity 0.3s ease"
          }}
          onClick={() => addToWallet(image)}>
        {/* Go to Page 2 */}
        Buy
        </button>
        </div>
        <div className="flex gap-5 justify-between mt-11 w-full max-md:mt-10 max-md:mr-1.5">
          <div className="text-2xl font-bold text-black">{title}</div>
          <div className="gap-2.5 self-stretch px-9 py-2.5 text-xs font-medium bg-slate-300 rounded-[49px] text-zinc-800 max-md:px-5">
            {price} BTC
          </div>
        </div>
      </div>
    </div>
  );
}
