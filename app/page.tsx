"use client"
import { FAQ } from "@/components/FAQ";
import { SpotlightPreview } from "@/components/SpotlightPreview";
import Image from "next/image";
import React, { useRef } from 'react';
import NextJsCarousel from "@/components/NextJsCarousel";
import Rules from "@/components/ui/rules";


//flex min-h-screen flex-col items-center justify-between p-24

const images = [
  { src: '/announcement1.jpg', alt: 'Image 1' },
  { src: '/imaannouncement2.jpg', alt: 'Image 2' },
  // Add more images as needed
];

export default function Home() {

  return (

    <main className="bg-black text-white px-[8%] text-center " >
      <div id="home" className="section h-auto min-h-screen bg-black">
        <SpotlightPreview />
      </div>
      <div id="overview" className="section h-auto min-h-screen bg-black box-border pt-12">
        <h1 className="text-3xl font-bold underline text-center">Timeline</h1>
        <Image src={"/timeline.png"} alt="Timeline" width={1800} height={50}/>
        {/* <Timeline /> */}
        <br/>
        <h1 className="text-3xl font-bold underline text-center">Sponsorships</h1>
        <br/>
        <h1 className="text-3xl font-bold underline text-center">Media Collaborator</h1>
        
      </div>
      <div id="announcements" className="section h-screen bg-black box-border pt-10 relative">
        <h1 className="text-3xl font-bold underline text-center">Announcements</h1>
        <NextJsCarousel />
      </div>

      <div id="faq" className="section h-screen bg-black box-border pt-12">
        <h1 className="text-3xl font-bold underline">FAQs</h1>
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
