import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";

// Define an interface for the component props
interface EvervaultCardDemoProps {
  cardText: string;
  hoverText: string;
  onClick: () => void;
}

// Use the interface for type checking
export function EvervaultCardDemo({ cardText, hoverText, onClick }: EvervaultCardDemoProps) {
  return (
    <div className="border border-white/[0.2] rounded-lg flex flex-col items-start w-full mx-auto p-4 relative h-auto ">
      {/* <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " /> */}

      <div onClick={onClick} className="cursor-pointer w-full">
        <EvervaultCard text={cardText} />
      </div>

      <h2 className="text-white mt-4 text-sm font-light ">
        {hoverText}
      </h2>
      {/* <p className="text-sm border font-light border-white/[0.2] rounded-full mt-4 text-white px-2 py-0.5 ">
        Hover Over
      </p> */}
    </div>
  );
}