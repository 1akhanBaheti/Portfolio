import React from "react";
import Link from "next/link";
import Image from "next/image";
// components
import RedirectIcon from "@/icons/redirect";
// constants
import { repositiories } from "@/constants";

export default function OpensourceContibutionsPage() {
  return (
    <div className="min-h-[100vh] h-fit flex flex-col pt-10 bg-custom-background-100 max-w-7xl mx-auto">
      <h1 className="font-heading text-4xl">My contributions</h1>
      <div>
        <p className="font-paragraph tracking-tight text-custom-text-200 my-4">
          Here are some of the open source repositories I have contributed to:
        </p>
      </div>
      {Object.values(repositiories).map((repo) => (
        <div
          key={repo.url}
          className="flex items-center p-4 border-b border-custom-border-200"
        >
          <Link
            href={`/opensource-contributions/@${repo.org}-${repo.name}`}
            className="flex items-center w-fit"
          >
            <Image
              src={repo.avatar}
              alt="github"
              width={24}
              height={24}
              className="rounded-md"
            />
            <p className="ml-2 font-medium font-paragraph tracking-tight text-custom-text-100 hover:underline">
              @{repo.org}/{repo.name}
            </p>
          </Link>
          <RedirectIcon
            href={repo.url}
            className="h-3 w-3 ml-2 stroke-current fill-custom-text-100"
          />
        </div>
      ))}
    </div>
  );
}
