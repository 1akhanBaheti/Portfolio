"use client";
import React, { useState } from "react";
import Link from "next/link";
// constants
import { WORK_EXPERIENCE } from "@/constants";

export default function WorkExperiencePage() {
  const [selectedWork, setSelectedWork] = useState(0);
  const work = WORK_EXPERIENCE[selectedWork];

  return (
    <div className="max-w-7xl mx-auto flex flex-col justify-center">
      <h1 className="font-heading text-4xl font-bold my-10 border-custom-border-200">Work Experience</h1>
      <div className="flex justify-center mt-16 mb-24">
        <div className="mr-10">
          {WORK_EXPERIENCE.map((work, index) => (
            <div
              key={work.key}
              onClick={() => setSelectedWork(index)}
              className={`border-l-[3px] mb-1 rounded-sm py-2 px-4 font-medium border-custom-primary-200 hover:cursor-pointer hover:bg-blue-500/10 ${
                selectedWork === index ? "text-custom-primary-200" : "!border-custom-border-200 bg-transparent"
              }`}
            >
              {work.company}
            </div>
          ))}
        </div>

        <div className="max-w-lg min-h-[350px]">
          <h1 className="text-custom-text-100 font-paragraph text-lg font-medium inline">{work.role}</h1>
          <a href="https://caravel.tech" rel="noopener noreferrer" target="_blank">
            <h1 className="text-custom-primary-200 text-lg font-medium inline ml-[4px] hover:underline font-paragraph tracking-tight">
              @{work.company}
            </h1>
          </a>
          <h1 className="text-custom-text-200 text-sm mb-6 font-paragraph tracking-tight font-medium">
            {work.duration}
          </h1>
          <ul className="ml-4 list-disc">
            {work.description.map((point, index) => (
              <li
                key={point.slice(0, 10)}
                className="text-custom-text-200 text-[15.5px] mb-2 font-paragraph marker:text-custom-primary-200 list-outside"
              >
                <p>
                  {point}
                  {index === 2 && (
                    <Link
                      rel="noopener noreferrer"
                      target="_blank"
                      href={
                        work.key === "caravel-tech"
                          ? "https://play.google.com/store/apps/details?id=com.topall.app&pli=1"
                          : "https://github.com/makeplane/plane"
                      }
                      className="text-custom-primary-200 hover:underline font-medium"
                    >
                      {work.key === "caravel-tech" ? "playstore" : "github"}
                    </Link>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
