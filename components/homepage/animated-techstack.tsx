"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
// constants
import { TECHSTACK } from "@/constants";

export const AnimatedTechStack = () => (
  <Marquee pauseOnClick loop={0}>
    {TECHSTACK.map((tech) => (
      <div className="p-2 bg-custom-background-200 shadow-sm rounded-xl mr-8" key={tech.path}>
        <Image
          alt={tech.title}
          height={30}
          width={30}
          sizes="100vw"
          src={tech.path}
          className="object-cover object-center"
        />
      </div>
    ))}
  </Marquee>
);
