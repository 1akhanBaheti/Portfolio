"use client";
import React from "react";
import Link from "next/link";
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
    key: "work-experience",
    title: "Experience",
    href: "/work-experience",
  },
  {
    key: "projects",
    title: "Projects",
    href: "/projects",
  },
  {
    key: "contributions",
    title: "Contributions",
    href: "/opensource-contributions",
  },
];

export const Header = () => {
  const { setTheme } = useTheme();

  return (
    <nav className="bg-custom-background-100 py-5 border-b border-custom-border-200 flex items-center lg:max-w-6xl xl:max-w-[80vw] mx-auto">
      <Link href={"/"}>
        <Image src={Logo} alt="logo" className="h-12 w-12 mr-20" />
      </Link>
      <div className="flex gap-x-12 pl-auto justify-end mr-auto">
        {navItems.map((item) => (
          <Link href={item.href}>
            <p
              key={item.key}
              className="font-paragraph text-base text-custom-text-200 font-medium hover:text-custom-primary-200 hover:cursor-pointer"
            >
              {item.title}
            </p>
          </Link>
        ))}
      </div>
      <div className="p-2 hover:bg-custom-background-200 rounded-full">
        <MoonStar
          onClick={() => setTheme("dark")}
          className="hover:cursor-pointer dark:hidden"
        />
        <Sun
          onClick={() => setTheme("light")}
          className="hover:cursor-pointer hidden dark:block"
        />
      </div>

      <div className="px-4 py-3 bg-[#1D4ED8] rounded-full mx-6 text-white font-medium">
        Hire me
      </div>
    </nav>
  );
};
