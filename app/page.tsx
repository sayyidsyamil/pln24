"use client"
import { FAQ } from "@/components/FAQ";
import { SpotlightPreview } from "@/components/SpotlightPreview";
import Image from "next/image";
import React, { useRef } from 'react';
import NextJsCarousel from "@/components/NextJsCarousel";
import Rules from "@/components/ui/rules";


export default function Home() {

  return (

    <main className="px-[10%] bg-black text-white">
      <div id="home" className="section h-auto min-h-screen bg-black">
        <SpotlightPreview />
      </div>

      <div id="overview" className="section h-auto bg-black box-border pt-12">
        <h1 className="text-3xl font-bold underline text-center">Timeline</h1>
        <Image src={"/timeline.png"} alt="Timeline" width={1800} height={50}/>
        <br/>
      </div>

      <div id="announcements" className="section h-auto bg-black box-border pt-10 relative">
        <h1 className="text-3xl font-bold underline text-center">Announcements</h1>
        <NextJsCarousel />
      </div>


      <div id="faq" className="section h-auto min-h-screen bg-black box-border pt-12">
        <h1 className="text-3xl font-bold underline text-center">FAQs</h1>
        <FAQ />
      </div>

      <div id="rules" className="section h-auto min-h-screen bg-black box-border pt-12 pb-10">
        <h1 className="text-3xl font-bold underline text-center">Rules</h1>
        <br/><br/>
        <Rules />
      </div>


      <div className="section h-auto bg-black box-border pt-12 pb-10">
        <h1 className="text-2xl font-bold text-center">Built and designed by PLN24 Team</h1>
      </div>
    </main>
  );
}
