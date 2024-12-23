import * as React from "react";
import { NFTCard } from "./NFTCard";

const nftData = [
  {
    id: 1,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5c5db9e480fa80483af5e441e85d8b13bc14eb876743d0963581772de9196fbc?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051",
    title: "Night is coming",
    price: "0.12",
  },
  {
    id: 2,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/211cc1a7a80d7718bbf5472894d3a2a8a07c7e75df2ece67c7c53b58a1a11411?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051",
    title: "With the stars",
    price: "0.12",
  },
  {
    id: 3,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f2921a6b90b6d58a84e3f0725cbe4d8f6d04c0465d330878e7cc7bf3a3e5de57?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051",
    title: "Summer",
    price: "0.12",
  },
  {
    id: 4,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/435cb89bd375f8191148fdf7137fc7f6bf950f86547d584322c09e14dd1bf0c3?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051",
    title: "Quiet",
    price: "0.14",
  },
  {
    id: 5,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4cdbf5d5e10e5b8aafe02e86fd9bdcd76a565e30a27346eca7ace7c4977b479e?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051",
    title: "Travel",
    price: "0.12",
  },
  {
    id: 6,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ea3071748673d7ce0352d45e42139cc7cc694457b9d818c2f1a2a2e43e264825?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051",
    title: "The rain",
    price: "0.18",
  },
];

export function NFTGrid() {
  return (
    <>
      <div className="mt-14 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {nftData.slice(0, 3).map((nft) => (
            <NFTCard key={nft.id} {...nft} />
          ))}
        </div>
      </div>
      <div className="mt-8 max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {nftData.slice(3, 6).map((nft) => (
            <NFTCard key={nft.id} {...nft} />
          ))}
        </div>
      </div>
    </>
  );
}
