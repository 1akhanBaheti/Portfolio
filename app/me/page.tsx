import React from "react";
import Image from "next/image";
import profile from "@/public/profile.jpg";
// constants
import { techStack } from "@/constants";

export default function AboutMe() {
  return (
    <div className="bg-custom-background-100 max-w-6xl mx-auto" id="About">
      <div className="">
        <div className="font-heading text-4xl">
          About me
        </div>
        <div className="flex">
          <div className="">
            <p className="text-custom-text-100 text-pa text-[17px] mt-[50px] text-justify">
              Hello! My name is Lakhan, and I enjoy creating things that live on
              the internet. My interest in app development started in 2020 when
              I pursued a BTech in computer science and learned about
              programming languages. Then I tried native Android Development.
              Then, after exploring some more new technologies to develop mobile
              apps, I finally chose Flutter.
              <br />
              <br />
              Fast-forward to today, learning new technologies to build things
              for the web and exploring backend stuff.
              <br />
              <br /> Here are a few technologies I’ve been working with
              recently:
            </p>
            <div className="flex mt-[15px] ml-[15px] text-darkSlate">
              <ul className="mr-[100px] list-disc marker:text-secondaryColor">
                {techStack.map((techstack) => {
                  return techStack.indexOf(techstack) < techStack.length / 2 ? (
                    <li key={techstack}>{techstack}</li>
                  ) : null;
                })}
              </ul>
              <ul className="list-disc marker:text-secondaryColor">
                {techStack.map((techstack) => {
                  return techStack.indexOf(techstack) >=
                    techStack.length / 2 ? (
                    <li key={techstack}>{techstack}</li>
                  ) : null;
                })}
              </ul>
            </div>
          </div>
          <div className="mt-[60px] mx-auto md:mx-0">
            <Image src={profile} alt="Avatar" height={350} width={350} />
          </div>
        </div>
      </div>
    </div>
  );
}
