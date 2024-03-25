import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";

export function EvervaultCardDemo({ cardText, hoverText }) {
  return (
    <div className="border border-white/[0.2] flex flex-col items-start max-w-64 sm:max-w-80 mx-auto p-4 relative h-[30rem] ">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

      <EvervaultCard text={cardText} />

      <h2 className="text-whitemt-4 text-sm font-light">
        {hoverText}
      </h2>
      <p className="text-sm border font-light border-white/[0.2]  rounded-full mt-4 text-white px-2 py-0.5">
        Hover Over
      </p>
    </div>
  );
}
