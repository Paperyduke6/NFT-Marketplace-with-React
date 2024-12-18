import React from "react";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { CollectionsGrid } from "./CollectionsGrid";
import { Footer } from "./Footer";
import { ProgressBar } from "./ProgressBar";

export function MarketplaceLayout() {
  return (
    <div className="flex overflow-hidden flex-col pt-8 bg-neutral-50">
      <div className="flex flex-col px-20 w-full max-md:px-5 max-md:max-w-full">
        <Header />
        <ProgressBar />
        <HeroSection />
        <CollectionsGrid />
      </div>
      <Footer />
    </div>
  );
}
