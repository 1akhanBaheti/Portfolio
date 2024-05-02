import React from "react";
import Link from "next/link";
import Image from "next/image";
// constants
import { PROJECTS } from "@/constants";
import { GithubIcon, RedirectIcon } from "@/icons";

export default function ProjectsPage() {
  return (
    <div className="min-h-[100vh] h-fit flex flex-col mt-10 bg-custom-background-100 max-w-7xl mx-auto">
      <h1 className="font-heading text-4xl">Projects</h1>
      <div className="md:mx-[100px] xl:w-[70%] lg:mx-[150px] xl:mx-auto mt-[50px] md:flex-col md:block hidden">
        <ul>
          {PROJECTS.map((project, index) => {
            return (
              <div key={project.title} className="w-[100%] relative flex justify-items-center pb-20">
                <div
                  className={
                    "w-[60%] h-[350px] justify-center flex relative flex-col justify-items-center " +
                    (index % 2 === 1 ? "ml-auto" : "mr-auto")
                  }
                >
                  <Image
                    src={project.image}
                    alt={project.image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="object-cover h-auto border-[0px] rounded-[4px] border-custom-primary-200 max-h-[350px] w-[100%] "
                  />
                </div>
                <div
                  className={
                    "xl:w-[40%] w-[55%] h-[350px] absolute " +
                    (index % 2 === 0 ? "right-0 text-right" : "left-0 text-left")
                  }
                >
                  {project.is_featured && <h5 className="text-custom-primary-200 font-medium">Featured Project</h5>}
                  <h5 className="text-custom-text-100 text-2xl mb-5 font-bold">{project.title}</h5>
                  <div className={"absolute w-[130%] text-white " + (index % 2 === 0 ? "right-0" : "left-0")}>
                    <div
                      className={
                        "bg-custom-primary-200 py-6 px-8 rounded-[6px] text-base " +
                        (index % 2 === 1 ? "text-left" : "text-right")
                      }
                    >
                      <p>{project.description}</p>
                    </div>
                    <div className="mt-2">
                      {project.technologies.map((tech) => {
                        return (
                          <div
                            key={tech}
                            className={
                              "text-custom-text-300 font-paragraph tracking-tight border-none px-2 max-w-fit inline-block mb-1 border-custom-primary-200 rounded-sm text-lightestSlate py-1 text-base" +
                              (index % 2 === 0 ? " ml-2" : " mr-4")
                            }
                          >
                            {tech}
                          </div>
                        );
                      })}
                      <div
                        className={
                          "h-8 flex justify-end mb-8 items-center w-[70px] mt-2 transition-all duration-500 " +
                          (index % 2 === 1 ? "mr-auto" : "ml-auto")
                        }
                      >
                        {project.github && (
                          <div
                            className="mr-[25px] hover:mb-2 transition-all h-5 w-5 duration-300 text-custom-text-100 fill-current"
                            title="Github"
                          >
                            <GithubIcon />
                          </div>
                        )}
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          className="hover:mb-2 transition-all duration-300 text-custom-text-100 fill-current h-4 w-4"
                          href={project?.apk}
                          title="APK"
                        >
                          <RedirectIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
