import React from "react";
import Image from "next/image";
// assets
import notFoundBackground from "@/public/not-found.svg";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-[100vh] w-[100vw] absolute inset-0 h-fit z-10 flex items-center justify-center flex-col pt-10 bg-custom-background-100">
      <div className="flex flex-col items-center justify-center max-w-xl mx-auto">
        <h1 className="font-heading text-[170px]">404</h1>
        <h1 className="font-heading text-4xl">We searched far and wide.</h1>
        <p className="font-paragraph text-base tracking-tight py-4 text-center">
          We couldn't find what you were looking for. But you can go back to the
          Home page to explore the rest of the website!
        </p>
        <Link href="/">
          <div className="px-8 py-4 my-4 bg-custom-primary-200 font-raleway font-semibold text-lg rounded-lg">
            Take Me Home
          </div>
        </Link>
      </div>
    </div>
  );
}
