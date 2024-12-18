import * as React from "react";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { CollectionsGrid } from "./CollectionsGrid";
import { Footer } from "./Footer";

export default function MarketplaceLayout() {
  return (
    <div className="flex overflow-hidden flex-col pt-8 bg-neutral-50">
      <div className="flex flex-col px-20 w-full max-md:px-5 max-md:max-w-full">
        <Header />
        <HeroSection />
        <div className="self-start mt-32 text-2xl font-extrabold text-black max-md:mt-10">
          Collections
        </div>
        <CollectionsGrid />
      </div>
      <Footer />
    </div>
  );
}
