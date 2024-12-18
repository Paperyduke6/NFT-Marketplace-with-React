import React from "react";
import { CollectionCard } from "./CollectionCard";

export function CollectionsGrid() {
  const collections = [
    {
      title: "Night Sky",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/33a8d7455f02e06e1b2c45944eaa9560c0d425c3ce26d9d6035274d66ae98a04?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051",
      nftCount: "120 NTF",
      priceRange: "0.12BTC - 0.18BTC",
      description:
        "Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor...",
      artist: {
        name: "Léa Jacquot",
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/7788b333bc8685ea23015193b53562eec94c08fda0471e2a81f4d63c17b9d7c9?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051",
      },
    },
    {
      title: "Future",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/515994db98950a41cf6a8f96f787dd9968b5917c85acdc0ec31ec9571094631c?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051",
      nftCount: "120 NTF",
      priceRange: "0.12BTC - 0.18BTC",
      description:
        "Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor...",
      artist: {
        name: "Julien",
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/31570aa121bf28277d05116b1aa7d8a100356b48e463d737b3a825038c99d30b?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051",
      },
    },
    {
      title: "Mother nature",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d1c661e581c90458348436024656a1f720c632d30dac0d5c9ae8082232052e2d?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051",
      nftCount: "120 NTF",
      priceRange: "0.12BTC - 0.18BTC",
      description:
        "Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor...",
      artist: {
        name: "Maria",
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/288e2de7ef234d61124d556d8a0e7a28bed3cc68551089ff2975752f20e7ef01?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051",
      },
    },
  ];

  return (
    <>
      <div className="self-start mt-32 text-2xl font-extrabold text-black max-md:mt-10">
        Collections
      </div>
      <div className="mt-10 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {collections.map((collection, index) => (
            <CollectionCard key={index} {...collection} />
          ))}
        </div>
      </div>
    </>
  );
}
