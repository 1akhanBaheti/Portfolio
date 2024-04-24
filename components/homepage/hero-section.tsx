import Image from "next/image";
import Link from "next/link";
// constants
import { RESUME_LINK } from "@/constants";
// assets
import GridDark from "@/public/svg/grid-dark.svg";
import GridLight from "@/public/svg/grid-light.svg";
// components
import { AnimatedTechStack } from "./animated-techstack";

export function HeroSection() {
  return (
    <>
      <Image
        src={GridDark}
        alt="background"
        className="fixed h-[100vh] w-[100vw] object-cover -z-20 opacity-40 inset-0 hidden dark:block"
      />
      <Image
        src={GridLight}
        alt="background"
        className="fixed h-[100vh] w-[100vw] object-cover -z-20 opacity-80 inset-0 dark:hidden"
      />
      <div className="min-h-[90vh] pt-20 h-fit flex items-center my-auto md:max-w-4xl lg:max-w-5xl xl:max-w-7xl mx-auto overflow-x-hidden hide-scrollbar">
        <div className="flex flex-col">
          <h1 className="font-heading text-custom-text-100 tracking-[0.3px] lg:text-[50px] sm:text-[40px] text-[38px] font-bold mb-[4px] leading-none md:text-center text-left px-4">
            I’m Lakhan.
          </h1>
          <h6 className="font-heading text-custom-primary-200 font-extrabold tracking-[0.2px] lg:text-[65px] sm:text-[50px] text-[38px] lg:leading-[65px] sm:leading-[50px] leading-[42px] mt-[8px] md:max-w-2xl lg:max-w-3xl xl:max-w-4xl md:text-center px-4 mx-auto">
            I build things for web & mobile.
          </h6>
          <p className="text-custom-text-200 font-paragraph tracking-tight font-medium text-base mt-[25px] max-w-full md:max-w-2xl lg:max-w-4xl md:text-center px-4 mx-auto">
            I’m a 21 year old undergraduate computer science student from India
            pursuing B.Tech at the SSIPMT, Raipur. I’m passionate about building
            apps and learning new technologies. Currently, I’m focused on
            shipping great product{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="text-custom-primary-200 transition-all ease-in duration-500 hover:underline hover:transition-all hover:duration-700"
              href="https://plane.so/"
            >
              Plane
            </Link>
          </p>
          <div className="flex gap-x-4 px-4 md:mx-auto">
            <a
              href="mailto: lakhanbaheti9@gmail.com"
              className="hidden md:flex items-center bg-custom-primary-200 text-base font-bold font-raleway mt-[50px] h-[65px] px-[25px] text-white rounded-lg"
            >
              Get in touch
            </a>

            <a
              href={RESUME_LINK}
              rel="noopener noreferrer"
              target="_blank"
              className="mr-auto flex items-center bg-custom-primary-200 text-base font-bold font-raleway mt-[50px] h-[65px] px-[25px] text-white rounded-lg"
            >
              Check out my resume!
            </a>
          </div>

          <div className="my-16 gap-x-6 flex xl:max-w-6xl lg:max-w-5xl md:max-w-4xl w-[100vw]">
            <AnimatedTechStack />
          </div>
        </div>
      </div>
    </>
  );
}
