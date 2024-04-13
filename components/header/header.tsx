"use client";
import React from "react";
import Image from "next/image";
import { MoonStar, Sun } from "lucide-react";
import Logo from "@/public/logo.svg";
import { useTheme } from "next-themes";

const navItems = [
  {
    key: "about",
    title: "About",
    href: "/me",
  },
  {
    key: "experience",
    title: "Experience",
    href: "/experience",
  },
  {
    key: "projects",
    title: "Projects",
    href: "/projects",
  },
  {
    key: "contributions",
    title: "Contributions",
    href: "/openssource-contributions",
  },
];

export const Header = () => {
  const { setTheme } = useTheme();

  return (
    <nav className="bg-custom-background-100 py-6 border-b border-custom-border-200 flex items-center lg:max-w-6xl xl:max-w-7xl mx-auto">
      <Image src={Logo} alt="logo" className="h-12 w-12 mr-20" />
      <div className="flex gap-x-12 pl-auto justify-end mr-auto">
        {navItems.map((item) => (
          <p key={item.key} className="font-paragraph text-base text-custom-text-200 font-medium hover:text-custom-primary-200 hover:cursor-pointer">
            {item.title}
          </p>
        ))}
      </div>
      <div className="p-2 border-[1.5px] border-transparent hover:border-custom-primary-200 rounded-full">
        <MoonStar
          onClick={() => setTheme("dark")}
          className="hover:cursor-pointer dark:hidden"
        />
        <Sun
          onClick={() => setTheme("light")}
          className="hover:cursor-pointer hidden dark:block"
        />
      </div>

      <div className="px-4 py-3 bg-[#1D4ED8] rounded-full mx-6 text-white font-medium">Hire me</div>
    </nav>
  );
};
