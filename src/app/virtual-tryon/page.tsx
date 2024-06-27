// import VtoWidget from "@/components/vto-widget";

// <div className="m-4">
//   <VtoWidget
//     modelname='rayban_chris_noir_gun_bleu_mirroir'
//     canvasheight={500}
//     canvaswidth={600}
//   />
// </div>

"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import VtoWidget from "@/components/vto-widget";
import glassesData from "./glasses.json";

export default function virtualTryon() {
  const [selectedGlasses, setSelectedGlasses] = useState<any>("empty");
  const [userImage, setUserImage] = useState<any>();
  const [adjustMode, setAdjustMode] = useState(false);
  const glasses = [
    {
      id: 1,
      name: "Classic Aviator",
      image: "/glasses-1.png",
      model: "rayban_aviator_or_vertFlash",
    },
    {
      id: 2,
      name: "Retro Square",
      image: "/glasses-2.png",
      model: "rayban_aviator_or_vertFlash",
    },
    {
      id: 3,
      name: "Modern Cat-Eye",
      image: "/glasses-3.png",
      model: "rayban_aviator_or_vertFlash",
    },
    {
      id: 4,
      name: "Sporty Wraparound",
      image: "/glasses-4.png",
      model: "rayban_aviator_or_vertFlash",
    },
    {
      id: 5,
      name: "Timeless Wayfarer",
      image: "/glasses-5.png",
      model: "rayban_aviator_or_vertFlash",
    },
    {
      id: 6,
      name: "Chic Oval",
      image: "/glasses-6.png",
      model: "rayban_aviator_or_vertFlash",
    },
  ];

  return (
    <div className="w-full min-h-[100dvh] bg-background">
      <header className="py-4 px-6 bg-card shadow">
        <div className="container mx-auto flex items-center justify-between">
          <Link
            href="#"
            className="text-2xl font-bold mx-auto lg:mx-0 text-primary"
            prefetch={false}
          >
            Virtual Try-On
          </Link>
        </div>
      </header>
      <main className="container mx-auto py-5 px-6">
        <VtoWidget
          modelname={selectedGlasses}
          canvasheight={50}
          canvaswidth={60}
        />

        <section className="mt-5">
          <h2 className="text-2xl font-bold mb-4">Try on Different Frames</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {glassesData.map((frame) => (
              <div
                key={frame.id}
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setSelectedGlasses(frame.model)}
              >
                {/* <Image
                  src={frame.image}
                  width="150"
                  height="150"
                  alt="glass image"
                  className={`mx-4 max-w-40 max-h-40  ${ selectedGlasses === frame.model ? "border border-green-500" : "" }`}
                  onClick={() => {
                    setSelectedGlasses(frame.model);
                  }}
                /> */}
                <img
                  src={frame.image}
                  alt={frame.name}
                  width={150}
                  height={150}
                  className="w-full h-auto rounded-lg object-contain"
                />
                <p className="text-center text-sm font-medium mt-2">
                  {frame.name}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      
    </div>
  );
}
