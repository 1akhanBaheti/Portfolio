import React from "react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon, StackOverflowIcon } from "@/icons";
import ContactMeForm from "./contact-me-form";

export const ContactMePage = () => (
  <div className="flex flex-col items-center h-full w-full mx-auto py-20">
    <h1 className="font-heading font-bold text-3xl text-custom-text-100 text-center w-full">Contact Me</h1>
    <div className="flex py-12 gap-x-10 xl:max-w-6xl">
      <div className="relative flex flex-col bg-custom-primary-200 w-fit px-6 py-8 rounded-3xl max-w-[40%]">
        <h3 className="text-white font-raleway font-semibold text-3xl text-custom-text-100">Say Hello!</h3>
        <p className="text-white/75 font-paragraph tracking-tight text-base my-4">
          Interested in working together or just have a question? Let’s connect and make things happen.
        </p>

        <h4 className="text-white font-raleway font-semibold text-xl text-custom-text-100 my-6">Email</h4>
        <a href="mailto:" className="text-white font-paragraph text-base hover:underline">
          Lakhanbaheti9@gmail.com
        </a>

        <h4 className="text-white font-raleway font-semibold text-xl text-custom-text-100 my-6">Phone</h4>
        <a href="tel:+91 9111111111" className="text-white font-paragraph text-base hover:underline">
          +91 9685628805
        </a>

        <h4 className="text-white font-raleway font-semibold text-xl text-custom-text-100 my-6">Location</h4>
        <a href="tel:+91 9111111111" className="text-white font-paragraph text-base hover:underline">
          Raipur, Chhattisgarh, India
        </a>

        {/* connect links */}

        <div className="absolute flex gap-x-6 items-center justify-center bottom-8 w-[90%]">
          <GithubIcon className="text-white/90 stroke-current fill-white h-5 w-5 hover:fill-white/80" />
          <LinkedinIcon className="text-white/90 stroke-current fill-white h-5 w-5 hover:fill-white/80" />
          <LeetcodeIcon className="text-white/90 stroke-current fill-white h-5 w-5 hover:fill-white/80" />
          <StackOverflowIcon className="text-white/90 stroke-current fill-white h-5 w-5 hover:fill-white/80" />
        </div>
      </div>
      <div className="w-[60%]">
        <ContactMeForm />
      </div>
    </div>
  </div>
);
