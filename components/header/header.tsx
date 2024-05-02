"use client";
import React from "react";
import { MoonStar, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
// assets
import Logo from "@/public/logo.svg";
import { usePathname } from "next/navigation";

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
  const path = usePathname();

  return (
    <nav className="py-5 border-custom-border-200 flex items-center lg:max-w-6xl xl:max-w-7xl md:mx-auto px-4 md:px-0">
      <Link href={"/"}>
        <Image src={Logo} alt="logo" className="h-12 w-12 mr-20" />
      </Link>
      <div className="hidden md:flex gap-x-12 pl-auto justify-end mr-auto">
        {navItems.map((item) => (
          <Link key={item.key} href={item.href}>
            <p
              className={`font-paragraph text-base text-custom-text-200 font-medium hover:text-custom-primary-200 hover:cursor-pointer ${
                path === item.href ? "!text-custom-primary-200" : ""
              }`}
            >
              {item.title}
            </p>
          </Link>
        ))}
      </div>
      <div className="p-2 hover:bg-custom-background-200 rounded-full ml-auto">
        <MoonStar onClick={() => setTheme("dark")} className="hover:cursor-pointer dark:hidden" />
        <Sun onClick={() => setTheme("light")} className="hover:cursor-pointer hidden dark:block" />
      </div>

      <div className="flex-shrink-0 px-4 py-3 bg-[#1D4ED8] rounded-full mx-6 text-white font-medium hidden md:block">
        Hire me
      </div>
    </nav>
  );
};
