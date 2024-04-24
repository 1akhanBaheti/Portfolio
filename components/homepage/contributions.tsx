import React from "react";
import Image from "next/image";
import Link from "next/link";
// constants
import { repositiories } from "@/constants";
// components
import { RedirectIcon } from "@/icons";

export const ContributionsSection = () => (
  <div className="w-full bg-custom-background-100">
    <div className="px-4 flex flex-col items-center py-20 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl md:mx-auto">
      <h1 className="font-heading font-bold text-3xl text-custom-text-100 md:text-center w-full">
        My opensource contributions
      </h1>

      <p className="w- font-paragraph tracking-tight md:text-center text-custom-text-200 my-4 mx-auto">
        Here are some of the open source repositories I have contributed to:
      </p>

      <div className="md:w-[56rem] mt-4 w-full">
        {Object.values(repositiories).map((repo) => (
          <div key={repo.url} className="flex items-center py-4 md:px-4 border-b border-custom-border-200">
            <Link href={`/opensource-contributions/@${repo.org}-${repo.name}`} className="flex items-center w-fit">
              <Image src={repo.avatar} alt="github" width={24} height={24} className="rounded-md" />
              <p className="ml-2 font-medium font-paragraph tracking-tight text-custom-text-100 hover:underline">
                @{repo.org}/{repo.name}
              </p>
            </Link>
            <Link href={repo.url} rel="noopener noreferrer" target="_blank">
              <RedirectIcon className="h-3 w-3 ml-2 stroke-current text-custom-text-200 fill-current" />
            </Link>
          </div>
        ))}
      </div>

      <Link
        href={"https/github.com/1akhanbaheti"}
        rel="noopener noreferrer"
        target="_blank"
        className="mx-auto flex items-center bg-custom-primary-200 text-base font-bold font-raleway mt-[50px] h-[65px] px-[25px] text-white rounded-lg"
      >
        Checkout Github
        <div>
          <RedirectIcon className="h-3 w-3 ml-2 stroke-current stroke-[4px] fill-white" />
        </div>
      </Link>
    </div>
  </div>
);
