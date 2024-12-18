import React from "react";

export function Footer() {
  return (
    <div className="flex flex-wrap gap-5 justify-between px-12 py-9 mt-40 w-full bg-slate-200 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/216904dd5f87311cee4d4cfefdd2ac104757eb441b7c333890d46bbd45af41fe?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051"
        className="object-contain shrink-0 w-44 max-w-full aspect-[6.54]"
        alt="Footer logo 1"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3da677de77b2eaaefe6a4a5461a08d63fabbd7930287657c3e06fa8c0c228f9e?placeholderIfAbsent=true&apiKey=58edc9c75fad4de19298bedf0d7fe051"
        className="object-contain shrink-0 self-start max-w-full aspect-[8.06] w-[210px]"
        alt="Footer logo 2"
      />
    </div>
  );
}
