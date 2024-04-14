import Image from "next/image";
import Link from "next/link";
// components
import { AnimatedTechStack } from "./animated-techstack";
// constants
import { RESUME_LINK } from "@/constants";

export function HeroSection() {
  return (
    <div className="min-h-[90vh] pt-10 h-fit flex items-center my-auto lg:max-w-6xl xl:max-w-7xl mx-auto overflow-x-hidden hide-scrollbar">
      <div className="flex flex-col justify-center items-center">
        <div className="">
          {/* <Image src={Avatar} alt="avatar" className="h-40 w-fit -mt-14" /> */}
          <div className="font-heading text-custom-text-100 tracking-[0.3px] lg:text-[50px] sm:text-[50px] text-[38px] font-bold mb-[4px] leading-none">
            I'm Lakhan.
          </div>
        </div>
        <h6 className="font-heading text-custom-primary-200 font-extrabold tracking-[0.2px] lg:text-[65px] sm:text-[45px] text-[38px] lg:leading-[65px] sm:leading-[50px] leading-[42px] md:mr-0 mr-[25px] mt-[8px] xl:max-w-4xl text-center">
          I build things for web & mobile.
        </h6>
        <p className="text-custom-text-200 font-paragraph tracking-tight font-medium text-base mt-[25px] xl:max-w-4xl text-center">
          I’m a 21 year old undergraduate computer science student from India
          pursuing B.Tech at the SSIPMT, Raipur. I’m passionate about building
          apps and learning new technologies. Currently, I’m focused on shipping
          great product{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="text-custom-primary-200 transition-all ease-in duration-500 hover:underline hover:transition-all hover:duration-700"
            href="https://plane.so/"
          >
            Plane
          </Link>
        </p>
        <div className="flex gap-x-4">
          <a
            href="mailto: lakhanbaheti9@gmail.com"
            className="flex items-center bg-custom-primary-200 text-base font-bold font-raleway mt-[50px] h-[65px] px-[25px] text-white rounded-lg"
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

        <div className="my-16 gap-x-6 flex max-w-6xl">
          <AnimatedTechStack />
        </div>
      </div>
    </div>
  );
}
