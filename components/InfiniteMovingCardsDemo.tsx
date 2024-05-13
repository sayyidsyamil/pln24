"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-auto rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
        
      />
    </div>
  );
}

const testimonials = [
  {
    src: "/media/1.jpg",
  },
  {
    src: "/media/2.jpg",
  },
  {
    src: "/media/3.jpg",
  },
  {
    src: "/media/4.jpg",
  },
  {
    src: "/media/5.jpg",
  },
  {
    src: "/media/7.jpg",
  },
  {
    src: "/media/9.png",
  },

];
