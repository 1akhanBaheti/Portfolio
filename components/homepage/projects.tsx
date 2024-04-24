import React from "react";
import Image from "next/image";
import Link from "next/link";
// conatants
import { PROJECTS_LITE } from "@/constants";
import { GithubIcon, RedirectIcon } from "@/icons";

export const ProjectsSection = () => (
  <div className="flex flex-col items-center h-full w-full mx-auto bg-custom-background-200 py-20">
    <div className="px-4 flex flex-col items-center h-full w-full mx-auto xl:max-w-5xl bg-custom-background-200">
      <h1 className="font-heading font-bold text-3xl text-custom-text-100 w-full md:text-center mb-6">
        Featured Projects
      </h1>

      <div className="grid md:grid-cols-2">
        {PROJECTS_LITE.map((project) => (
          <div
            key={project.title}
            className="flex flex-col items-center justify-center my-6 md:mr-6 bg-custom-background-100 rounded-xl"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-fit object-cover rounded-t-xl"
            />
            <div className="mx-4 my-6">
              <Link href={""}>
                <h2 className="text-xl font-bold text-custom-text-100 hover:underline hover:text-custom-primary-200">
                  {project.title}
                </h2>
              </Link>
              <p className="text-[15px] font-paragraph font-medium tracking-tight leading-[18px] text-custom-text-200 py-2">
                {project.description}
              </p>
              <div className="flex gap-x-4 justify-end items-center">
                <GithubIcon className="text-custom-text-100 stroke-current fill-custom-primary-100 h-5 w-5 hover:text-custom-primary-200 my-4" />
                <Link href={project.github}>
                  <RedirectIcon className="text-custom-text-100 stroke-current fill-custom-text-100 h-4 w-4 hover:text-custom-primary-200 my-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
