import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { Spotlight } from "./ui/Spotlight";
import { NavBar } from "./nav-bar";
import { cn } from "@/utils/cn";
//hi

export function SpotlightPreview() {
  const eventDate = new Date('2024-05-10T23:59:59'); // Replace with your event date
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +eventDate - +new Date();
      return difference > 0 ? difference : 0;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="lightblue" />
      <div className="m-10 p-4 max-w-7xl mx-auto relative z-10 w-full  my-auto pt-16 sm:pt-0">
        <Image src='/logo.png' alt="logo" height={120} width={120} className="md:h-200 md:w-200 mx-auto" />
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Programming League <br /> National 2024
        </h1>
        <p className="mt-10 font-normal text-base text-neutral-300 max-w-xl text-center mx-auto">
          Programming League National is an annual competitive programming contest organized by the
          Computer Society of Universiti Malaya (PEKOM) where teams of 3 compete to solve algorithmic problems
          in a given time.
        </p>
        <br />
        {timeLeft > 0 ? (
          <div className="text-l">
            {days > 0 && `${days} day${days > 1 ? 's' : ''} `}
            {hours > 0 && `${hours} hour${hours > 1 ? 's' : ''} `}
            {minutes > 0 && `${minutes} minute${minutes > 1 ? 's' : ''} `}
            {seconds > 0 && `${seconds} second${seconds > 1 ? 's' : ''} `}
          </div>
        ) : (
          <h1 className="text-l">It is the day! </h1>
        )}
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="flex flex-wrap justify-center sm:justify-start">
            <button className="p-[3px] relative m-2">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-lg" />
              <div className="px-8 py-3 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                Register Now
              </div>
            </button>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start">
            <button className="p-[3px] relative m-2">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-lg" />
              <div className="p-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                <FaLinkedin className="w-8 h-8" />
              </div>
            </button>
            <button className="p-[3px] relative m-2">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-lg" />
              <div className="p-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                <FaTiktok className="w-8 h-8" />
              </div>
            </button>
            <button className="p-[3px] relative m-2">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-lg" />
              <div className="p-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                <FaInstagram className="w-8 h-8" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
