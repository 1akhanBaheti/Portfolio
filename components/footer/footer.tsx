import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";

const footerItems = [
  {
    key: "/me",
    title: "About",
  },
  {
    key: "/experience",
    title: "Experience",
  },
  {
    key: "/projects",
    title: "Projects",
  },
  {
    key: "/opensource-contributions",
    title: "Opensource Contributions",
  },
  {
    key: "/contact",
    title: "Contact",
  },
];

export const Footer: React.FC = () => {
  return (
    <div className="w-full bg-custom-background-200 pt-20">
      <div className="mx-auto max-w-[640px] text-center">
        <h5 className="font-paragraph text-custom-text-100 text-[18px]">
          what's Next ?
        </h5>
        <h2 className="text-custom-text-100 font-heading text-[46px] mt-[5px] mb-[8px] font-bold">
          Get In Touch
        </h2>
        <p className="text-custom-text-200 font-paragraph text-base">
          I’m currently looking for any new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I’ll try my
          best to get back to you!
        </p>
      </div>
      <div className="flex pl-auto justify-around border-y border-custom-border-200 py-12 mt-12">
        {footerItems.map((item) => (
          <Link href={item.key} key={item.key}>
            <p className="font-paragraph text-base text-custom-text-100 font-medium hover:text-custom-primary-200 hover:cursor-pointer">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
      <div className="flex justify-between items-center p-12">
        <Link href={"/"}>
          <div className="flex items-center hover:cursor-pointer">
            <Image src={Logo} alt="logo" className="h-10 w-10" />
            <p className="text-custom-text-200 font-paragraph text-base px-2">
              Lakhan's Folio
            </p>
          </div>
        </Link>
        <div className="flex flex-col items-center text-custom-text-200 font-paragraph text-base px-2">
          Built & Designed by
          <p className="hover:underline hover:font-medium hover:cursor-pointer hover:text-custom-primary-200">
            Lakhan Baheti
          </p>
        </div>
      </div>
    </div>
  );
};
