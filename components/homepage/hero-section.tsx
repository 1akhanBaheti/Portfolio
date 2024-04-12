import Image from "next/image";
import Chakra from "@/public/svg/chakra.svg";
import { resumeDriveLink } from "../../constants";
import { ChakraIcon } from "@/icons";
import Profile from "@/public/profile.png";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="h-[100vh] lg:max-w-6xl mx-auto overflow-x-hidden pt-[100px]">
      <div className="flex flex-col justify-center ">
        <div className="font-heading text-custom-text-100 tracking-[0.3px] lg:text-[65px] sm:text-[50px] text-[38px] font-bold mb-[4px] leading-none">
          I'm Lakhan.
        </div>
        <h6 className="font-heading font-extrabold text-custom-text-100 tracking-[0.2px] lg:text-[65px] sm:text-[45px] text-[38px] lg:leading-[65px] sm:leading-[50px] leading-[42px] md:mr-0 mr-[25px] mt-[8px]">
          I build things for web & mobile.
        </h6>
        <p className="text-custom-text-100 font-paragraph font-medium text-base mt-[25px] lg:mr-[35%]">
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
        <a
          href={resumeDriveLink}
          rel="noopener noreferrer"
          target="_blank"
          className="mr-auto flex items-center bg-custom-primary-200 text-base font-bold font-raleway mt-[50px] h-[65px] px-[25px] text-white rounded-xl"
        >
          Check out my resume!
        </a>
      </div>

      <ChakraIcon className="absolute top-4 -right-[400px] text-custom-primary-200 stroke-current -z-10" />
    </div>
  );
}
