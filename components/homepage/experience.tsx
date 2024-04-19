import React from "react";
import Link from "next/link";
// constants
import { EXPERIENCE_LITE } from "@/constants";

export const ExperienceSection = () => {
  return (
    <div className="flex flex-col items-center h-full w-full mx-auto bg-custom-background-200 py-20">
      <div className="px-4 flex flex-col items-center h-full w-full mx-auto xl:max-w-4xl bg-custom-background-200">
        <h1 className="font-heading font-bold text-3xl text-custom-text-100 w-full md:text-center">
          Proffessional Experience
        </h1>
        <p className="text-custom-text-200 tracking-tight font-paragraph xl:max-w-xl md:text-center my-4 mb-16">
          Deeply appreciative of the companies that have granted me the
          opportunity to collaborate and collectively shape products that evoke
          a sense of pride every time they come to mind.
        </p>

        {EXPERIENCE_LITE.map((exp, index) => (
          <div
            key={index}
            className="grid grid-cols-3 justify-center border-y border-custom-border-200 w-full py-6 "
          >
            <div>
              <p className="text-custom-text-200 font-paragraph font-semibold text-xs py-1">
                COMPANY NAME
              </p>
              <Link href="">
                <h3 className="text-custom-text-100 font-paragraph font-semibold text-base hover:text-custom-primary-200 hover:underline">
                  {exp.company}
                </h3>
              </Link>
            </div>
            <div>
              <p className="text-custom-text-200 font-paragraph font-semibold text-xs py-1">
                POSITION
              </p>
              <h3 className="text-custom-text-100 font-paragraph font-semibold text-base">
                {exp.role}
              </h3>
            </div>
            <div>
              <p className="text-custom-text-200 font-paragraph font-semibold text-xs py-1">
                DURATION
              </p>
              <h3 className="text-custom-text-100 font-paragraph font-semibold text-base">
                {exp.duration}
              </h3>
            </div>

            {/* <p className="text-custom-text-100 font-paragraph tracking-tight text-base my-4">
              {exp.description}
            </p> */}
          </div>
        ))}
      </div>
    </div>
  );
};
